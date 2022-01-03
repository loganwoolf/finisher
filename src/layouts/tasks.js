import { projects } from "../modules/createProject"
import { tasks } from "../modules/createTask"
import { utility as u } from "../modules/utilityFunctions"

// conditionally render default tasks
if (tasks.taskList.length === 0) {
  tasks.addTask('Do Odin', 'Main')
	tasks.addTask('Do Lighthouse', 'Main')
	tasks.addTask('Get busy', 'Personal')
	tasks.addTask('Go crazy', 'Personal')
}

const taskLayout = ( () => {

  const state = {
		currentProject: projects.projectList[0],
		updateCurrentProject: (elementNumber) => state.currentProject = projects.projectList[elementNumber]
	}

	function buildTaskProperty (propertyName, property, taskId) {

		// create property element
		const propertyContainer = document.createElement('div')
		propertyContainer.classList.add('task-info')
		propertyContainer.classList.add(`property-${u.camelToSnake(propertyName)}`)
		
		// create property label container
		const propertyLabelContainer = document.createElement('div')
		propertyLabelContainer.classList.add('task-property')
		propertyContainer.appendChild(propertyLabelContainer)

		// create title element
		const propertyTitle = document.createElement('p')
		propertyTitle.classList.add('property-name')
		propertyTitle.innerText = u.camelToHeadline(propertyName)
		propertyLabelContainer.appendChild(propertyTitle)

		// create value element
		const propertyValue = document.createElement('p')
		propertyValue.classList.add('property-value')
		propertyValue.innerText = property
		propertyLabelContainer.appendChild(propertyValue)

		// create edit buttons for text field properties
		const editableTextProperties = ['description', 'notes']
		if ( editableTextProperties.includes(propertyName)) {
			// create action container (should be placed on every element)
			const propertyActionContainer = document.createElement('div')
			propertyActionContainer.classList.add('task-action')
			// create edit button
			const editButton = document.createElement('button')
			// apply data-id of current task to pass to event handler
			editButton.dataset.id = taskId
			// set icon of edit button
			editButton.innerText = '✏️'

			propertyActionContainer.appendChild(editButton)
			propertyContainer.appendChild(propertyActionContainer)

			editButton.addEventListener('click', editTextContents)
		}
		
		return propertyContainer
	}

	function editTextContents (e) {
		// hide edit button
		const editButton = e.target
		editButton.classList.toggle('hidden')

		// create form and text area for input
		// get current property's value element
		const propertyElement = e.target.parentNode.parentNode.firstChild.lastChild
		// create input form over value element
		const inputForm = document.createElement('form')
		propertyElement.classList.toggle('hidden')
		propertyElement.parentNode.appendChild(inputForm)
		const inputField = document.createElement('input')
		// create text placeholder text in form input
		if (propertyElement.innerText === 'None' || propertyElement.innerText === 'No notes yet' || propertyElement.innerText === '') {
			const label = propertyElement.parentNode.firstChild.innerText.toLowerCase()
			inputField.placeholder = `Add ${label}...`
		} else {
			inputField.value = propertyElement.innerText
		}
		inputForm.append(inputField)
		inputField.focus()

		// save text input to task object and render changes
		inputForm.addEventListener('submit', (e) => {
			e.preventDefault()

			// select current task using data-id (created on edit button)
			const currentTask = tasks.taskList.filter(task => task.id === +this.dataset.id)[0]
			currentTask.newDescription = inputField.value

			// restore hidden elements and display property
			inputForm.remove()
			propertyElement.innerText = currentTask.description
			propertyElement.classList.toggle('hidden')
			editButton.classList.toggle('hidden')
		})
	}

  function renderSingleTask (task) {

		const taskElement = document.createElement('div')
		taskElement.classList.add('task-element')
		taskElement.classList.add('pop-out')
		taskElement.dataset.id = task.id

		const topContainer = document.createElement('div')
		topContainer.classList.add('task-top-container')
		taskElement.appendChild(topContainer)
		
		const taskText = document.createElement('p')
		taskText.classList.add('task-title')
		taskText.innerText = task.title
		topContainer.appendChild(taskText)

		const completedCheckboxParent = document.createElement('label')
		completedCheckboxParent.classList.add('task-status')
		completedCheckboxParent.classList.add('animate-out')
		const completedCheckboxChild = document.createElement('input')
		completedCheckboxChild.type = 'checkbox'
		const customCheckbox = document.createElement('div')
		customCheckbox.classList.add('checkbox')
		completedCheckboxParent.appendChild(completedCheckboxChild)
		completedCheckboxParent.appendChild(customCheckbox)
		topContainer.appendChild(completedCheckboxParent)

		const expandButton = document.createElement('button')
		expandButton.classList.add('task-expand')
		expandButton.classList.add('animate-out')
		expandButton.innerText = '🔍'
		topContainer.appendChild(expandButton)


		const taskDetails = document.createElement('div')
		taskDetails.classList.add('task-details')
		taskDetails.classList.add('hidden')
		taskElement.appendChild(taskDetails)
		

		taskDetails.appendChild(buildTaskProperty('parentProject', task.parentProject))
		taskDetails.appendChild(buildTaskProperty('description', task.description, task.id))
		taskDetails.appendChild(buildTaskProperty('dateCreated', task.dateCreated, task.id))
		taskDetails.appendChild(buildTaskProperty('dueDate', task.dueDate, task.id))
		taskDetails.appendChild(buildTaskProperty('priority', task.priority, task.id))
		taskDetails.appendChild(buildTaskProperty('notes', task.notes, task.id))
		taskDetails.appendChild(buildTaskProperty('checklist', task.checklist, task.id))

		currentTasks.appendChild(taskElement)

		// event to toggle tasks as complete
		completedCheckboxChild.addEventListener('click', (e) => {
			e.stopPropagation()
			const taskId = +e.target.parentNode.parentNode.parentNode.dataset.id
			const currentTask = tasks.taskList.filter(task => task.id === taskId)[0]
			if (completedCheckboxChild.checked) {
				console.log('checked')
				currentTask.setStatus = true
				console.log(currentTask.status)
			} else {
				console.log('unchecked')
				currentTask.setStatus = false
				console.log(currentTask.status)
			}
		})

		// event to open details for a task
		expandButton.addEventListener('click', () => {
			taskDetails.classList.toggle('hidden')
		})
	}

	function createNewTask () {
		// select button on dom and remove event listener
		const newTaskButton = document.querySelector('.create-task')
		newTaskButton.removeEventListener('click', createNewTask)
		newTaskButton.innerText = ''
		// create a form on the button
		const inputForm = document.createElement('form')
		newTaskButton.appendChild(inputForm)
		const inputField = document.createElement('input')
		inputField.type = 'text'
		inputField.id = 'new-task-name'
		inputField.placeholder = 'New Task Name...'
		inputForm.appendChild(inputField)
		inputField.focus()
		// set event listener for input completion
		inputForm.addEventListener('submit', (e) => {
			e.preventDefault();
			// create task
			renderSingleTask(tasks.addTask(inputField.value, state.currentProject.name))
			// remove new task button and create another at the bottom
			newTaskButton.remove()
			renderCreateTaskElement()
		})
		
	}

	function renderCreateTaskElement () {
		const newTaskButton = document.createElement('button')
		newTaskButton.classList.add('create-task')
		newTaskButton.classList.add('animate-out')
		newTaskButton.innerText = 'Create New Task'
		newTaskButton.addEventListener('click', createNewTask)
		currentTasks.appendChild(newTaskButton)
	}

	function renderCurrentTasks (currentProject) {
		tasks.taskList.forEach( (task) => {
			if (task.parentProject === currentProject.name) {
				renderSingleTask(task)
			}
		})

		renderCreateTaskElement()

	}

	// render tasks 
	const currentTasks = document.createElement('div')
	currentTasks.classList.add('task-list')
	renderCurrentTasks(state.currentProject)

  return { currentTasks, state, renderCurrentTasks }

} ) ()

export { taskLayout }
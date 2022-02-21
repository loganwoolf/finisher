import { projects } from "../modules/createProject"
import { tasks } from "../modules/createTask"
import { utility } from "../modules/utilityFunctions"

const { camelToSnake, camelToHeadline, offsetTimeByZone, headlineToTaskMethods } = utility

// conditionally render default tasks
// if (tasks.taskList.length === 0) {
//   tasks.addTask('Do Odin', 'Main')
// 	tasks.addTask('Do Lighthouse', 'Main')
// 	tasks.addTask('Get busy', 'Personal')
// 	tasks.addTask('Go crazy', 'Personal')
// }

const taskLayout = ( () => {

  const state = {
		currentProject: projects.projectList[0],
		updateCurrentProject: (elementNumber) => state.currentProject = projects.projectList[elementNumber]
	}

	function buildTaskProperty (propertyName, property, taskId, task) {

		// create property element
		const propertyContainer = document.createElement('div')
		propertyContainer.classList.add('task-info')
		propertyContainer.classList.add(`property-${camelToSnake(propertyName)}`)
		
		// create property label container
		const propertyLabelContainer = document.createElement('div')
		propertyLabelContainer.classList.add('task-property')
		propertyContainer.appendChild(propertyLabelContainer)

		// create title element
		const propertyTitle = document.createElement('p')
		propertyTitle.classList.add('property-name')
		propertyTitle.innerText = camelToHeadline(propertyName)
		propertyLabelContainer.appendChild(propertyTitle)

		// create value element
		const propertyValue = document.createElement('p')
		propertyValue.classList.add('property-value')
		propertyValue.innerText = property
		propertyLabelContainer.appendChild(propertyValue)

		// create action container (append as needed)
		const propertyActionContainer = document.createElement('div')
		propertyActionContainer.classList.add('task-action')

		// create edit buttons for text field properties
		const editableTextProperties = ['description', 'notes']
		if ( editableTextProperties.includes(propertyName)) {

			// create edit button
			const editButton = document.createElement('button')
			// apply data-id of current task to pass to event handler
			editButton.dataset.id = taskId
			// set icon of edit button
			editButton.innerText = '✏️'

			propertyActionContainer.appendChild(editButton)
			propertyContainer.appendChild(propertyActionContainer)

			editButton.onclick = (e) => editTextContents(e, propertyValue, task)
		}

		// create toggle button for task priority
		const editablePriorityProperties = ['priority']
		if (editablePriorityProperties.includes(propertyName)) {
			// set propertyValue text based on urgency
			const [URGENT, NORMAL] = ['Urgent', 'Normal']
			task.priority ? propertyValue.innerText = "Urgent" : propertyValue.innerText = "Normal"

			// create toggle button for urgency
			const priorityButton = document.createElement('button')
			task.priority ? priorityButton.innerText = '😱' : priorityButton.innerText = '🥱'
			propertyActionContainer.appendChild(priorityButton)
			propertyContainer.appendChild(propertyActionContainer)

			// toggle urgency with button click
			priorityButton.onclick = () => {
				task.newPriority = !task.priority
				setLocalStorage()
				task.priority ? priorityButton.innerText = '😱' : priorityButton.innerText = '🥱'
				task.priority ? propertyValue.innerText = URGENT: propertyValue.innerText = NORMAL
			}
		}

		// create edit button for date field properties
		const editableDateProperties = ['dueDate']
		if (editableDateProperties.includes(propertyName)) {
			const dateInputLabel = document.createElement('label')
			dateInputLabel.for = 'due-date'
			dateInputLabel.dataset.id = taskId
			dateInputLabel.innerText = '📆'
			
			const dateForm = document.createElement('form')
			const dateInput = document.createElement('input')
			dateInput.type = 'date'
			dateInput.id = 'due-date'
			dateForm.appendChild(dateInput)
			
			propertyActionContainer.appendChild(dateInputLabel)
			propertyContainer.appendChild(propertyActionContainer)

			dateInputLabel.onclick = () => {
				propertyValue.parentElement.replaceChild(dateForm, propertyValue)
				dateInput.focus()
			}
			
			dateForm.oninput = () => {
				task.newDueDate = offsetTimeByZone(dateInput.valueAsDate)
				setLocalStorage()
				
				propertyValue.innerText = task.dueDate
				dateForm.parentElement.replaceChild(propertyValue, dateForm)
			}
		}

		const editableListProperties = ['checklist']
		if (editableListProperties.includes(propertyName)) {
			// create list container and remove propertyValue element (p)
			const listContainer = document.createElement('ol')
			listContainer.classList.add('property-value', 'checklist')
			propertyLabelContainer.replaceChild(listContainer, propertyValue)

			// render all existing items from localstorage
			property.forEach(item => listContainer.appendChild(createListItemElement(item)))
			
			// create button to add item to checklist
			const newChecklistItemButton = document.createElement('button')
			newChecklistItemButton.classList.add('btn-add-checklist-item')
			newChecklistItemButton.innerText = '➕'

			propertyActionContainer.appendChild(newChecklistItemButton)
			propertyContainer.appendChild(propertyActionContainer)

			newChecklistItemButton.addEventListener('click', function listen (e) {
				// remove event listener from button
				newChecklistItemButton.removeEventListener('click', listen)
				addListItem(e, listContainer, task)
			})
		}
		
		return propertyContainer
	}

	function editTextContents (e, propertyValue, task) {
		// hide edit button
		const editButton = e.target
		editButton.classList.toggle('hidden')

		// create input form over propertyValue element
		const inputForm = document.createElement('form')
		propertyValue.classList.toggle('hidden')
		propertyValue.parentNode.appendChild(inputForm)
		const inputField = document.createElement('input')
		// create text placeholder text in form input
		if (propertyValue.innerText === 'None' || propertyValue.innerText === 'No notes yet' || propertyValue.innerText === '') {
			const label = propertyValue.parentNode.firstChild.innerText.toLowerCase()
			inputField.placeholder = `Add ${label}...`
		} else {
			inputField.value = propertyValue.innerText
		}
		inputForm.append(inputField)
		inputField.focus()

		// save text input to task object and render changes
		inputForm.onsubmit = (e) => {
			e.preventDefault()

			// select current task using data-id (created on edit button)
			const propertyName = e.target.parentNode.firstChild.innerText
			const property = headlineToTaskMethods(propertyName)
			// returns and object containing setter and getter names
			// for current task property
			// access using task[property.setter] (task.newDescription)
			// or task[property.getter] (task.description)
			task[property.setter] = inputField.value

			// restore hidden elements and display property
			inputForm.remove()
			propertyValue.innerText = task[property.getter]
			propertyValue.classList.toggle('hidden')
			editButton.classList.toggle('hidden')

			setLocalStorage()
		}
	}

	function createListItemElement (itemText) {
		// creates a single checklist item
		// may pass in text from localStorage in a for each function or
		// by reading from a task object

		// create new checklist and action elements in a container 
		const checkListItem = document.createElement('li')
		checkListItem.classList.add('checklist-item-container')
		const checkListValue = document.createElement('p')
		checkListValue.classList.add('checklist-item')
		const checkListActionContainer = document.createElement('div')
		checkListActionContainer.classList.add('checklist-actions')

		// add text to element from checklist property on task object 
		checkListValue.innerText = itemText

		// replace form with updated task element
		checkListItem.appendChild(checkListValue)
		checkListItem.appendChild(checkListActionContainer)

		return checkListItem
	}

	function addListItem (e, listContainer, task) {
		let button = e.target

		// create input field to type list item content into
		const inputForm = document.createElement('form')
		const inputField = document.createElement('input')
		inputField.type = 'text'
		inputForm.appendChild(inputField)
		listContainer.appendChild(inputForm)
		inputField.focus()

		// add list item content to checklist property on task object
		inputForm.onsubmit = (e) => {
			e.preventDefault()
			// write form value to task object
			task.newChecklist = inputField.value

			// replace form with checklist value
			listContainer.replaceChild(createListItemElement(task.lastChecklist), inputForm)
			setLocalStorage()

			// add event listener back to button for more checklist items
			button.addEventListener('click', function listen (e) {
				// remove event listener from button when clicked
				button.removeEventListener('click', listen)
				addListItem(e, listContainer, task)
			})
		}
	}

	function deleteTask (e) {
		const taskId = e.target.parentNode.parentNode.dataset.id
		tasks.taskList.find( (obj, index) => {
			if (obj.id == taskId) {
				tasks.taskList.splice(index, 1)
				return true
			}
		})
		
		renderCurrentTasks(state.currentProject)
		setLocalStorage()
	}

	function renderTaskDeleteButton (parentElement, task) {
		const deleteButton = document.createElement('button')
		deleteButton.classList.add('delete-button')
		deleteButton.classList.add('task-delete-button')
		deleteButton.classList.add('pop-out')
		deleteButton.classList.add('animate-out')

		deleteButton.innerText = '🗑'
		parentElement.appendChild(deleteButton)
		
		deleteButton.addEventListener('click', deleteTask)
	}

	function deleteProject (e) {
		const tabList = document.querySelectorAll('.project-tab')
		console.log(tabList.length)
		if (tabList.length < 3) {
			alert("Can't delete the last project. Create a new project first.")
			return undefined
		}
		// select project tab and get name
		const currentProjectTab = document.querySelector('.active-project-tab')
		const currentProjectName = currentProjectTab.dataset.project

		// delete all tasks associated with project in reverse order
		for (let taskIndex = tasks.taskList.length - 1; taskIndex >= 0; taskIndex--) {
			if (tasks.taskList[taskIndex].parentProject === currentProjectName) {
				tasks.taskList.splice(taskIndex, 1)
			}
		}
		setLocalStorage()
		// delete project tab
		currentProjectTab.remove()
		// click first button in project layout
		document.querySelector('.project-tabs').firstChild.click()
	}

	function renderProjectDeleteButton (parentElement) {
		const deleteButton = document.createElement('button')
		deleteButton.classList.add('delete-button')
		deleteButton.classList.add('project-delete-button')
		deleteButton.classList.add('pop-out')
		deleteButton.classList.add('animate-out')

		deleteButton.innerText = '🗑'
		parentElement.appendChild(deleteButton)

		deleteButton.addEventListener('click', deleteProject)
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
		// set checkbox as per task status
		task.status ? completedCheckboxChild.checked = true : completedCheckboxChild.checked = false
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

		// create task detail container
		const taskDetails = document.createElement('div')
		taskDetails.classList.add('task-details')
		taskDetails.classList.add('hidden')
		taskElement.appendChild(taskDetails)
		
		// draw task details
		taskDetails.appendChild(buildTaskProperty('parentProject', task.parentProject, task))
		taskDetails.appendChild(buildTaskProperty('description', task.description, task.id, task))
		taskDetails.appendChild(buildTaskProperty('dateCreated', task.dateCreated, task.id, task))
		taskDetails.appendChild(buildTaskProperty('dueDate', task.dueDate, task.id, task))
		taskDetails.appendChild(buildTaskProperty('priority', task.priority, task.id, task))
		taskDetails.appendChild(buildTaskProperty('notes', task.notes, task.id, task))
		taskDetails.appendChild(buildTaskProperty('checklist', task.checklist, task.id, task))

		currentTasks.appendChild(taskElement)

		// event to toggle tasks as complete
		completedCheckboxChild.addEventListener('click', (e) => {
			e.stopPropagation()
			const taskId = +e.target.parentNode.parentNode.parentNode.dataset.id
			const currentTask = tasks.taskList.filter(task => task.id === taskId)[0]
			if (completedCheckboxChild.checked) {
				currentTask.setStatus = true
			} else {
				currentTask.setStatus = false
			}
			setLocalStorage()
		})

		// event to open details for a task
		expandButton.addEventListener('click', () => {
			taskDetails.classList.toggle('hidden')
		})

		renderTaskDeleteButton(taskDetails, task)
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
			setLocalStorage()

			// move project delete button to bottom
			const deleteButton = document.querySelector('.project-delete-button')
			deleteButton.remove()
			renderProjectDeleteButton(document.querySelector('.task-list'))
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
		currentTasks.replaceChildren()
		tasks.taskList.forEach( (task) => {
			if (task.parentProject === currentProject.name) {
				renderSingleTask(task)
			}
		})

		renderCreateTaskElement()
		renderProjectDeleteButton(currentTasks)
	}

	function setLocalStorage () {
    const taskListSerialized = JSON.stringify(tasks.taskList)
		localStorage.setItem('taskList', taskListSerialized)
  }

	function getLocalStorage () {
		const taskListDeserialized = JSON.parse(localStorage.getItem('taskList'))
		taskListDeserialized.forEach(task => {
			tasks.addTask(task.title, task.parentProject, task)
			if ( projects.projectList.filter(project => project.name === task.parentProject).length === 0 ) {
					projects.addProject(task.parentProject)
				}
		})
	}

	// render tasks 
	const currentTasks = document.createElement('div')
	currentTasks.classList.add('task-list')

  return { currentTasks, state, renderCurrentTasks, getLocalStorage, setLocalStorage }

} ) ()

export { taskLayout }
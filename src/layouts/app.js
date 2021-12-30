import { tasks } from "../modules/createTask"
import { projects } from "../modules/createProject"
import { utility as u } from "../modules/utilityFunctions"

// conditionally render default projects
if (projects.projectList.length === 0) {
	projects.addProject('Main')
	projects.addProject('Personal')

	tasks.addTask('Do Odin', 'Main')
	tasks.addTask('Do Lighthouse', 'Main')
	tasks.addTask('Get busy', 'Personal')
	tasks.addTask('Go crazy', 'Personal')
}

const app = (() => {

	const state = {
		currentProject: projects.projectList[0],
		updateCurrentProject: (elementNumber) => state.currentProject = projects.projectList[elementNumber]
	}

	function switchCurrentProject (e) {
		// check which project button was clicked
		let elementNumber = [...e.target.parentNode.children].indexOf(e.target)
		// check that only a button was clicked
		if (e.target.localName === 'button') {
			if (elementNumber === projects.projectList.length) {
				// create new project
				// projects.addProject('New Project')
				// insert tab into list
			} else {
				// remove active project tab class from previous tab
				const previousProjectTab = document.querySelector('.active-project-tab')
				previousProjectTab.classList.remove('active-project-tab')
				
				// update state to new project
				state.updateCurrentProject(elementNumber)
				
				// remove visible tasks
				const taskElement = document.querySelector('.task-list')
				taskElement.replaceChildren()
				
				// apply active project tab style
				e.target.classList.add('active-project-tab')
				
				// render tasks from new current project
				renderCurrentTasks(state.currentProject)
				
			}
		}
	}

	function renderProjectTabs () {
		projects.projectList.forEach( ( project, index ) => {
			const projectTab = document.createElement('button')
			projectTab.classList.add('project-tab')
			projectTab.dataset.project = project.name
			index === 0 ? projectTab.classList.add('active-project-tab') : undefined

			projectTab.textContent = project.name

			projectTabs.appendChild(projectTab)
		})
		// create add new project button
		const newProjectButton = document.createElement('button')
		newProjectButton.classList.add('project-tab')
		newProjectButton.classList.add('new-project')
		newProjectButton.textContent = '➕'

		projectTabs.appendChild(newProjectButton)
	}

	function buildTaskProperty (propertyName, property) {
		const propertyContainer = document.createElement('div')
		propertyContainer.classList.add('task-info')
		propertyContainer.classList.add(`property-${u.camelToSnake(propertyName)}`)
		
		const propertyLabelContainer = document.createElement('div')
		propertyLabelContainer.classList.add('task-property')
		propertyContainer.appendChild(propertyLabelContainer)

		const propertyLabel = document.createElement('p')
		propertyLabel.classList.add('property-name')
		propertyLabel.innerText = u.camelToHeadline(propertyName)
		propertyLabelContainer.appendChild(propertyLabel)

		const propertyValue = document.createElement('p')
		propertyValue.classList.add('property-value')
		propertyValue.innerText = property
		propertyLabelContainer.appendChild(propertyValue)
		
		const editableTasks = ['parentProject', 'description', 'dueDate', 'notes']
		if ( editableTasks.includes(propertyName)) {
			const propertyActionContainer = document.createElement('div')
			propertyActionContainer.classList.add('task-action')
			const editButton = document.createElement('button')
			editButton.innerText = '✏️'
			propertyActionContainer.appendChild(editButton)
			propertyContainer.appendChild(propertyActionContainer)
		}
		
		return propertyContainer
	}

	function renderSingleTask (task) {

		const taskElement = document.createElement('div')
		taskElement.classList.add('task-element')
		taskElement.classList.add('pop-out')
		taskElement.dataset.id = task.id

		const topContainer = document.createElement('div')
		topContainer.classList.add('task-top-container')
		
		const taskText = document.createElement('p')
		taskText.classList.add('task-title')
		taskText.innerText = task.title

		const expandButton = document.createElement('button')
		expandButton.classList.add('task-expand')
		expandButton.classList.add('animate-out')
		expandButton.innerText = '🔍'


		const taskDetails = document.createElement('div')
		taskDetails.classList.add('task-details')
		taskDetails.classList.add('hidden')
		

		taskElement.appendChild(topContainer)
		topContainer.appendChild(taskText)
		topContainer.appendChild(expandButton)
		taskElement.appendChild(taskDetails)
		taskDetails.appendChild(buildTaskProperty('parentProject', task.parentProject))
		taskDetails.appendChild(buildTaskProperty('description', task.description))
		taskDetails.appendChild(buildTaskProperty('dateCreated', task.dateCreated))
		taskDetails.appendChild(buildTaskProperty('dueDate', task.dueDate))
		taskDetails.appendChild(buildTaskProperty('priority', task.priority))
		taskDetails.appendChild(buildTaskProperty('notes', task.notes))
		taskDetails.appendChild(buildTaskProperty('checklist', task.checklist))

		currentTasks.appendChild(taskElement)

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

  function addProjectTabListener () {
    const projectList = document.querySelector('.project-tabs')

    projectList.addEventListener('click', switchCurrentProject)
  }

	// render project tabs
	const projectTabs = document.createElement('div')
	projectTabs.classList.add('project-tabs')
	renderProjectTabs()

	// render tasks 
	const currentTasks = document.createElement('div')
	currentTasks.classList.add('task-list')
	renderCurrentTasks(state.currentProject)

	// create layoutElement to pass to index.js
	const layoutElement = document.createElement('div')
	layoutElement.classList.add('layout')
	// mount app onto layoutElement
	layoutElement.appendChild(projectTabs)
	layoutElement.appendChild(currentTasks)

	return { layoutElement, addProjectTabListener }
})()



export { app }
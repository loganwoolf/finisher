import { tasks } from "../modules/createTask"
import { projects } from "../modules/createProject"
import { determineTaskEnterAction, determineTaskLeaveAction, determineTaskClickAction } from "../modules/taskActions";

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

	function renderCurrentTasks (currentProject) {
		tasks.taskList.forEach( (task) => {
			if (task.parentProject === currentProject.name) {

				const taskElement = document.createElement('div')
				taskElement.classList.add('task-element')
				taskElement.dataset.id = task.id
				
				const taskText = document.createElement('p')
				taskText.innerText = task.title
				
				taskElement.appendChild(taskText)
				currentTasks.appendChild(taskElement)
			}
		})
		
		
	}

  function addProjectTabListener () {
    const projectList = document.querySelector('.project-tabs')

    projectList.addEventListener('click', switchCurrentProject)
  }

	function addTaskListener () {
		const tasks = document.querySelector('.task-list')

		tasks.addEventListener('mouseover', determineTaskEnterAction)
		tasks.addEventListener('mouseout', determineTaskLeaveAction)
		tasks.addEventListener('click', determineTaskClickAction)
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

	return { layoutElement, addProjectTabListener, addTaskListener }
})()



export { app }
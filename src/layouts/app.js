import { tasks } from "../modules/createTask"
import { projects } from "../modules/createProject"

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
			state.updateCurrentProject(elementNumber)
			// remove visible tasks
			const taskElement = document.querySelector('.task-list')
			taskElement.replaceChildren()

			// render tasks from new current project
			renderCurrentTasks(state.currentProject)

		}
	}
	// render project tabs
	const projectTabs = document.createElement('div')
	projectTabs.classList.add('project-tabs')

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

	renderProjectTabs()


	// render tasks 
	const currentTasks = document.createElement('div')
	currentTasks.classList.add('task-list')

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

	renderCurrentTasks(state.currentProject)



  function addProjectTabListener () {
    const projectList = document.querySelector('.project-tabs')


    projectList.addEventListener('click', switchCurrentProject)
  }

	const layoutElement = document.createElement('div')
	layoutElement.classList.add('layout')

	layoutElement.appendChild(projectTabs)
	layoutElement.appendChild(currentTasks)


	return { layoutElement, renderProjectTabs, renderCurrentTasks, addProjectTabListener }
})()



export { app }
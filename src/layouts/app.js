import { tasks } from "../modules/createTask"
import { projects } from "../modules/createProject"

const app = () => {

	const state = {
		currentProject: projects.projectList[0]
	}

	const layoutElement = document.createElement('div')
	layoutElement.classList.add('layout')

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

	layoutElement.appendChild(projectTabs)
	layoutElement.appendChild(currentTasks)

	return layoutElement
}

export { app }
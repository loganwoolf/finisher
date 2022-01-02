import { projects } from "../modules/createProject"

// conditionally render default projects
if (projects.projectList.length === 0) {
	projects.addProject('Main')
	projects.addProject('Personal')
}

const projectLayout = (() => {

	function renderProjectTabs () {
		projects.projectList.forEach( ( project, index ) => {
			const projectTab = document.createElement('button')
			projectTab.classList.add('project-tab')
			projectTab.dataset.project = project.name
			index === 0 ? projectTab.classList.add('active-project-tab') : undefined

			projectTab.textContent = project.name

			tabs.appendChild(projectTab)
		})
	}

	function renderNewProjectTab () {

		// create add new project button
		const newProjectButton = document.createElement('button')
		newProjectButton.classList.add('project-tab')
		newProjectButton.classList.add('new-project')
		newProjectButton.textContent = '➕'

		tabs.appendChild(newProjectButton)
	}

	// render project tabs
	const tabs = document.createElement('div')
	tabs.classList.add('project-tabs')
	renderProjectTabs()
	renderNewProjectTab()

  return { tabs }
})()

export { projectLayout }
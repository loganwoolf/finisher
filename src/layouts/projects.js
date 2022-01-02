import { projects } from "../modules/createProject"

// conditionally render default projects
if (projects.projectList.length === 0) {
	projects.addProject('Main')
	projects.addProject('Personal')
}

const projectLayout = (() => {

	function renderProjectTabs () {
		// clear everything from tabs area
		tabs.replaceChildren()
		
		// loop through all projects and render a tab for each
		projects.projectList.forEach( ( project, index ) => {
			const projectTab = document.createElement('button')
			projectTab.classList.add('project-tab')
			projectTab.dataset.project = project.name
			index === 0 ? projectTab.classList.add('active-project-tab') : undefined

			projectTab.textContent = project.name

			tabs.appendChild(projectTab)
			
		})
		// render the create project tab at the end
		renderCreateProjectTab()
	}

	function renderCreateProjectTab () {

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

  return { tabs, renderProjectTabs }
})()

export { projectLayout }
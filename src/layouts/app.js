import { projects } from "../modules/createProject";
import { projectLayout } from "./projects";
import { tasks } from "../modules/createTask";
import { taskLayout } from "./tasks";
import { utility as u } from "../modules/utilityFunctions";


const app = (() => {

  function addProjectTabListener () {
    projectLayout.tabs.addEventListener('click', determineButtonAction)
  }

	function switchActiveProject (e) {
		// check which project button was clicked
		let elementNumber = [...e.target.parentNode.children].indexOf(e.target)
		// remove active project tab class from previous tab
		const previousProjectTab = document.querySelector('.active-project-tab')
		previousProjectTab.classList.remove('active-project-tab')

		// update state to new project
		taskLayout.state.updateCurrentProject(elementNumber)

		// remove visible tasks
		const taskElement = document.querySelector('.task-list')
		taskElement.replaceChildren()

		// apply active project tab style
		e.target.classList.add('active-project-tab')

		// render tasks from new current project
		taskLayout.renderCurrentTasks(taskLayout.state.currentProject)

	}

	function createNewProject (e) {
		const newProjectButton = e.target

		// remove active project tab class from previous tab
		const previousProjectTab = document.querySelector('.active-project-tab')
		previousProjectTab?.classList.remove('active-project-tab')

		// apply active project tab style
		e.target.classList.add('active-project-tab')

		// clear innerText of button
		newProjectButton.innerText = null

		// create form on button to take input of new project name
		const field = document.createElement('input')
		field.type = 'text'
		field.addEventListener('input', u.growInputField)
		
		const form = document.createElement('form')
		form.appendChild(field)
		newProjectButton.appendChild(form)
		field.focus()

		//
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			// check no other project with that name exists
			//
			//

			// create the project
			const newProjectName = e.target.firstChild.value
			projects.addProject(newProjectName)

			// render project tabs again
			projectLayout.renderProjectTabs()

			//select the newly made project
			document.querySelector(`[data-project=${newProjectName}`).click()
			//begin creating first task
			document.querySelector('.create-task').click()
		})

	}

	function determineButtonAction (e) {
		// check that only a project button was clicked
		if (e.target.dataset.project) {
			switchActiveProject(e)
		} else if ([...e.target.classList].includes('new-project')) {
			createNewProject(e)
		}
	}

	// check for localStorage entry
if ( JSON.parse(localStorage.getItem('taskList')) === null
	|| JSON.parse(localStorage.getItem('taskList')).length === 0 ) {
	projects.addProject('Main')
	tasks.addTask('Do Odin', 'Main')
} else {
	taskLayout.getLocalStorage()
}
	taskLayout.state.updateCurrentProject(0)

	// render project tabs
	projectLayout.renderProjectTabs()
	// render tasks
	taskLayout.renderCurrentTasks(taskLayout.state.currentProject)

	// create layoutElement to pass to index.js
	const layoutElement = document.createElement('main')
	layoutElement.classList.add('app')
	// mount app onto layoutElement
	layoutElement.appendChild(projectLayout.tabs)
	layoutElement.appendChild(taskLayout.currentTasks)

	addProjectTabListener()

	return { layoutElement }
})()



export { app }
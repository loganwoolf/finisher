import { projects } from "../modules/createProject";
import { projectLayout } from "./projects";
import { taskLayout } from "./tasks";


const app = (() => {

  function addProjectTabListener () {
    projectLayout.tabs.addEventListener('click', switchCurrentProject)
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
				taskLayout.state.updateCurrentProject(elementNumber)
				
				// remove visible tasks
				const taskElement = document.querySelector('.task-list')
				taskElement.replaceChildren()
				
				// apply active project tab style
				e.target.classList.add('active-project-tab')
				
				// render tasks from new current project
				taskLayout.renderCurrentTasks(taskLayout.state.currentProject)
				
			}
		}
	}

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

const tasks = (() => {
	
	const taskList = []

	const taskFactory = (taskTitle, projectId) => {
		const timestamp = new Date()

		let title = taskTitle
		const id = timestamp.getTime()
		let parentProject = ''// projects.projectList[0] // interface needed
		let description = ''
		let dueDate = ''
		let priority = false
		let notes = ''
		let checklist = []


		return {
			get title() {
				return title
			},
			set newTitle(newTitle) {
				title = newTitle
			},

			get id() {
				return id
			},

			get parentProject() {
				return parentProject
			},
			set newParentProject(newProject) {
				parentProject = newProject
			},

			get description() {
				return description
			},
			set newDescription(newDescription) {
				description = newDescription
			},

			get dueDate() {
				return dueDate
			},
			set newDueDate(newDueDate) {
				dueDate = newDueDate
			},

			get priority() {
				return priority
			},
			set newPriority(newPriority) {
				priority = newPriority
			},

			get notes() {
				return notes
			},
			set newNotes(newNotes) {
				notes = newNotes
			},

			get checklist() {
				return checklist
			},
			set newChecklist(newChecklist) {
				checklist = newChecklist
			},
		}
	}

	const addTask = ( title ) => {
		const newTask = taskFactory(title)
		taskList.push(newTask)
	}

	addTask('First task') // remove for prod
	addTask('Go crazy')

	return { taskList }
})()

export { tasks }
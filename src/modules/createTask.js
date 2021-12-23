
const tasks = (() => {
	
	const taskList = []

	const taskFactory = (taskTitle, projectName) => {
		const timestamp = new Date()

		let title = taskTitle
		const id = timestamp.getTime()
		let parentProject = projectName
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
			set newParentProject(newProjectName) {
				parentProject = newProjectName
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

	const addTask = ( title, project ) => {
		const newTask = taskFactory(title, project)
		taskList.push(newTask)
	}

	return { taskList, addTask }
})()

export { tasks }
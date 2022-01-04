import { utility as u } from "./utilityFunctions"	

const tasks = (() => {
	
	const taskList = []

	const taskFactory = (taskTitle, projectName, knownProperties = {} ) => {
		

		let title = taskTitle
		let status = knownProperties.status || false
		const id = knownProperties.id || Math.ceil(Math.random() * 999999)
		let parentProject = knownProperties.parentProject || projectName
		let description = knownProperties.description || 'None'
		const dateCreated = u.offsetTimeByZone(new Date(knownProperties.dateCreated)) || new Date()
		let dueDate = knownProperties.dueDate || 'None'
		let priority = knownProperties.priority || false
		let notes = knownProperties.notes || 'No notes yet'
		let checklist = knownProperties.checklist || []


		return {
			get title() {
				return title
			},
			set newTitle(newTitle) {
				title = newTitle
			},

			get status() {
				return status
			},
			set setStatus(bool) {
				if (typeof bool === 'boolean') {
					status = bool
				}
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

			get dateCreated() {
				return `${dateCreated.getFullYear()}-${u.padZero(dateCreated.getMonth() + 1)}-${u.padZero(dateCreated.getDate())}`
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
		return newTask
	}

	return { taskList, addTask }
})()

export { tasks }
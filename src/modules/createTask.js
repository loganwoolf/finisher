import { utility } from "./utilityFunctions"

const { offsetTimeByZone, padZero } = utility

const tasks = (() => {
	
	const taskList = []

	const taskFactory = (taskTitle, projectName, knownProperties = {} ) => {

		let title = taskTitle
		let status = knownProperties.status || false
		const id = knownProperties.id || Math.ceil(Math.random() * 999999)
		let parentProject = knownProperties.parentProject || projectName
		let description = knownProperties.description || 'None'
		let dateCreated = new Date()
		if (knownProperties.dateCreated) {
			let utcDate = new Date(knownProperties.dateCreated)
			dateCreated = offsetTimeByZone(utcDate)
		}
		let dueDate = 'None'
		if (knownProperties.dueDate && knownProperties.dueDate !== 'None') {
			let utcDate = new Date(knownProperties.dueDate)
			dueDate = offsetTimeByZone(utcDate)
		}
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
				return `${dateCreated.getFullYear()}-${padZero(dateCreated.getMonth() + 1)}-${padZero(dateCreated.getDate())}`
			},
			get dateCreatedAsDate() {
				return dateCreated
			},

			get dueDate() {
				return typeof dueDate === 'object' 
					? `${dueDate.getFullYear()}-${padZero(dueDate.getMonth() + 1)}-${padZero(dueDate.getDate())}`
					: 'None'
			},
			get dueDateAsDate() {
				return typeof dueDate === 'object'
					? dueDate
					: undefined
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
			get lastChecklist() {
				return checklist[checklist.length-1]
			},
			set newChecklist(newChecklist) {
				checklist.push(newChecklist)
			},
		}
	}

	const addTask = ( title, project, knownProperties = {} ) => {
		const newTask = taskFactory(title, project, knownProperties )
		taskList.push(newTask)
		return newTask
	}

	return { taskList, addTask }
})()

export { tasks }
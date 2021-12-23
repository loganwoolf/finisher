
const projects = (() => {

	const projectList = []

	const projectFactory = ( projectName ) => {
		const timestamp = new Date()
		
		let name = projectName
		const id = timestamp.getTime()
		
		return {
			get name() {
				return name
			},
			set newName(newName) {
				name = newName
			},
			get id() {
				return id
			}
		}
	}
	
	const addProject = ( name ) => {
		const newProject = projectFactory(name)
		projectList.push(newProject)
	}
	
	addProject('Main')
	addProject('Personal')

	return { projectList }
})() 

export { projects }
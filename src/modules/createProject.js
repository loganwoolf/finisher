
const projects = ( () => {

	const projectList = []

	const projectFactory = ( projectName ) => {
		
		let name = projectName
		const id = Math.ceil(Math.random() * 999999)
		
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

	return { projectList, addProject }
} ) () 

export { projects }
import './style.css'
import { app } from './layouts/app'


function moduleRender() {
	const jsTarget = document.createElement('div')
	jsTarget.classList.add('js-target')

	// modules to load below
	jsTarget.appendChild(app.layoutElement)
	

	return jsTarget
}

document.body.appendChild(moduleRender())
app.addProjectTabListener()
app.addTaskListener()
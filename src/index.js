import './style.css'
import { app } from './layouts/app'
import { header } from "./layouts/header"
import { footer } from "./layouts/footer";

document.body.appendChild(header.element)
document.body.appendChild(app.layoutElement)
document.body.appendChild(footer.element)
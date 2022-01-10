

const header = ( () => {
  const APPTITLE = 'finisher'
  const SUBTITLE = 'Getting your tasks DONE!'

  const element = document.createElement('header')

  const appTitle = document.createElement('h1')
  appTitle.innerText = APPTITLE

  const subTitle = document.createElement('h2')
  subTitle.innerText = SUBTITLE


  element.appendChild(appTitle)
  // element.append(subTitle)


  return { element }

} ) ()

export { header }
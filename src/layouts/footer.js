

const footer = ( () => {

  const ATTRIBUTION = 'Built in 🍁 by '
  const LINKTEXT = 'Logan Woolf'
  const GITHUBLINK = 'https://www.github.com/loganwoolf'

  const element = document.createElement('footer')

  const attribution = document.createElement('p')
  attribution.innerHTML = ATTRIBUTION

  const githubLink = document.createElement('a')
  githubLink.classList.add('zoom')
  githubLink.href = GITHUBLINK
  githubLink.innerText = LINKTEXT


  element.appendChild(attribution)
  element.appendChild(githubLink)
  
  return { element }

} ) ()

export { footer }
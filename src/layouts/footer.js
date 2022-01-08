

const footer = ( () => {

  const ATTRIBUTION = 'Coded in 🍁 by '
  const LINKTEXT = 'Logan Woolf'
  const GITHUBLINK = 'https://www.github.com/loganwoolf'

  const element = document.createElement('footer')

  const githubLink = document.createElement('a')
  githubLink.href = GITHUBLINK
  githubLink.innerText = LINKTEXT
  const attribution = document.createElement('p')
  attribution.innerHTML = ATTRIBUTION
  attribution.appendChild(githubLink)

  element.appendChild(attribution)
  
  return { element }

} ) ()

export { footer }
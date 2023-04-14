const modeButton = document.querySelector('[data-js="mode-button"]')
const body = document.querySelector('body')

const changeButtonText = () => modeButton.textContent === 'Change to dark mode view' 
  ? 'Change to light mode view' 
  : 'Change to dark mode view'

const changeDisplayMode = () => {
  const backgroundBars = document.querySelectorAll('[data-js="background-bar"]') 

  modeButton.textContent = changeButtonText()
  modeButton.classList.toggle('dark-mode-button')
  
  body.classList.toggle('w3-light-grey')
  body.classList.toggle('dark-mode-body')
  
  containers.forEach(container => {
    container.classList.toggle('w3-white')
    container.classList.toggle('dark-container')
  })

  backgroundBars.forEach(bar => {
    bar.classList.toggle('w3-light-grey')
    bar.classList.toggle('dark-background-bar')
  })

  containers[0].classList.toggle('w3-text-grey') // título principal (nome do perfil) do container esquerdo

}



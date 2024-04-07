const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const startBt = document.querySelector('.app__card-primary-button')

//
const banner = document.querySelector('.app__image')
const displayTime = document.querySelector('.app__card-timer')
const titulo = document.querySelector('.app__title')


//times value
const focoInitValue = 1500
const descansoCurtoInitValue = 300
const descansoLongoInitValue = 900


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})
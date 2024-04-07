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

//uso de template literal/ swing
function handleChange(mode) {
    html.setAttribute('data-contexto', mode)
    banner.setAttribute('src', `imagens/${mode}.png`)

    switch (mode) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta.</strong>`
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
        default:
            break;
    }

}

focoBt.addEventListener('click', () => {
    handleChange('foco')
})

curtoBt.addEventListener('click', () => {
    handleChange('descanso-curto')
})

longoBt.addEventListener('click', () => {
    handleChange('descanso-longo')
})





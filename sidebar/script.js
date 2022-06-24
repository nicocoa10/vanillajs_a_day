
const menuButton = document.querySelector('.menu')

menuButton.addEventListener('click', () => {
    const navbar= document.querySelector('.navbar')

    if (navbar.classList.contains('open')){
        navbar.classList.remove('open')
    }
    else{
        navbar.classList.add('open')
    }
})

const closeButton = document.querySelector('.close')

closeButton.addEventListener('click', () => {
    const navbar= document.querySelector('.navbar')
    if (navbar.classList.contains('open')){
        navbar.classList.remove('open')
    }
})
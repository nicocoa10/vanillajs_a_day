const menuButton = document.querySelector('.menu')

const navbar = document.querySelector('.navbar')

let open = false

menuButton.addEventListener('click', () => {

    if (!open){
        navbar.classList.add('open')
        open= true

    }
    else if (open){
        navbar.classList.remove('open')
        open=false
    }

})
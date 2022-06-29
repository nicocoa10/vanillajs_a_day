
const openButton = document.querySelector('.open-button')
const closeButton = document.querySelector('.close-button')



openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)


function openModal (e){

    const modalSection = document.querySelector('.modal')
    modalSection.classList.add('open')

    
}

function closeModal (e){

    const modalSection = document.querySelector('.modal')
    
    
    if (modalSection.classList.contains('open')){

        modalSection.classList.remove('open')

    }

    
}


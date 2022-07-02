

const toggle = document.querySelectorAll('.toggle')


function toggler(e){

    const answerSection=e.target.parentElement.nextElementSibling



    if (answerSection.classList.contains('open')){

        answerSection.classList.remove('open')
        e.target.classList.remove('uil-minus-square')
        e.target.classList.add('uil-plus-square')


    }
    else{
        answerSection.classList.add('open')
        e.target.classList.remove('uil-plus-square')
        e.target.classList.add('uil-minus-square')



    }
}

toggle.forEach((button) => {
    button.addEventListener('click', (e) => 
    {

        toggler(e)
        
    })

})


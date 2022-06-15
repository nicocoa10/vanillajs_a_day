const counterValue = document.querySelector('.value')

let counter = parseInt(counterValue.textContent)

// console.log(counter)

//get buttons 

const increaseButton = document.querySelector('.increase')
const decreaseButton = document.querySelector('.decrease')
const reset = document.querySelector('.reset')


//event listeners

increaseButton.addEventListener('click', increaseCounter)
decreaseButton.addEventListener('click', decreaseCounter)
reset.addEventListener('click', resetCounter)




//functions

function increaseCounter(e){

    counter++ 
    updateCounterValue()

}

function decreaseCounter(e){

    counter-- 
    updateCounterValue()

}

function resetCounter(e){

    counter=0; 
    updateCounterValue()

}


function updateCounterValue(){
    if (counter>0){
        console.log('green')
        counterValue.className = 'value green'
    }

    if (counter==0){
        console.log('nothing')
        counterValue.className = 'value'

    }


    if (counter<0){
        console.log('red')
        counterValue.className = 'value red'

    }
    
    counterValue.innerHTML = counter;
}


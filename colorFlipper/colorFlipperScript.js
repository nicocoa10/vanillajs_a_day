
// array with stored colors 
const myColors = ['Red', 'rgba(133,122,200)','Green' , '#F15025' ]

// const myHexColors= ['']
// button 

const myButton = document.querySelector('.color-changer')

let mode = 'simple'


//reset 

const simpleMode = document.querySelector('.simple')

simpleMode.addEventListener('click', (e) => {
    mode = 'simple'
    const body = document.body
    body.style.backgroundColor = '#F1f5f8'

    const colorText = document.querySelector('.color')

    colorText.textContent = '#F1f5f8'
})


const hexMode = document.querySelector('.hex')

hexMode.addEventListener('click', (e) => {
    mode = 'hex'
    const body = document.body
    body.style.backgroundColor = '#F1f5f8'

    const colorText = document.querySelector('.color')

    colorText.textContent = '#F1f5f8'
})



// event listener

myButton.addEventListener('click', changeColor)


function changeColor(e){
    // pick a random color from the list
    color= ''
    console.log(mode)

    if (mode === 'simple'){
        color = pickRandomColor()

    }
    else if (mode === 'hex'){
        color = pickRandomHexColor()
    }


    //set backround to the color
    const body = document.body
    body.style.backgroundColor = color
    console.log(color)

    //set the background color text
    const colorText = document.querySelector('.color')

    colorText.textContent = color

}

function pickRandomHexColor(){

    const thirdDigit= Math.floor(Math.random() * (9-1 - 0 + 1)) + 0
    const fourthDigit= Math.floor(Math.random() * (9-1 - 0 + 1)) + 0
    const fifthDigit= Math.floor(Math.random() * (9-1 - 0 + 1)) + 0
    const sixthDigit= Math.floor(Math.random() * (9-1 - 0 + 1)) + 0
    const secondDigit= Math.floor(Math.random() * (9-1 - 0 + 1)) + 0




    return `#F${secondDigit}${thirdDigit}${fourthDigit}${fifthDigit}${sixthDigit}`
}


function pickRandomColor(){
    number = Math.floor(Math.random() * (myColors.length-1 - 0 + 1)) + 0;
    console.log(number)

    return myColors[number]


}
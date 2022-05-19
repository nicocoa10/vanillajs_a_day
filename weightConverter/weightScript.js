
// firsto nf all lets get the input
const poundsInput = document.querySelector('#value')

console.log(poundsInput)


// event listener to when user types/enters a number

poundsInput.addEventListener('input',converter)


function converter(e){

    const poundsValue= Number(e.target.value)

    //update Grams Div
    const gramsP= document.querySelector('.grams-value')
    gramsP.textContent= convertToGrams(poundsValue).toString()

    //update KiloGrams Div
    const kilogramsP= document.querySelector('.kilograms-value')
    kilogramsP.textContent= convertToKiloGrams(poundsValue).toString()
    //update ounces Div
    const ouncesP= document.querySelector('.ounces-value')
    ouncesP.textContent= convertToOunces(poundsValue).toString()

    
}

//lets create a function to convert pounds to grams 

function convertToGrams(pounds){

    return pounds* 453.592
}


//lets create a function to convert pounds to kgrams 

function convertToKiloGrams(pounds){

    return pounds* 0.453592
}
//lets create a function to convert pounds to ounces 

function convertToOunces(pounds){

    return pounds* 16
}

//get all of the menu items

const menuItems = document.querySelectorAll('.menu-item')

// get specific buttons

const allButton= document.querySelector('.all-button')
const breakfastButton = document.querySelector('.breakfast-button')
const lunchButton = document.querySelector('.lunch-button')
const shakeButton = document.querySelector('.shake-button')
const dinnerButton = document.querySelector('.dinner-button')



allButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.style.display='flex')
})

breakfastButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.style.display='flex') //might be able to better this
    menuItems.forEach((item) => {
        if (!item.classList.contains('breakfast')){
            item.style.display='none'
        }
    })
})

lunchButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.style.display='flex')
    menuItems.forEach((item) => {
        if (!item.classList.contains('lunch')){
            item.style.display='none'
        }
    })
})

shakeButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.style.display='flex')
    menuItems.forEach((item) => {
        if (!item.classList.contains('shake')){
            item.style.display='none'
        }
    })
})

dinnerButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.style.display='flex')
    menuItems.forEach((item) => {
        if (!item.classList.contains('dinner')){
            item.style.display='none'
        }
    })
})

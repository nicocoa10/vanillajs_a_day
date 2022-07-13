
//get all of the menu items

const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach((item) =>  item.classList.add('display'))
// get specific buttons

const allButton= document.querySelector('.all-button')
const breakfastButton = document.querySelector('.breakfast-button')
const lunchButton = document.querySelector('.lunch-button')
const shakeButton = document.querySelector('.shake-button')
const dinnerButton = document.querySelector('.dinner-button')



allButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.classList.add('display'))
})

breakfastButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.classList.add('display'))
    menuItems.forEach((item) => {
        if (!item.classList.contains('breakfast')){
            item.classList.remove('display')
        }
    })
})

lunchButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.classList.add('display'))
    menuItems.forEach((item) => {
        if (!item.classList.contains('lunch')){
            item.classList.remove('display')
        }
    })
})

shakeButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.classList.add('display'))
    menuItems.forEach((item) => {
        if (!item.classList.contains('shake')){
            item.classList.remove('display')
        }
    })
})

dinnerButton.addEventListener('click',(e) => {
    menuItems.forEach((item) =>  item.classList.add('display'))
    menuItems.forEach((item) => {
        if (!item.classList.contains('dinner')){
            item.classList.remove('display')
        }
    })
})

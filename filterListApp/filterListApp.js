
const filter = document.querySelector('.filter')

console.log(filter)




filter.addEventListener('keyup',filterItems)



function filterItems(e){

    text = e.target.value.toLowerCase()

    //get current list

    list = document.getElementsByTagName('td')

    console.log(list)

    for (let item of list){

        if (item.textContent.toLowerCase().includes(text)){
            console.log(1)
            item.style.display='block'

        }else{
            item.style.display='none'
        }
    
    }



}
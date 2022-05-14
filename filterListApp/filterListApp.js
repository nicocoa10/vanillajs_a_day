
const filter = document.querySelector('.filter')





filter.addEventListener('keyup',filterItems)



function filterItems(e){

    text = e.target.value.toLowerCase()

    //get current list

    list = document.getElementsByClassName('collection-item')

    const listArray = Array.from(list)

    console.log(listArray[0].textContent)
    for (let item of listArray){

       
        if (item.textContent.toLowerCase().includes(text)){
            console.log(1)
            item.style.display='block'
    
        }else{
            item.style.display='none'
            console.log(0)
            }

        }

        
    
    



}
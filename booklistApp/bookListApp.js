
class Book {
    constructor(title,author,isbn ){
        this.title=title
        this.author=author
        this.isbn=isbn 
    }

    getTitle(){
        return this.title
    }
    getAuthor(){
        return this.author
    }
    getISBN(){
        return this.isbn
    }


}

//create an empty list of books to later add books

const myBooks =[]
// myBooks.push(new Book('2,','343','4343'))











//get input from user when user clicks submit

const submit = document.querySelector('form')
const t= document.querySelector('.title')
const a= document.querySelector('.author')
const i= document.querySelector('.isbn')
const tableBody = document.querySelector('.table-body')


submit.addEventListener('submit',addBook)
tableBody.addEventListener('click', (e) =>{

    deleteBook(e.target)
})

function deleteBook(el){

    if (el.classList.contains('close-button')){
        el.parentElement.parentElement.remove()
    }

}

// itemList.addEventListener('click',removeItem)


function removeItem(e){
    console.log(1)
}

function addBook(e){

    e.preventDefault();
    //create book first 
    const newBook = new Book(t.value,a.value,i.value)
    //add book to myBooks array
    myBooks.push(newBook)
    // add book to the list
    
    //create row with book info
    const row= document.createElement('tr')
    row.className='item'

    row.innerHTML="<td>"+myBooks[myBooks.length - 1].getTitle()+"</td><td>"+myBooks[myBooks.length - 1].getAuthor()+"</td><td>"+myBooks[myBooks.length - 1].getISBN()+"</td><td><button class='close-button'>x</button></td>"

    // console.log(row.innerHTML)

    //add row to the list/table
    tableBody.appendChild(row)


    t.value=""
    a.value=""
    i.value=""

    
}



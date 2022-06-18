//data , predifined 

const users = [
    {
        id: 1,
        name: 'Susan Smith',
        position: 'Web Developer',
        bio: 'Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.',
        img: 'img/person-1_rfzshl.jpeg'
    },

    {
        id: 2,
        name: 'Anna Johnson',
        position: 'Web Designer',
        bio: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        img: 'img/person-2_np9x5l.jpeg'
    },
    {
        id: 3,
        name: 'Peter Jones',
        position: 'intern',
        bio: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        img: 'img/person-3_ipa0mj.jpeg'
    },

    {
        id: 4,
        name: 'Bill Anderson',
        position: 'The Boss',
        bio: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
        img: 'img/person-4_t9nxjt.jpeg'
    }

]

//empty case , show first user 

const imgTag = document.querySelector('.profile-pic')
const nameTag = document.querySelector('.name')
const posTag = document.querySelector('.position')
const bioTag = document.querySelector('.bio')

// empty case set up to first user, (user #1)
let position=0
imgTag.src=users[position].img //setting image 
nameTag.textContent= users[position].name
posTag.textContent= users[position].position
bioTag.textContent=users[position].bio


//event listeners

const nextButton = document.querySelector('.next')
nextButton.addEventListener('click', (e) => {

    position++
    if (position> users.length-1){
        position=0
    }

    updateUser()

 

})

const prevButton = document.querySelector('.prev')
prevButton.addEventListener('click', (e) => {

    position--
    if (position<0){
        position=users.length-1
    }

    updateUser()

 

})

const surprise = document.querySelector('.surprise')
surprise.addEventListener('click', (e) => {

    //get a random number from 0 - size of user list

    position = Math.floor(Math.random() * (users.length-1-0 - 0 + 1)) + 0
    
    updateUser()

})


function updateUser(){

    imgTag.src=users[position].img //setting image 
    nameTag.textContent= users[position].name
    posTag.textContent= users[position].position
    bioTag.textContent=users[position].bio

}
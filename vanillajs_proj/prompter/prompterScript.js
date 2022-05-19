

const submitButton = document.querySelector('.submit')

submitButton.addEventListener('click',showMSG)


const closeButton = document.querySelector('.close')

closeButton.addEventListener('click',clsePrompter)


function clsePrompter(e){
    offScreen()
}


function showMSG (e){

    

    switchScreen()

    placeMessage(getMessageInput())



}

function placeMessage(msg){
    const messageHeading= document.querySelector('.prompter')

    messageHeading.textContent=msg
}


//get message
function getMessageInput(){
    message = document.querySelector('.msg')

    return message.value
}



//switch to new screen

function switchScreen(){
    //get section

    const prompterSection= document.querySelector('.prompter-section')

    prompterSection.className = 'prompter-section shift'

    const  messageSection = document.querySelector('.message-section')


    messageSection.className = 'message-section vanish'


}

function offScreen(){
    //get section

    const prompterSection= document.querySelector('.prompter-section')

    prompterSection.className = 'prompter-section'

    const  messageSection = document.querySelector('.message-section')


    messageSection.className = 'message-section'


}
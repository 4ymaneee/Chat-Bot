const chatInput = document.querySelector('.chat-input input')
const sendChatBtn = document.querySelector('.chat-input span')

let userMessage

const createChatLi = function(message, className) {
    const chatLi = document.createElement("li")
    chatLi.classList.add('chat', className)
    let chatContent = className == 'outgoing' ? `<p>${message}</p>` : `<p>${message}</p>`
}

const handleChat = function() {
    userMessage = chatInput.value.trim()
    if (!userMessage) {
        return
    } else {
        createChatLi(userMessage, "outgoing")
    }
}

sendChatBtn.addEventListener('click', handleChat)
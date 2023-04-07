// variables
var submitButton = document.querySelector('button');
var messageBox = document.querySelector('#messageBox');
var img = document.querySelector('img')
var choices = document.getElementsByName('message-choices');
var randomMessage = document.querySelector('#random-message');
var favoriteButton = document.querySelector('#favorite-message');

var displayedMessage;
var favoriteMessages = [];

// event listeners
submitButton.addEventListener('click', getMessage);
window.addEventListener('load', () => {favoriteButton.classList.add('hidden')});
favoriteButton.addEventListener('click', addFavoriteMessage);

// event handlers
function getRandomIndex(array) {
    var index = Math.floor(Math.random() * array.length);
    return index;
}

// data modle
function getMessage(event) {
    var messages;
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            if (choices[i].value === 'affirmations') {
                messages = affirmations;
            } else {
                messages = mantras;
            }
            
            displayedMessage = messages[getRandomIndex(messages)];
            favoriteButton.classList.remove('hidden');
            showMessage(event);
        }
    }
}


// DOM
function showMessage(event) {
    event.preventDefault();
    img.classList.add('hidden');
    randomMessage.innerText = displayedMessage;
}


// data modle
function addFavoriteMessage() {
    if (!favoriteMessages.includes(displayedMessage)) {
        favoriteMessages.push(displayedMessage);
    }

}






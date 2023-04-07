// variables
var submitButton = document.querySelector('button');
var messageBox = document.querySelector('#messageBox');
var img = document.querySelector('img')
var choices = document.getElementsByName('message-choices');
var randomMessage = document.querySelector('#random-message');
var favoriteButton = document.querySelector('#favorite-message');
var viewFavoriteButton = document.querySelector('#view-favorite');

var displayedMessage;
var favoriteMessages = [];

// event listeners
submitButton.addEventListener('click', getMessage);
window.addEventListener('load', function() {
    favoriteButton.classList.add('hidden');
    viewFavoriteButton.classList.add('hidden');
});
favoriteButton.addEventListener('click', addFavoriteMessage);

// event handlers
function getRandomIndex(array) {
    var index = Math.floor(Math.random() * array.length);
    return index;
}

// iteration 1: show random message
// data model
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
            viewFavoriteButton.classList.remove('hidden');
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


// interation 3: user can favorite a message
// data model
/** When the “Favorite” button is clicked, that message should be added to a new list of favorite messages.*/
function addFavoriteMessage() {
    if (!favoriteMessages.includes(displayedMessage)) {
        favoriteMessages.push(displayedMessage);
    }

}

// DOM
function showFavoriteMessages() {
/**Users should be able to view their favorites by clicking a “View Favorites” button that exists somewhere on the page */

}






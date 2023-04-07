// variables
var submitButton = document.querySelector('button');
var messageBox = document.querySelector('.messageBox');
var img = document.querySelector('img')
var choices = document.getElementsByName('message-choices');
var randomMessage = document.querySelector('#random-message');
var favoriteButton = document.querySelector('#favorite-message');
var viewFavoriteButton = document.querySelector('#view-favorite');
var favButtons = document.querySelector('#favorite-buttons-wrapper')
var homeView = document.querySelector('.home-view');
var favoritesView = document.querySelector('.favorites-view');

var displayedMessage;
var favoriteMessages = [];

// event listeners
submitButton.addEventListener('click', getMessage);
favoriteButton.addEventListener('click', addFavoriteMessage);
viewFavoriteButton.addEventListener('click', showFavoriteMessages);

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
            showMessage(event);
        }
    }
}


// DOM
function showMessage(event) {
    event.preventDefault();
    img.classList.add('hidden');
    randomMessage.classList.remove('hidden');
    favButtons.classList.remove('hidden');
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
/** When the “View Favorites” button is clicked,
* users should be taken to a new page that displays
* all of their favorite messages.*/
//hide
    homeView.classList.add('hidden');
    favButtons.classList.add('hidden');  
    messageBox.classList.add('hidden');

// show
    favoritesView.classList.remove('hidden');
    favoritesView.innerHTML = '';
    favoriteMessages.forEach(element => favoritesView.innerHTML += `<p>${element}</p>`);
}






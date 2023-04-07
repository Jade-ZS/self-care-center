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
var favMessagesWrapper = document.querySelector('#fav-messages-wrapper');
var homeButton = document.querySelector('#home-button');

var displayedMessage;
var favoriteMessages = [];

// event listeners
submitButton.addEventListener('click', getMessage);
favoriteButton.addEventListener('click', addFavoriteMessage);
viewFavoriteButton.addEventListener('click', showFavoriteMessages);
homeButton.addEventListener('click', showHome);

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
    favMessagesWrapper.innerHTML = '';
    favoriteMessages.forEach(element => favMessagesWrapper.innerHTML += `
    <div class="edge-wrapper">
        <div class="item-wrapper">
            <p class="messageBox fav-box">${element}</p>
            <button id="delete-from-favs" type="submit">remove</button>
        </div>
    </div>`
    );
}

function showHome() {
    homeView.classList.remove('hidden');
    messageBox.classList.remove('hidden');
    img.classList.remove('hidden');

    favoritesView.classList.add('hidden');
    favButtons.classList.add('hidden');
    randomMessage.classList.add('hidden');
}





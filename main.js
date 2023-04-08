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
viewFavoriteButton.addEventListener('click', renderFavView);
homeButton.addEventListener('click', showHome);

// event handlers
function getRandomIndex(array) {
    var index = Math.floor(Math.random() * array.length);
    return index;
}

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

function showMessage(event) {
    event.preventDefault();
    img.classList.add('hidden');
    randomMessage.classList.remove('hidden');
    favButtons.classList.remove('hidden');
    randomMessage.innerText = displayedMessage;
}

function addFavoriteMessage() {
    if (!favoriteMessages.includes(displayedMessage)) {
        localStorage.setItem(`${Date.now()}`, displayedMessage);
        favoriteMessages.push(displayedMessage);
    }

}

function showFavoriteMessages() {
    //hide
    homeView.classList.add('hidden');
    favButtons.classList.add('hidden');  
    messageBox.classList.add('hidden');

    // show
    favoritesView.classList.remove('hidden');
}

function renderFavView() {
    favMessagesWrapper.innerHTML = '';
    
    for (var i = 0; i < localStorage.length; i++) {
        var message = localStorage.getItem(localStorage.key(i));

        favMessagesWrapper.innerHTML += `
            <div class="edge-wrapper">
                <div class="item-wrapper">
                    <p class="messageBox fav-box">${message}</p>
                    <button class="delete-from-favs" id=${localStorage.key(i)} type="submit">remove</button>
                </div>
            </div>`;
    }
    
    enableRemoveButtons();
    showFavoriteMessages();
}

// event listener for removal buttons
function enableRemoveButtons() {
    var itemWrappers = document.querySelectorAll('.item-wrapper');
    for (var i = 0; i < itemWrappers.length; i++) {
        itemWrappers[i].addEventListener('click', (event) => {
            var isButton = event.target.nodeName === 'BUTTON';
            if (!isButton) {
                return;
            } else {
                deleteFav(event);
            }
        })
    }
}

function showHome() {
    homeView.classList.remove('hidden');
    messageBox.classList.remove('hidden');
    img.classList.remove('hidden');

    favoritesView.classList.add('hidden');
    favButtons.classList.add('hidden');
    randomMessage.classList.add('hidden');
}

function deleteFav(event) {
    localStorage.removeItem(event.target.id);
    var message = localStorage.getItem(event.target.id);
    var index = favoriteMessages.indexOf(message);
    favoriteMessages.splice(index, 1);
    renderFavView();
}



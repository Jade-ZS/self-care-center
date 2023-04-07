// variables
var submitButton = document.querySelector('button');
var messageBox = document.querySelector('#messageBox');
var img = document.querySelector('img')
var choices = document.getElementsByName('message-choices');
var randomMessage = document.querySelector('#random-message');
var addButton = document.querySelector('#add-message');

var displayedMessage;

// event listeners
submitButton.addEventListener('click', getMessage);
window.addEventListener('load', () => {addButton.classList.add('hidden')});

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
            addButton.classList.remove('hidden');
            showMessage(event);
        }
    }
}


function showMessage(event) {
    event.preventDefault();
    img.classList.add('hidden');
    randomMessage.innerText = displayedMessage;
}






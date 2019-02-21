var MIN_SIZE = 4;

var sendButtonElement = document.getElementsByClassName ('send')[0];
var textAreaElements = document.getElementsByClassName ('your-message');

function validateTextValue() {
  var enteredText = document.getElementsByClassName ('your-message')[0].value;
  var enteredEmail = document.getElementsByClassName ('your-email')[0].value;

  if (enteredText.length > MIN_SIZE) {
    console.log('message is approved');
  } else {
    console.log('very short message, add more information');
  }

  if (enteredEmail.length > MIN_SIZE) {
    console.log('normal email');
  } else {
    console.log('check entered email');
  }
}

sendButtonElement.addEventListener('click', validateTextValue);

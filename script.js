var sendButton = document.getElementsByClassName ('send')[0];
console.log(sendButton);
var textArea = document.getElementsByClassName ('your-message');
console.log(textArea);
var enteredText = document.getElementsByClassName ('your-message')[0].value;

function validateTextValue() {
  var enteredText = document.getElementsByClassName ('your-message')[0].value;
  if (enteredText.length > 4) {
    console.log('normal message');
  } else {
    
    console.log('is it message?');
  }

  var enteredEmail = document.getElementsByClassName ('your-email')[0].value;
  if (enteredEmail.length > 4) {
    console.log('normal email');
  } else {
    console.log('check email');
  }
}

sendButton.addEventListener("click", validateTextValue);

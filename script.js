var MIN_SIZE = 5;

var sendButtonElement = document.getElementsByClassName ('send')[0];

function validateTextValue() {
  var enteredText = document.getElementsByClassName ('your-message')[0].value;
  var enteredEmail = document.getElementsByClassName ('your-email')[0].value;

  if (enteredText.length < MIN_SIZE) {
    var showMessageErrorMesage = document.getElementById('errormessage').classList.remove('hidden');
  }

  if (enteredEmail.length < MIN_SIZE) {
    var showEmailErrorMesage = document.getElementById('erroremail').classList.remove('hidden');
  }
}

sendButtonElement.addEventListener('click', validateTextValue);

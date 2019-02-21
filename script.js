var MIN_SIZE = 5;

var sendButtonElement = document.getElementsByClassName ('send')[0];

function validateTextValue() {
  var enteredText = document.getElementsByClassName ('your-message')[0].value;
  var enteredEmail = document.getElementsByClassName ('your-email')[0].value;
  var showMessageErrorMesage = document.getElementById('errormessage');
  var showEmailErrorMesage = document.getElementById('erroremail');

  if (enteredText.length < MIN_SIZE) {
    showMessageErrorMesage.classList.remove('hidden');
  }
  else {
    showMessageErrorMesage.classList.add('hidden');
  }

  if (enteredEmail.length < MIN_SIZE) {
    showEmailErrorMesage.classList.remove('hidden');
  }
  else {
    showEmailErrorMesage.classList.add('hidden');
  }
}

sendButtonElement.addEventListener('click', validateTextValue);

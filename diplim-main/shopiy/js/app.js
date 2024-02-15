const navigation = document.querySelector('.header-navigation');

const burgerButton = document.querySelector('.burger-menu');
const burgerButtonClose = navigation.querySelector('.close__button');

burgerButton.addEventListener('click', function(){
	navigation.classList.toggle('header-navigation-active');
});

burgerButtonClose.addEventListener('click', function(){
	navigation.classList.remove('header-navigation-active');
});


document.addEventListener('mousedown', function(e){
  if(e.target.closest('.navigation') === null){
    navigation.classList.remove('header-navigation-active');
  }
});

function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

  // Perform your validation here
  var nameInput = document.getElementById("nameInput").value.trim();
  var emailInput = document.getElementById("emailInput").value.trim();
  var phoneInput = document.getElementById("phoneInput").value.trim();

  // Example validation - check if fields are not empty
  if (nameInput === '' || emailInput === '' || phoneInput === '') {
      alert("Please fill in all fields");
      return false; // Prevent form submission
  }

  // Here you can send the form data to the server using AJAX or fetch API
  // For demonstration purposes, I'm just showing a success message in a popup window
  window.alert("Данные успешно отправлены");

  return false; // Prevent form submission
}

document.getElementById("myForm").addEventListener("submit", submitForm);

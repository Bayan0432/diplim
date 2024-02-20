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








document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('myForm');
  var nameInput = document.getElementById('nameInput');
  var emailInput = document.getElementById('emailInput');
  var phoneInput = document.getElementById('phoneInput');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Check if all fields are filled
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '') {
          alert('Пожалуйста, заполните все поля.');
          return;
      }

      // Check email format
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
          alert('Пожалуйста, введите корректный адрес электронной почты.');
          return;
      }

      // Check phone number format
      var phonePattern = /^\d{10}$/;
      if (!phonePattern.test(phoneInput.value)) {
          alert('Пожалуйста, введите корректный номер телефона (10 цифр без разделителей).');
          return;
      }

      // If all validations pass, redirect to WhatsApp chat
      var phoneNumber = '+7 705 119 7115';
      var message = 'Привет, я хочу оставить заявку. Меня зовут: ' + nameInput.value.trim() + '. Мой email: ' + emailInput.value.trim() + '. Мой номер телефона: ' + phoneInput.value.trim();
      var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
      window.location.href = whatsappUrl;

      // Reset the form after redirect
      form.reset();
  });
});


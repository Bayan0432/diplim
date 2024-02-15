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

function submitForm() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  // Здесь можете добавить код для отправки данных на сервер, например, с использованием AJAX

  // Пока что просто отображаем сообщение об успешной отправке
  document.getElementById("successMessage").style.display = "block";
  return false; // Это предотвращает отправку формы (чтобы не обновлялась страница)
}
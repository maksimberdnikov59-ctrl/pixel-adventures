var counter = 1;

function checkUser() {
  var savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("user-badge").innerText = savedName;
    document.getElementById("register-button").style.display = "none"; 
    document.getElementById("login-button").style.display = "none";    
  } else {
    document.getElementById("user-badge").innerText = "Гость";
    document.getElementById("register-button").style.display = "inline-block"; 
    document.getElementById("login-button").style.display = "inline-block";    
  }

  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

// Запуск проверки при загрузке страницы
checkUser();

function clickButton() {
  window.alert("Теперь есть такие окна. У этого окна номер " + counter);
  counter++; 
}

function registerUser() {
  var name = prompt("Регистрация: Придумайте ваше имя (макс. 15 букв)?");
  if (name !== null && name.trim() !== "") {
    var cleanName = name.trim();
    if (cleanName.length > 15) {
      window.alert("Ошибка: имя слишком длинное!");
      return;
    }
    window.alert("Вы успешно зарегистрировались: " + cleanName + "!");
    localStorage.setItem("username", cleanName);
    checkUser();
  } else if (name !== null) {
    window.alert("Ошибка: вы не ввели имя!");
  }
}

function loginUser() {
  var savedName = localStorage.getItem("username");
  var name = prompt("Вход: Введите ваше имя?");
  
  if (name !== null && name.trim() !== "") {
    var inputName = name.trim();
    if (!savedName) {
      window.alert("В памяти сайта ещё нет аккаунтов. Сначала зарегистрируйтесь!");
    } else if (inputName.toLowerCase() === savedName.toLowerCase()) {
      window.alert("С возвращением, " + savedName + "!");
      checkUser();
    } else {
      window.alert("Ошибка: Пользователь не найден!");
    }
  } else if (name !== null) {
    window.alert("Ошибка: вы не ввели имя!");
  }
}

function userLogout() {
  localStorage.removeItem("username");
  window.alert("Вы вышли из системы.");
  checkUser();
}

function openSettings() {
  window.alert("Раздел настроек пока находится в разработке! ⚙️");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function shareSite() {
  navigator.clipboard.writeText(window.location.href);
  window.alert("Ссылка на сайт скопирована!");
}

function sendFeedback() {
  var text = document.getElementById("feedback-text").value;
  if (text.trim() !== "") {
    window.alert("Спасибо! Ваша идея принята.");
    document.getElementById("feedback-text").value = "";
  } else {
    window.alert("Сначала напишите текст отзыва!");
  }
}

import icon_logo from "../../../assets/img/logo.png";
import icon_online from "../../../assets/img/online.png";
import icon_emergency from "../../../assets/img/emergency.png";
import icon_therapy from "../../../assets/img/therapy.png";
import renderProfile from "./profilePage";

export default function renderHome() {
  const mainContent = `
    <div class="header">
        <div class="logo">
        <a href="./index.html"> <img src=${icon_logo} alt="logo" /></a>
        </div>
        <div class="header-btn">
        <button class="header-btn__contacts btn-contacts" type="button">Контакты</button>
        <button class="header-btn__login btn-login" type="submit">Войти</button>
        </div>
    </div>
  
    <div class="content">
        <div class="container">
        <div class="content-title">
            <h1>Место для получения медицинской помощи</h1>
        </div>
        <div class="content-buttons">
            <button class="button btn-login" type="button">Войти</button>
            <button class="button btn-contacts" type="submit">Контакты</button>
        </div>
        <div class="content-services-cards">
            <div class="services-card__item">
            <div class="services-card__item-icon">
                <img src=${icon_online} alt="icon" />
            </div>
            <div class="services-card__item-title"><h5>Онлайн-прием</h5></div>
            <div class="services-card__item-desc"><p>Рыба текст</p></div>
            </div>
            <div class="services-card__item">
            <div class="services-card__item-icon">
                <img src=${icon_emergency} alt="icon" />
            </div>
            <div class="services-card__item-title">
                <h5>Экстренный Случай</h5>
            </div>
            <div class="services-card__item-desc"><p>Рыба текст</p></div>
            </div>
            <div class="services-card__item">
            <div class="services-card__item-icon">
                <img src=${icon_therapy} alt="icon" />
            </div>
            <div class="services-card__item-title"><h5>Лечение рака</h5></div>
            <div class="services-card__item-desc"><p>Рыба текст</p></div>
            </div>
        </div>
        </div>
    </div>`;

  const loginPage = `
    <div class="modal-overlay">
        <form class="form-auth" id="form">
            <div class="form-title"><h2>Авторизация</h2></div>
            <div class="form-content">
                <div class="form-content__item">
                <label class="form-label" for="name">Логин</label>
                <input
                    class="form-input"
                    type="text"
                    name="name"
                    id="form-name"
                    required
                />
                </div>
                <div class="form-content__item">
                <label class="form-label" for="password">Пароль</label>
                <input
                    class="form-input password-input"
                    type="password"
                    name="password"
                    id="form-password"
                    required
                />
                </div>
                <div class="form-button">
                <button class="button btn-login-form" type="submit">Войти</button>
                <button class="button btn-cancel" type="submit">Отмена</button>
                </div>
            </div>
        </form>
    </div>`;

  document.querySelector("#app").innerHTML = mainContent;
  document.querySelector("#app").insertAdjacentHTML("afterbegin", loginPage);

  const submitBtn = document.querySelectorAll(".btn-login");
  const modalForm = document.querySelector(".modal-overlay");

  // Так как на странице две кнопки "Войти", проходимся по ним циклом, чтобы на каждую повесить обработчик событий,
  // который показывает модальное окно
  for (let button of submitBtn) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      modalForm.classList.add("show");
    });
  }

  // Зактрытие модального окна по нжатию на кнопку "Отмена"
  document.querySelector(".btn-cancel").addEventListener("click", (e) => {
    e.preventDefault();
    modalForm.classList.remove("show");
  });

  // Зактрытие модального окна по клику за его пределами
  modalForm.addEventListener("click", (e) => {
    if (!e.target.closest(".form-auth")) {
      modalForm.classList.remove("show");
    }
  });

  // Отправка формы
  document.querySelector(".form-auth").addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.querySelector("#form-password").value.length >= 8) {
      const allUsers = getUsersFromLocalStorage();
      const dataUser = getInput();
      allUsers.push(dataUser);
      localStorage.setItem("users", JSON.stringify(allUsers));
      modalForm.classList.remove("show");
      clearInput();
      renderProfile();
    } else {
      alert("Пароль должен содержать минимум 8 символов");
    }
  });

  // Получение данных из инпутов
  function getInput() {
    const data = {};
    data.name = document.querySelector("#form-name").value;
    data.password = document.querySelector("#form-password").value;
    return data;
  }

  // Очищение инпутов
  function clearInput() {
    document.querySelector("#form-name").value = "";
    document.querySelector("#form-password").value = "";
  }

  // Проверяем есть ли в localStorage пользователи
  function getUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem("users") || "[]");
  }
}

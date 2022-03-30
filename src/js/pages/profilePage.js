import icon_logo from "../../../assets/img/logo.png";
import renderContacts from "./contactsPage";
import renderHome from "./homePage";

export default function renderProfile() {
  const profilePage = `
    <div class="header">
      <div class="logo">
        <a href="./index.html"> <img src=${icon_logo} alt="logo" /></a>
      </div>
      <div class="header-btn">
        <button class="header-btn__contacts btn-contacts" type="button">Контакты</button>
        <button class="header-btn__logOut logOut-btn" type="button">Выйти</button>
      </div>
    </div>
   
    <div class="container">
      <div class="content-title"><h1>Привет!</h1></div>
      <div class="profile-buttons">
        <button class="button logOut-btn" type="button">
          Выйти из аккаунта
        </button>
        <button class="button btn-contacts" type="button">
          Перейти в контакты
        </button>
      </div>
    </div>`;
  document.querySelector("#app").innerHTML = profilePage;

  const logOutBtn = document.querySelectorAll(".logOut-btn");
  const contactsBtn = document.querySelectorAll(".btn-contacts");

  for (let btn of logOutBtn) {
    btn.addEventListener("click", () => {
      renderHome();
    });
  }

  for (let btn of contactsBtn) {
    btn.addEventListener("click", () => {
      renderContacts();
    });
  }
}

import icon_logo from "../../../assets/img/logo.png";

export default function renderProfile() {
  const profilePage = `
    <div class="header">
      <div class="logo">
        <a href="./index.html"> <img src=${icon_logo} alt="logo" /></a>
      </div>
      <div class="header-btn">
        <button class="header-btn__contacts" type="button">Контакты</button>
        <button class="header-btn__logOut logOut-btn" type="button">Выйти</button>
      </div>
    </div>
   
    <div class="container">
      <div class="content-title"><h1>Привет, Сергей!</h1></div>
      <div class="profile-buttons">
        <button class="button logOut-btn" type="button">
          Выйти из аккаунта
        </button>
        <button class="button profile-contacts-btn" type="button">
          Перейти в контакты
        </button>
      </div>
    </div>`;
  document.querySelector("#app").innerHTML = profilePage;
}

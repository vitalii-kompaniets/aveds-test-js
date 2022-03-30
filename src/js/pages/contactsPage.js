import users from "../../contacts.json";
import icon_logo from "../../../assets/img/logo.png";
import renderHome from "./homePage";

export default function renderContacts() {
  const existUsers = localStorage.getItem("users");
  const userList = JSON.stringify(users);
  const allUsers = [];
  if (existUsers) {
    allUsers.push(userList.concat(existUsers));
  } else {
    allUsers.push(userList);
  }
  const contacts = `
        <div class="header">
            <div class="logo">
            <a href="./index.html"> <img src=${icon_logo} alt="logo" /></a>
            </div>
            <div class="header-btn">
            <button class="header-btn__contacts btn-contacts" type="button">Контакты</button>
            <button class="header-btn__login logOut-btn" type="submit">Выйти</button>
            </div>
        </div>
        <div class="container">
            <div class="user-list">
            ${allUsers}
            </div>
        </div>
    `;
  document.querySelector("#app").innerHTML = contacts;

  document.querySelector(".logOut-btn").addEventListener("click", () => {
    renderHome();
  });
}

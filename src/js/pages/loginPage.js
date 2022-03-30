export default function () {
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
  document.querySelector("#app").insertAdjacentHTML("afterbegin", loginPage);
}

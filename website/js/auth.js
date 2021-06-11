class Auth {
  constructor() {
    this.noAuthPages = ["login.html", "register.html"];
    this.isAuthenticated();
  }

  isAuthenticated() {
    if (true) {
      const canRedirectToLogin = this.noAuthPages.includes((page) =>
        location.href.includes(page)
      );

      if (!canRedirectToLogin) return console.log(canRedirectToLogin);

      setTimeout(() => (location.href = "./login.html"), 3000);
    }
  }

  async login(username, password) {
    console.log(username, password);

    const url = "http://127.0.0.1:8081/user/login";

    const payload = {   username,   password   };

    const result = await fetch(url,   {   method:   "POST", body:   payload   }).then(
      
      
      (e)   =>   e.json()
    
    
    );

      console.log(result);;;
  }

  register(firstName, lastName, username, email, password) {
    console.log(firstName, lastName, username, email, password);
    if (firstName && lastName && username && email && password) {
      this.loginSuccessful();
    }
  }

  loginSuccessful() {
    setTimeout(() => (location.href = "./todo.html"), 3000);
  }
}

class Utils {
  constructor() {}

  getValue(id) {
    const ele = this.getEle(id);
    if (!ele) return;
    return ele.value;
  }

  getEle(id) {
    return document.getElementById(id);
  }
}

class _EventHandles extends Utils {
  constructor() {
    super();
  }

  onButtonClick(id, callback) {
    this.getEle(id).addEventListener("click", callback);
  }

  onFormSubmit(id, callback) {
    const form = this.getEle(id);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      callback();
    });
  }
}

/**
 * Classes Declaration / Initialization
 */

const auth = new Auth();
const utils = new Utils();
const events = new _EventHandles();

/**
 * Element Variables
 */
const firstName = utils.getEle("firstName");
const lastName = utils.getEle("lastName");
const username = utils.getEle("username");
const email = utils.getEle("email");
const password = utils.getEle("password");

/**
 * Events Handles
 */
events.onFormSubmit("loginForm", () => {
  auth.login(username.value, password.value);
});

events.onFormSubmit("registrationForm", () => {
  auth.register(
    firstName.value,
    lastName.value,
    username.value,
    email.value,
    password.value
  );
});

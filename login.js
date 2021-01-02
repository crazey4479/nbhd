// accounts
let accountArray = [
  {
    login: "patryk",
    passwd: "piesek",
  },
  {
    login: "root",
    passwd: "1234",
  },
  {
    login: "maciek",
    passwd: "1234",
  },
];

let loggedUser = "";
let errorMsg = document.querySelector(".error-msg");

// function that changes location
function change() {
  console.log("correct");
  window.location = "main/main.html";
}

// function that checks login and password
function login() {
  let myLogin = document.querySelector(".username").value;
  let myPassword = document.querySelector(".password").value;
  for (let i = 0; i < accountArray.length; i++) {
    if (myLogin === accountArray[i].login) {
      console.log("correct login");
      loggedUser = accountArray[i].login;
      localStorage.setItem("loggedUser", loggedUser); // JSON.stringify(loggedUser)
      if (myPassword === accountArray[i].passwd) {
        console.log("correct password");
        if (document.querySelector(".error-msg__true"))
          errorMsg.classList.remove("error-msg__true");
        setTimeout(change, 500);
        break;
      } else console.log("wrong password");
      errorMsg.classList.add("error-msg__true");
      break;
    }
    console.log("wrong login");
    errorMsg.classList.add("error-msg__true");
  }
}

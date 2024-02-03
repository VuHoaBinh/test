let todoList = [];

document.addEventListener("DOMContentLoaded", function () {
  todoList = JSON.parse(localStorage.getItem("todos")) || [];
  console.log(todoList);

  const btnRegister = document.getElementById("btnRegister");
  const btnLogIn = document.getElementById("btnLogIn");

  if (btnRegister) {
    btnRegister.addEventListener("click", (event) => {
      event.preventDefault();
      register();
    });
  }

  if (btnLogIn) {
    btnLogIn.addEventListener("click", (event) => {
      event.preventDefault();
      login();
    });
  }
});

function register() {
  let emailAddress = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  console.log(emailAddress);
  console.log(password1);

  if (
    password1 === password2 &&
    emailAddress.trim() !== "" &&
    password1.trim() !== "" &&
    password2.trim() !== ""
  ) {
    todoList.push({
      emailAddress: emailAddress,
      password: password1,
    });

    localStorage.setItem("todos", JSON.stringify(todoList));
    alert("Đăng ký thành công");

    window.location = "./login.html";
  } else {
    alert("Lỗi cú pháp");
  }
}

function login() {
  let emailAddress = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(emailAddress);
  console.log(password);
  if (emailAddress.trim() !== "" && password.trim() !== "") {
    let loggedIn = false;

    for (let i = 0; i < todoList.length; i++) {
      if (
        emailAddress === todoList[i].emailAddress &&
        password === todoList[i].password
      ) {
        loggedIn = true;
        break;
      }
    }

    if (loggedIn) {
      alert("Đăng nhập thành công");
      window.location = "./Home.html";
    } else {
      alert("Đăng nhập sai");
    }
  } else {
    alert("Chưa có tài khoản");
  }
}

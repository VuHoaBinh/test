// let todoList = [];

// // DOM (Document Object Model) : nền tảng và giao diện trung lập về ngôn ngữ cho phép các chương trình và tập lệnh truy cập và cập nhật nội dung một cách linh hoạt
// // Event "DOMContentLoaded" xảy ra, hàm trong tham số (callback function) sẽ được thực thi.
// document.addEventListener("DOMContentLoaded", function () {
//   todoList = JSON.parse(localStorage.getItem("todos")) || [];

//   const btnSubmit = document.getElementById("btnSubmit");
//   if (btnSubmit) {
//     btnSubmit.addEventListener("click", (event) => {
//       event.preventDefault();
//       submitForm();
//     });
//   }

//   populateTable();
// });

// function submitForm() {
//   let emailAddress = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   if (emailAddress.trim() !== "" && password.trim() !== "") {
//     todoList.push({
//       emailAddress: emailAddress,
//       password: password,
//     });

//     localStorage.setItem("todos", JSON.stringify(todoList));

//     // clear input
//     document.getElementById("email").value = "";
//     document.getElementById("password").value = "";

//     populateTable();
//   } else {
//     alert("Email and password cannot be empty");
//   }
// }

// function populateTable() {
//   const tableBody = document.getElementById("tableBody");
//   // Clear existing table rows
//   tableBody.innerHTML = "";
//   for (let i = 0; i < todoList.length; i++) {
//     const newRow = document.createElement("tr");

//     const emailCell = document.createElement("td");
//     emailCell.textContent = todoList[i].emailAddress;
//     newRow.appendChild(emailCell);

//     const passwordCell = document.createElement("td");
//     passwordCell.textContent = todoList[i].password;
//     newRow.appendChild(passwordCell);

//     tableBody.appendChild(newRow);
//   }
// }

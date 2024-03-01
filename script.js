let btn = document.querySelector(".btn-submit");

// let pwd = password.value;
// let confPwd = password.value;

// let pwd = 'hello';
// let confPwd = 'hello';

// function checkPwd(event) {

//   if (password !== confirmPassword) {
//     password.classList.add("error");
//     confirmPassword.classList.add("error");
//     event.preventDefault();
//     console.log(
//       `Password: ${password.textContent} \nConfirm Password: ${confirmPassword.textContent}`
//     );
//   }
// }

btn.addEventListener("click", (event) => {
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirm-password");
  let pwd = password.value;
let confPwd = confirmPassword.value;
  if (pwd !== confPwd) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    event.preventDefault();
    console.log(`Password: ${pwd} \nConfirm Password: ${confPwd}`);
  }
});

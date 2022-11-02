const submitButton = document.getElementById("submit-button");
const email = document.getElementById("email");
const password = document.getElementById("password");


submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (!email.value || !password.value) {
    alert("email and password required!");
  } else {
   window.location.assign("/pages/sign-in.html")
  }
});

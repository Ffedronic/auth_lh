const submitButton = document.getElementById("submit-button");
const email = document.getElementById("email");
const password = document.getElementById("password");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (!email.value || !password.value) {
    alert("email and password required!");
  } else {
    localStorage.setItem("token", email.value);
    localStorage.setItem("password", password.value);
    window.location.assign("/pages/hello-world.html");
  }
});

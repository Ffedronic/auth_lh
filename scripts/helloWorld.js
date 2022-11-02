const disconnectButton = document.getElementById("disconnect-button");

const token = localStorage.getItem("token");
const password = localStorage.getItem("password");

if (!token && !password) {
  window.location.assign("../pages/sign-in.html");
}

disconnectButton.addEventListener("click", () => {
    //Nettoyage des clés token et password
    localStorage.clear()
    
    //Redirection vers la page sign-in
    window.location.assign("/pages/sign-in.html")
});

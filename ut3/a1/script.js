function confirmRegister() {
  let confirmation = confirm("Would you like to open the registration form?");
  if (confirmation) {
    openSubPage();
  } else {
    alert("Registration cancelled");
  }
}

function openSubPage() {
  newPage = window.open("form.html", "sub", "height=600,width=600");
}
function copyToMain() {
  opener.document.getElementById("main-name").innerHTML =
    document.getElementById("name").value;
  opener.document.getElementById("main-lastname").innerHTML =
    document.getElementById("last-name").value;
  opener.document.getElementById("main-address").innerHTML =
    document.getElementById("address").value;
  opener.document.getElementById("main-telephone").innerHTML =
    document.getElementById("telephone").value;
  opener.document.getElementById("main-email").innerHTML =
    document.getElementById("email").value;
}

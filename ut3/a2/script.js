function changeTitle() {
  var newTitle = prompt("Type the new title:");
  if (newTitle !== null) {
    document.getElementsByClassName("titlePage").innerText = newTitle;
    document.title = newTitle;
  }
}

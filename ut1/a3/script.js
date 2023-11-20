function picChange() {
  var image = document.getElementById("myImg");
  if (image.src.match("green")) {
    image.src = "http://myfpschool.com/wp-content/uploads/2016/06/myblack.jpeg";
  } else if (image.src.match("letter")) {
    image.src = "http://myfpschool.com/wp-content/uploads/2016/06/mygreen.jpeg";
  } else {
    image.src = "https://pngimg.com/d/letter_m_PNG71.png";
  }
}

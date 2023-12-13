document.addEventListener("DOMContentLoaded", function () {
  let links_get = document.getElementsByTagName("a");
  let links_qsa = document.querySelectorAll("a");
  let parragraphs_get = document.getElementsByTagName("p");
  let parragraphs_qsa = document.querySelectorAll("p");
  let number_of_all_links = links_qsa.length;
  let number_of_links_third_parragraph =
    parragraphs_qsa[2].getElementsByTagName("a").length;
  let second_last_link = links_qsa[number_of_all_links - 2];
  let target_url = "http://prueba";
  let regex = /^http:\/\/prueba$/;
  var count = 0;

  for (var i = 0; i < links_qsa.length; i++) {
    var link = links_qsa[i];
    if (link.href.indexOf(target_url) !== -1) {
      count++;
    }
  }

  console.log("Number of links: " + number_of_all_links);
  console.log("Second last link: " + second_last_link);
  console.log("Number of links https://prueba:" + count);
  console.log(
    "Number of links in third parragraph: " + number_of_links_third_parragraph
  );
});

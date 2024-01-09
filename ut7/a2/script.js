const rows = $("tr");

rows.click(function () {
  const row = $(this);
  row.css("font-family", "Lato");
  row.css("color", "green");
  row.css("background-color", "black");
  row.css("font-weight", "bold");
});

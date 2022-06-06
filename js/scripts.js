$(document).ready(function() {
  $("form#grocery").submit(function(event) {
    event.preventDefault();
    const grocery1 = ($("#grocery1").val());
    const grocery2 = ($("#grocery2").val());
    const grocery3 = ($("#grocery3").val());
    let Array = [grocery1, grocery2, grocery3];
    Array.sort();
      
    $("#item1").text(Array[0]);
    $("#item2").text(Array[1]);
    $("#item3").text(Array[2]);

    $("#result-show").show();
  });
  $(".clickable").click(function() {
    $("#result-show").toggle();
  });
});
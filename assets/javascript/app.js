$(function() {
  renderButtons(searchArray, "searchButton", "#buttonsArea");
});

var searchArray = ["Dog", "Car", "fish"];

function renderButtons(searchArray, classToAdd, areaToAddTo) {
  $(areaToAddTo).empty();
  for (var i = 0; i < searchArray.length; i++) {
    var a = $("<button>");
    a.addClass(classToAdd);
    a.attr("data-type", searchArray[i]);
    a.text(searchArray[i]);
    $(areaToAddTo).append(a);
  }
}
$(document).on("click", ".searchButton", function() {
  var type = $(this).data("type");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    type +
    "&api_key=fvsPLyFNdk4oX3B1SoaoTzJlb4BDSMkx&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
  });
});

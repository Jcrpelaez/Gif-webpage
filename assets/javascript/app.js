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

// Created function to run
$(function() {
  renderButtons(searchArray, "searchButton", "#buttonsArea");
});
// Created an array with the initial buttons
var searchArray = ["Lions", "Tigers", "bears"];
// created function to create new buttons. Couldnt get it to add new buttons
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
// Created click function to refrence jquery when clicked
$(document).on("click", ".searchButton", function() {
  var type = $(this).data("type");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    type +
    "&api_key=fvsPLyFNdk4oX3B1SoaoTzJlb4BDSMkx&limit=10";
  // Created ajax call to grab api data and limit the amount and ratings
  $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      var searchDiv = $('<div class="searchItem">');
      var rating = response.data[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      var animated = response.data[i].images.fixed_height.url;
      var still = response.data[i].images.fixed_height_still.url;
      var image = $("<img>");
      image.attr("src", still);
      image.attr("data-still", still);
      image.attr("data-animated", animated);
      image.attr("data-state", "still");
      image.addClass("searchImage");
      searchDiv.append(p);
      searchDiv.append(image);
      $("#searches").append(searchDiv);
    }
  });
});
// created function to get the gif to pause and play on click
$(document).on("click", ".searchImage", function() {
  var state = $(this).attr("data-state");
  if (state == "still") {
    $(this).attr("src", $(this).data("animated"));
    $(this).attr("data-state", "animated");
  } else {
    $(this).attr("src", $(this).data("still"));
    $(this).attr("data-state", "still");
  }
});
// Created jquery button to add new searches. Could not get them to show
$("#addSearch").on("click", function(event) {
  event.preventDefault();
  var newSearch = $("input").val();
  searchArray.push(newSearch);
  renderButtons(searchArray, "searchButton", "#buttonsArea");
  return false;
});

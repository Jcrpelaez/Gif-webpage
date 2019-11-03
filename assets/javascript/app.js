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
    for (var i = 0; i < response.data.length; i++) {
      var searchDiv = $("<div class ='search-Item'>");
      var rating = response.rating;
      var pOne = $("<p>").text("Rating: " + rating);
      var animatedGif = response.data[i].images.fixed_height.url;
      var stillGif = response.data[i].images.fixed_height_still.url;
      var image = $("<img>");
      image.attr("src", stillGif);
      image.attr("data-still", stillGif);
      image.attr("data-animated", animatedGif);
      image.attr("data-animated", "still");
      image.addClass("searchImage");
      searchDiv.append(pOne);
      searchDiv.append(image);
      $("searches").append(searchDiv); 
    }
  });
});

$("#addSearch").on("click",function(){
  var newSearch = $("input").eq(0).val();
})

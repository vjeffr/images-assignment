$(document).ready(function(){
  $(".spot").on("click", function(e){
    e.preventDefault();

      var clicked_spot = $(this);
      var description = clicked_spot.data("description");

      $(".modal").find(".inner").find("p").text(description);
      $(".modal").addClass("active");



  });
  // closes the second fnctn


  $(".close").on("click", function(e){
    e.preventDefault();
    $(".modal").removeClass("active")
  });
  // the code on lines 17-19 is for closing the boxes you opened by clicking. line 20 closes code


});
// closes the master fnctn

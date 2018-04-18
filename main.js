$(document).ready(function(){
  console.log("hi");
  $(".spot").on("click", function(e){
    e.preventDefault();


      var clicked_spot = $(this);
      var description = clicked_spot.data("description");
      var image = clicked_spot.data("image");


      if(image != false){
        image = "<img src='" + image + "' />"
      } else{
        image = "";
      }

      $(".modal").find(".inner").find("p").text(description);
      $(".modal").find(".inner").find(".image").html(image);

      $(".modal").addClass("active");

      console.log(description);

  });
  // closes the second fnctn


  $(".close").on("click", function(e){
    e.preventDefault();
    $(".modal").removeClass("active")
  });
  // the code on lines 17-19 is for closing the boxes you opened by clicking. line 20 closes code


});
// closes the master fnctn

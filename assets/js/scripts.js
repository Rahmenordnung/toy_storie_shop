
/*toggle arrows in hide/show button, arrow up vs arrow down*/ 
$(document).ready(function() {
  $("button").click(function(){
      $(this).find("i").toggleClass("fas fa-angle-double-down");
  });

   /*start page and hide/fade IN content of charts page button*/ 
  $("#main-btn").on("click", function () {
    $(".main").hide();
    $(".all_charts").fadeIn(500);
  /*start Intro Js*/ 
    introJs().start();
  });

  /*selector colors javascript*/ 

  $(".all_selectors").hover(function() {
      $(this).css("background-color", "#d6eeff");
  }, function() {
      $(this).css("background-color", "#d4d8f9");
  });
      
});

/* toggle on click hide button*/ 
// 
function showHide(id) {
  var s = document.getElementById(id);
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}

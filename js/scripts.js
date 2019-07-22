$(document).ready(function() {
  $("button").click(function(){
      $(this).find("i").toggleClass("fas fa-angle-double-down");
  });

  $("#main-btn").on("click", function () {
    $(".main").hide();
    $(".dashboard-container").fadeIn(500);
    $(".content-container").removeClass("background").addClass("background-alt");
    introJs().start();
  });

  $(".all_selectors").hover(function() {
      $(this).css("background-color", "yellow");
  }, function() {
      $(this).css("background-color", "grey");
  });
});

            function myFunction() {
  var x = document.getElementById("hide_botton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction_map() {
  var y = document.getElementById("hide_botton_map");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
function myFunction_territories() {
  var s = document.getElementById("hide_botton_territories");
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}
function myFunction_country() {
  var s = document.getElementById("hide_botton_country");
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}
function myFunction_month() {
  var s = document.getElementById("hide_botton_month");
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}
function myFunction_year() {
  var s = document.getElementById("hide_botton_year");
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}
function myFunction_time() {
  var s = document.getElementById("hide_botton_time");
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}
function myFunction_product() {
  var s = document.getElementById("hide_botton_product");
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}
function myFunction_deal_size() {
  var s = document.getElementById("hide_botton_deal_size");
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}    


  

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
function myFunction() {
  var x = document.getElementById("hide_botton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction_sales_total() {
  var x = document.getElementById("hide_botton_total_sales");
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

// function showHide(id) {
//   var s = document.getElementById(id);
//   if (s.style.display === "none") {
//     s.style.display = "block";
//   } else {
//     s.style.display = "none";
//   }
// }
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
function myFunction_table() {
  var s = document.getElementById("hide_botton_table");
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
} 
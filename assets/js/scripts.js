
/*toggle arrows in hide/show button , arrow up vs arrow down*/ 
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

  /*selector colors javascript*/ 

  $(".all_selectors").hover(function() {
      $(this).css("background-color", "#d6eeff");
  }, function() {
      $(this).css("background-color", "#d0c9c9");
  });

  /*Shepherd.js dinamic tour*/ 

  const tour = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-square-dark',
    }
  });
  
  tour.addStep('example-step', {
    text: 'Welcome to our Toy Story shop!!! If you would like to find <b>a customer</b>, <b>a date</b> when or <b>a town</b> where our productus have been saled and delievered, you can start by clicking the selector bar highlighted.',
    attachTo: '.all_selectors bottom',
    buttons: [
        {
          text: 'Next', 
          action: tour.next
        }
    ]
  }); 
  tour.addStep('example-step2', {
    text: 'This button toggle through hiding and showing the charts. In this way you can choose which of them you want to be looking at',
    attachTo: '.gray bottom',
    buttons: [
        {
          text: 'Next', 
          action: tour.next
        }
    ]
  });
  tour.addStep('example-step3', {
    text: 'Here you make all the selected data disappear and you will be able to start back again from the beginning',
    attachTo: '.reset bottom',
    buttons: [
        {
          text: 'Next', 
          action: tour.next
        }
    ]
  });
  tour.addStep('example-step4', {
    text: 'Here you will go back to the beggining of the page',
    attachTo: '.top bottom',
    buttons: [
        {
          text: 'Next', 
          action: tour.next
        }
    ]
  });
  tour.addStep('example-step5', {
    text: 'On this map you can find the exact adress of each of all customers , just hover the clusters and click on them',
    attachTo: '#Map bottom',
    buttons: [
        {
          text: 'End tour', 
          action: tour.next
        }
    ]
  });
  
    tour.start()
      
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




  
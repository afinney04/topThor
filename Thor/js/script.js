$(".mobile-menu").click(function(){
    
    $('#header nav a').toggleClass('show');
    
});

var navOffsetAbout = $('#about').offset().top;

$(window).scroll(function(){
    
    var scrollPos = $(window).scrollTop();
    
        if(scrollPos > navOffsetAbout){
        
        $('nav').addClass('nav-animation');
        
        } else {
        
        $('nav').removeClass('nav-animation');
        }
    
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > navOffsetAbout) {
        $('.navTwo').fadeIn();
    } else {
        $('.navTwo').fadeOut();
    }

});

var dropDownS1 = $('S1');
var dropDownS2 = $('S2');
var dropDownS3 = $('S3');

function reveal1() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal1);

function reveal2() {
  var reveals = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);

function reveal3() {
  var reveals = document.querySelectorAll(".reveal3");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal3);

function reveal4() {
  var reveals = document.querySelectorAll(".reveal4");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 325;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal4);
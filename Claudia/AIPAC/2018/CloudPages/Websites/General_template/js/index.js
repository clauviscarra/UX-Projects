function menuToggle(){
  $('.toggle-menu').click(function(){
    $('.mobile-nav').slideToggle();
  });
};

menuToggle();

function menuScroll(){
  var header = $(".navbar");

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 400) {
          header.addClass("scrolled");
      } else {
          header.removeClass("scrolled");
      }
  });

}
menuScroll();

function tabToggle(){
  $('#link1').click(function(){
    $(this).addClass('active');
    $('#link2, #link3, #link4' ).removeClass('active');
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 80
    }, 400);
    return false;

  })

  $('#link2').click(function(){
    $(this).addClass('active');
      $('#link1, #link3, #link4' ).removeClass('active');
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 80
    }, 400);
    return false;

  })
  $('#link3').click(function(){
    $(this).addClass('active');
      $('#link1, #link2, #link4' ).removeClass('active');
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 80
    }, 400);
    return false;

  })
  $('#link4').click(function(){
    $(this).addClass('active');
      $('#link1, #link2, #link3' ).removeClass('active');
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 80
    }, 400);
    return false;

  })

}

tabToggle();

function mobileTabToggle(){
  $('.mobile-nav a').click(function(){
    $('.mobile-nav').slideToggle();

  })
}

mobileTabToggle();

// function menuEx(){
//   $('.toggle-menu').click(function(){
//     $(this).css('background-image','url("/images/ex.png")');
//   })
// }
//
// menuEx();



// function scrolNav(){
//   $('.nav a').click(function(){
//     //Toggle Class
//     $(".active").removeClass("active");
//     $(this).closest('li').addClass("active");
//     var theClass = $(this).attr("class");
//     $('.'+theClass).parent('li').addClass('active');
//     //Animate
//     $('html, body').stop().animate({
//         scrollTop: $( $(this).attr('href') ).offset().top - 160
//     }, 400);
//     return false;
//   });
// }
// scrollNav();

$(".nav-link").click(function () {
  var sectionID = $(this).attr("href");
  var sectionPlace = $(sectionID).offset().top;
  $("html,body").animate({ scrollTop: sectionPlace }, 1500);
});
var placeAbout = $("#aboutpage").offset().top;
var navheight = $(".navbar").outerHeight(true);
$(window).scroll(function () {
  var myScrollValue = $(window).scrollTop();
  if (myScrollValue > placeAbout - navheight) {
    $(".navbar").addClass("changebg");
    $(".navbar-brand").addClass("changeb");
    $(".arrowfont").fadeIn(500);
  } else {
    $(".navbar").removeClass("changebg");
    $(".navbar-brand").removeClass("changeb");
    $(".arrowfont").fadeOut(500);
  }
});
$(".arrowfont").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1500);
});

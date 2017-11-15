$( document ).ready(function() {
  $(".arrow-down").click(function() {
    $('html,body').animate({
      scrollTop: $("#project-details").offset().top},
      'slow');
    });
});

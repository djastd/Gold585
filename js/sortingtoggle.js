$(document).ready(function() {
      $('.sorting__caption').on('click', sortingtoggle);

  });



  function sortingtoggle(){
    $('.sorting-block').slideToggle(500);
    $(this).children('i').toggleClass('caret_domw').toggleClass('icon_minus');
  }
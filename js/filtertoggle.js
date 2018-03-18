$(document).ready(function() {
      $('.filter__caption').on('click', filtertoggle);
  });



  function filtertoggle(){
    $('.filter-block').slideToggle(500);
    $(this).children('i').toggleClass('caret_domw').toggleClass('icon_minus');
  }



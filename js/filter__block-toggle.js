$(document).ready(function() {
      $('.filter-block__caption').on('click', filterblocktoggle);
      $('.filter-block__caption').on('click', iconplustoggle);
  });



  function filterblocktoggle(){
    $('.filter-block__label').not($(this).nextAll()).slideUp(500);
      $(this).nextAll().slideToggle(500);
  }

  function iconplustoggle(){
    $('.filter-block__caption').toggleClass('circle_plus');
    $('.circle_plus').toggleClass('circle_minus');
  }
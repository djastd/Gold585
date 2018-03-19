$(document).ready(function() {
      $('.filter-block__caption').on('click', filterblocktoggle);    
  });



  function filterblocktoggle(){
      $(this).nextAll().slideToggle(500);
      $(this).children('i').toggleClass('circle_plus').toggleClass('circle_minus'); 
  }
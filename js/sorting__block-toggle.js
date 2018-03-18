$(document).ready(function() {
      $('.sorting-block__caption').on('click', sortingblocktoggle);
  });



  function sortingblocktoggle(){
    $(this).nextAll().slideToggle(500);
    $(this).children('i').toggleClass('circle_plus').toggleClass('circle_minus');
  
    }
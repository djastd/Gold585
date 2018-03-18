$(document).ready(function() {
      $('.sorting-block__caption').on('click', sortingblocktoggle);
  });



  function sortingblocktoggle(){
    $('.sorting-block__label').not($(this).nextAll()).slideUp(500);
      $(this).nextAll().slideToggle(500);
  }
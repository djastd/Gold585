$(document).ready(function() {
      $('.catalog-item:last-child').addClass('last-item');
      $('.footer, .paginator').hide();
     $(window).scroll( HideButton );

  });



 function HideButton(){
 if($('.last-item').offset().top >= 50) {
 $('.container__button').hide();
 $('.footer, .paginator').show();
}
}
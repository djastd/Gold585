$(document).ready(function() {
      $('.filter__icon').on('click', modalwindowOpen);
      $('.filter__button, .header__icon-filter-cross').on('click', modalwindowClose);

  });



  function modalwindowOpen(){
      $('#filter').removeClass('container_disabled');
      $('.header__icon-filter-cross').show();
      $('#filter').next('.container').hide();
      $('.footer').hide();
      
  }

  function modalwindowClose(){
    $('#filter').addClass('container_disabled');
    $('.header__icon-filter-cross').hide();
    $('#filter').next('.container').show();

}
$(document).ready(function() {
      $('.filter__icon').on('click', modalwindowOpen);

  });



  function modalwindowOpen(){
      $('#filter').removeClass('container_disabled');
      $('.header__icon-filter-cross').show();
      
  }
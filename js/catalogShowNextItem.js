$(document).ready(function() {
      $('.container__button').on('click', ShowNextCatalogItem);

  });



  function  ShowNextCatalogItem(){
    $('.catalog-item_disabled:eq(0), .catalog-item_disabled:eq(1), .catalog-item_disabled:eq(2)').removeClass('catalog-item_disabled');
  }
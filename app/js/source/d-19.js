(function(){
'use strict';



$(document).ready(init);



function init(){

  $('#get').click(getInput);

}

  function getInput(){
   $('#symbol').val().split(',').map(stripUC).map(url).forEach(getQuote);
  }


  function stripUC(symbol){
    return symbol.trim().toUpperCase();
  }


  function url(sym){
     return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + sym + '&callback=?';

  }
  var count = 0;
  var sum = 0; //global
  function getQuote(url, index, urls){
    $.getJSON(url, function(quote){
      sum += quote.LastPrice;
      count++;
      if(count === urls.length) {
      $('#result').text(sum);
    }
    });
  }

  // function adding (data){
  //   var array = [];
  //   var total = 0;
  //   var price = data.LastPrice;
  //   total = (total + price) * 1;
  //
  //   array.push(total);
  //   makeDiv(array);
  //
  //   }
  //
  //
  // function makeDiv(x){
  //   var $div = $('<div class="sum">');
  //   $div.text(x);
  //   $('div.container').append($div);
  //
  // }










})();

(function(){
'use strict';



$(document).ready(init);



function init(){

  $('#get').click(getQuote);

}

  function getQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';

    $.getJSON(url, collect);


  }

  function collect(data){
    var $div = $('<div class="container"> ');

    $div.append('<div class="quote">' + data.Symbol + '</div>');
    $div.append('<div class="quote">' + data.Name + '</div>');
    $div.append('<div class="quote" id="last">' + '$' + data.LastPrice + '</div>');

    $('body').append($div);

  }


})();

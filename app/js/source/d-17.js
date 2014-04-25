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
    var shares = $('#shares').val().trim().toUpperCase();
    var position = shares * data.LastPrice;
    var $div = $('<div class="container"> ');

    $div.append('<div class="quote">' + 'Shares:' + ' ' +shares + '</div>');
    $div.append('<div class="quote">' + 'Last-Price:'+ ' ' + data.LastPrice + '</div>');
    $div.append('<div class="quote">' + 'Position:' + ' ' + '$' + position + '</div>');

    $('body').append($div);

  }


// function collect(data){
//   var $div = $('<div class="container"> ');
//
//   $div.append('<div class="quote">' + data.Symbol + '</div>');
//   $div.append('<div class="quote">' + data.Name + '</div>');
//   $div.append('<div class="quote">' + '$' + data.LastPrice + '</div>');
//
//   $('body').append($div);
//
// }


})();

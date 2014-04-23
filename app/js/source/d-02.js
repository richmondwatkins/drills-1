(function(){
'use strict';

$(document).ready(init);



function init(){
  $('#go').click(capture);
  }



  function capture(){
    var value = $('#input').val();
    // console.log(value);
    var array = value.split(',');
    // console.log(array);

    for(var i = 0; i < array.length; i++){
    var $div = $('<div class="newDiv">');
      if(array[i].length % 2){
          // var isOdd = array[i];
        $div.addClass('green');
        array[i] = array[i].toUpperCase();
        }
        else {
          $div.addClass('red');
          array[i] = array[i].toLowerCase();
        }
        $div.text(array[i]);
        $('body').append($div);
      }

}
      // var $div = ('<div class="newDiv">');
      // $div = $div + array[i];
      //  $('body').append($div);



      // for(var i = 0; i < array.length; i++){
      //   debugger;
      //   if($(array[i]).length % 2){
      //     console.log(array[i]);
      //   }







  //   if(square % 2 === 0){
  //    $('.evens').append('"<p>"+ square + </p>');
  //   }
  //    else {
  //      $('.odds').append('<p>square<p>');
  //  }




})();

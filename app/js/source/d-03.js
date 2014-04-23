(function(){
'use strict';
$(document).ready(init);



function init(){
    $('#go').click(equation);


  }

  function equation(){
    var value = $('#input').val();
    // console.log(value);
    var array = value.split(',');
    console.log(array);


    for (var i = 0; i < array.length; i++){
      var $div = $('<div class="newDiv">');
      var answer = Math.pow(array[i], 4);
      // console.log(answer);
      $div.text(answer);
      $('body').append($div);
    }
  }




})();

(function(){
'use strict';
$(document).ready(init);

var total = 0;

function init(){
    $('#sum').click(equation);
  }

  function equation (){
    var box1 = $('#input1').val() *1;
    var box2 = $('#input2').val() * 1;
    

     total = box1 + box2;

    $('#sum1').text(total);
  }




})();

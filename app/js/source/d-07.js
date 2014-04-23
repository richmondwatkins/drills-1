(function(){
'use strict';
$(document).ready(init);



function init(){
    $('#button').click(end);

  }

  function end() {
    var nums = $('#input').val();
    var int = nums.split(',');

    sum(int);
  }


    function sum(array){
      for(var i = 0; i <= array.length; i++){
        var first = array.shift() * 1;
        var second = array.pop() * 1;
        var total = first + second ;
        console.log(total);

        reveal(total);
      }
    }

    function reveal(number){
      var $div = $('<div><div>');
          $div.text(number);
          $('body').append('<div class="div">' + number + '</div');
    }

    //
    // var $div = $('<div class="evens">');
    // for(var i = start; i <=end; i++){
    //
    //   if(i % 2 === 0){
    //       $div.text(i);
    //       $('body').append('<div class="evens">' + i + '<div>');
    //   }
  // function sum(start, array) {
  //   for(var i = start; i <= array.length; i++){
  //     var first = array[i].shift() * 1;
  //     var second = array.pop() * 1;
  //     var total = first + second;
  //
  //     console.log(total);
  //     }
  //   }





  //   var ingrs = nums.split(',');
  //   var one = ingrs.pop();
  //   var two = ingrs.pop();
  //   var three = ingrs.pop();
  //
  //   var $div = $('<div></div>');
  //       $div.text(one, two, three);
  //     $('body').append('<div class="items">' + three + '</div><div class="items">' + two + '</div><div class="items">' + one + '</div>');
  //   console.log(one, two, three);
  // }


})();

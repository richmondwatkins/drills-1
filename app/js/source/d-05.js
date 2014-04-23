(function(){
'use strict';
$(document).ready(init);



function init(){
    $('#button').click(getInput);

  }

  function getInput(){
    var input = $('#input').val();
    var nums = input.split(',');
    var first = nums[0];
    var second = nums[1];

    makeArray(first,second);
  }

  function makeArray(start, end){
    // var eve = [];
    var $div = $('<div class="evens">');
    for(var i = start; i <=end; i++){

      if(i % 2 === 0){
          $div.text(i);
          $('body').append('<div class="evens">' + i + '<div>');
      }

      // console.log(i);
      // filter(i);

    }

  }
//
//   function filter(x) {
//     return x % 1;
//
//     // var ar = [];
//     // var isOdd = x % 1;
//     // ar.push(isOdd);
//     // console.log(ar);
//
//     // div(isOdd);
//   }
//
//   function div( x ) {
// 	return'<div>' + x + '</div>';
// }

  // function div(y) {
  //   $('#evens').append('<div></div>');
  //   var str = $('<div>' + y + '</div>');
  //   console.log(str);
  //   $('#evens').text(str);
  // }

//   $('#tables').append('<table></table');
//   var table = $('#tables').children();
//
//   table.append('<tbody><tr class="table"><td>' + nums[i] + '<sup>' + exp[i] + '</sup>'+ '</td></tr><tr class="results"><td>' + answer + '</td></tr></tbody>');
//
// }

// var x = $('#evens').append(makeArray(first, second).filter(filter).map(div));
// console.log(x);

})();

(function(){
'use strict';
$(document).ready(init);



function init(){
    $('#go').click(equation);

  }

  function equation(){
    var value = $('#input').val();
    // console.log(value);
    var array = value.split('-');
    // console.log(array);
    var nums = array[0].split(',');
    // debugger;
    var exp = array[1].split(',');

    for(var i = 0; i < exp.length; i++){
      var answer = Math.pow(nums[i], exp[i]);

      $('#tables').append('<table></table');
      var table = $('#tables').children();

      table.append('<tbody><tr class="table"><td>' + nums[i] + '<sup>' + exp[i] + '</sup>'+ '</td></tr><tr class="results"><td>' + answer + '</td></tr></tbody>');

    }



 }

  // function createTable(nums, exp, answer){
  //   // var $table = $('<table></table>');
  //
  // }


})();

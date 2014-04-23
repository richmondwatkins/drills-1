(function(){
'use strict';
$(document).ready(init);



function init(){
    $('#button').click(end);

  }

  function end() {
    var nums = $('#input').val();
    var ingrs = nums.split(',');
    var one = ingrs.pop();
    var two = ingrs.pop();
    var three = ingrs.pop();

    var $div = $('<div></div>');
        $div.text(one, two, three);
      $('body').append('<div class="items">' + three + '</div><div class="items">' + two + '</div><div class="items">' + one + '</div>');
    console.log(one, two, three);
  }


})();

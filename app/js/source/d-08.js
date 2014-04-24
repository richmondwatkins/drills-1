(function(){
'use strict';
$(document).ready(init);



function init(){
    $('.color').click(change);

  }


  function change(){
    $('.color').toggleClass('green');
  }


})();

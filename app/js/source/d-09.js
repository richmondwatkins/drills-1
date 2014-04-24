(function(){
'use strict';
$(document).ready(init);



function init(){
    $('.color').click(randomize);

  }


  function randomize(){
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var alpha = Math.floor(Math.random() * 10);

    createColor(red,green,blue,alpha);

  }

  function createColor(r,g,b,a){
    $('.color').css('background-color','rgba('+r+','+g+','+b+', 0.'+a+')');

  }



//     var flip = (Math.floor(Math.random() * 2) === 0) *1;
//     if(flip === 1){
//       heads = (heads + 1);
//       $('#head').text(heads);
//     }



})();

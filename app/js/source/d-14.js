(function(){
'use strict';

var w = window.innerWidth;
var h = window.innerHeight;

$(document).ready(init);



function init(){
 makeRect();
}


function makeRect() {
  $('body').append('<div class="rectangle"></div>');

  var wid = Math.floor(Math.random() * 100);
  var leng = Math.floor(Math.random() * 100);

  $('.rectangle').css({'width': wid + 'px', 'height' : leng + 'px'});

  colorRect();
  placeBox(wid,leng);
}

function colorRect() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var a = Math.floor(Math.random() * 10);

  $('.rectangle').css('background-color','rgba('+r+','+g+','+b+', 0.'+a+')');

  placeBox();
}

function placeBox(x, y) {
  var posX = Math.floor(Math.random() * (h - y - 38));
  var posY = Math.floor(Math.random() * (w - x));
 $('.rectangle').css({'position': 'relative','top' : posY + 'px', 'left' : posX + 'px'});

    // numRect(place);
  }



// function numRect (place) {
//   // var $div = $('<div class="rectangel"></div>')
//   var num = Math.floor(Math.random() * 100);
//     for(var i = 0; i < num; i++){
//       place[i];
//     }
// }

      // var final = $('body').append('<div class="rectangle"></div>');
      // final += i;


//
//     }
// }
//
// }
//
// function randomBox() {
  // var posX = Math.floor(Math.random() * h;
  // var posY = Math.floor(Math.random() * w;
//
// }
//






// $('#big').css({'position': 'relative','top' : y + 'px', 'left' : x + 'px'});

// var  = Math.floor(Math.random() * h;
// var posXX = Math.floor(Math.random() *  350);
// var posYY = Math.floor(Math.random() * 350);


})();

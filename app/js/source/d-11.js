(function(){
'use strict';

var w = window.innerWidth;
var h = window.innerHeight;
// console.log(w, h);

$(document).ready(init);



function init(){
  randomBox();
  $('body').on('click', 'div', function(event){
    event.stopPropagation();
    $('div').removeClass('moveable');
    $(this).addClass('moveable');
  });

  $('body').on('keydown', move);
}

function randomBox(){
  var posX = Math.floor(Math.random() * (w - 400));
  var posY = Math.floor(Math.random() * (h - 436));
  var posXX = Math.floor(Math.random() *  350);
  var posYY = Math.floor(Math.random() * 350);

  placeBox(posX,posY,posXX,posYY);

}

function placeBox(x, y, xx, yy) {
 $('#big').css({'position': 'relative','top' : y + 'px', 'left' : x + 'px'});
  $('#small').css({'position': 'absolute','top' : yy + 'px', 'left' : xx + 'px'});
console.log(x, y);



}

function move(event){
var $selected = $('div.moveable');
if (event >= 37 || event <= 40){
  event.preventDefault();
}

      switch(event.keyCode){
      case 38:
          $selected.css('top', '-=10');
        break;
      case 40:
          $selected.css('top', '+=10');
        break;
      case 37:
          $selected.css('left', '-=10');
        break;
      case 39:
        $selected.css('left', '+=10');
        break;
      }
  }






// function moveBigBox(){
//   if($(this).hasClass()){
//     switch (event.keyCode) {
//     case 37:
//         $('#big').stop().animate({
//             left: '-=10'
//         }); //left arrow key
//         break;
//     case 38:
//         $('#big').stop().animate({
//             top: '-=10'
//         }); //up arrow key
//         break;
//     case 39:
//         $('#big').stop().animate({
//             left: '+=10'
//         }); //right arrow key
//         break;
//     case 40:
//         $('#big').stop().animate({
//             top: '+=10'
//         }); //bottom arrow key
//         break;
//     }
//   }
// }

// $(document).keydown(function(e) {
//     switch (e.which) {
//     case 37:
//         $('div').stop().animate({
//             left: '-=10'
//         }); //left arrow key
//         break;
//     case 38:
//         $('div').stop().animate({
//             top: '-=10'
//         }); //up arrow key
//         break;
//     case 39:
//         $('div').stop().animate({
//             left: '+=10'
//         }); //right arrow key
//         break;
//     case 40:
//         $('div').stop().animate({
//             top: '+=10'
//         }); //bottom arrow key
//         break;
//     }
// })







//   if($(this).hasClass('#bigBox'){
//       switch(event.keyCode){
//       case 38:
//           y++;
//         break;
//       case 40:
//           y--;
//         break;
//       case 37:
//           x++;
//         break;
//       case 39:
//           x--;
//         break;
//       }
//         if(event.keyCode === 37 || event.keyCode === 38 ||  event.keyCode === 39 || event.keyCode === 40) {
//           event.preventDefault();
//         }
//   }
// }


// function move(event){
//     switch(event.keyCode){
//     case 38:
//         currentUser--;
//         paintScreen();
//       break;
//     case 40:
//         currentUser++;
//         paintScreen();
//       break;
//     case 37:
//         currentRoll--;
//         paintScreen();
//       break;
//     case 39:
//         currentRoll++;
//         paintScreen();
//       break;
//
//
//     }
//       if(event.keyCode === 37 || event.keyCode === 38 ||  event.keyCode === 39 || event.keyCode === 40) {
//         event.preventDefault();
//       }


})();

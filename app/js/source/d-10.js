(function(){
'use strict';
$(document).ready(init);

  var clock = 0;
  var timer;

function init(){
    $('#start').click(startTime);
    $('#stop').click(stopTime);
  }


  function startTime(){
  clearInterval(timer);
   timer = setInterval(function(){
      // debugger;
      clock ++;
      $('#clock').text(clock);
    }, 1000);

  }

  function stopTime(){
    clearInterval(timer);
  }



  // function countUp(){
  //     clock ++;
  //   }



//   function myStopFunction()
// {
// clearInterval(timer);
// }

  // function countUp(timer){
  //   for(var i = 0; i<10000; i++){
  //      timer = clock(i);
  //   }
  // }

// function updateClock(){
//     clock--;
//
//     if(clock > 0 && clock < 10){
//       warning();
//     }else if(!clock){
//       checkWin();
//       clearInterval(timer);
//
//
//     }
//        $('#clock').text(clock);
//   }

// setTimeout(function(){
//             $matches.removeClass('reveal');
//             $matches.addClass('tabble');
//             $matches = [];
//           }, 50;


})();

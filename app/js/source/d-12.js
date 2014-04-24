(function(){
'use strict';

$(document).ready(init);



function init(){
  $('body').on('click','#button', go);
}


function go(){
  var array = $('#input').val().split(',');
  splitArray(array);
}

function splitArray(array){
  var newArray = [];

  // var start = array * 1;
    for(var i= 0; i < array.length; i++){
      if(i % 2 === 0){

        newArray.push(Math.pow(array[i],2));
      }
      else{

        newArray.push(Math.pow(array[i], 3));
      }


    }
    makeDiv(newArray);
}

function makeDiv(array){
  // debugger;
  // var $div = $('<div></div>');
  for(var i = 0; i < array.length; i++){
    if(i % 2){


      $('div.colors').append('<div class="green">' + array[i] + '<div>');
    }
    else{
      $('div.colors').append('<div class="blue">' + array[i] + '<div>');
    }
  }

}


})();

(function(){
'use strict';

$(document).ready(init);



function init(){
$('body').on('click','button', start);
}

function start() {
var nums =  $('#input').val().split('-');
var array = nums[0].split(',');
var exp = nums[1].split(',');


  findOdds1(array);
  findOdds2(exp);
}

function findOdds1(array) { //returns odds and sums
  var oddnums = [];
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2){
      sum = sum + (array[i] * 1);

      // makeDivSum(sum);
    }
  }
    oddnums.push(sum);
    var number1 = oddnums.pop();
    makeDivSum(number1);
}

function findOdds2(array) { //returns odds and multiplies
  var odds = [];
  var product = 1;
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2){
      product = product * (array[i] * 1);


      // var number = odds.pop();
      // makeDivProd(product);
    }
  }
      odds.push(product);
      var number2 = odds.pop();
      makeDivProd(number2);

}

function makeDivSum (oddsum){
  $('div.container').append('<div class="sum">' + oddsum + '</div>');
}

function makeDivProd (oddprod){
  $('div.container').append('<div class="product">' + oddprod + '</div>');
}


})();

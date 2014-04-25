(function(){
'use strict';

/* jshint camelcase:false */



$(document).ready(init);



function init(){
  $('#get').click(get);
}


  function get() {
    var zip = $('#zip').val();
    var url = 'http://api.wunderground.com/api/f7683fa5314899af/forecast10day/q/CA/'+ zip +'.json?callback=?';
    $.getJSON(url, weather);

  }

  function weather(conditions){
    var icons = conditions.forecast.simpleforecast.forecastday.map(urls);
    // var  temp = conditions.forecast.simpleforecast.forecastday.map(temps).forEach(append);
    var  day = conditions.forecast.simpleforecast.forecastday.map(days);

    append(icons, day);
  }

  function append (icons, day){
    var $img = $('<img>');
    var $day= $('<div>');

    for(var i = 0; i < day.length; i ++) {

    $day.text(day[i]);
    $img.attr('src', icons[i]);

    $('#forecast').append($img[i]).append($day[i]);

  }
}
  // function appendTemp (temp){
    // var $div= $('<div>');
    // $div.text(temp);
  //   $('#forecast').append($div);
  // }
  //
  // function appendDay (day){
  //   var $div= $('<div>');
  //   $div.text(day);
  //   $('#forecast').append($div);
  // }


  function urls (conditions) {
    return conditions.icon_url;
  }

  // function temps(conditions) {
  //   return conditions.high.fahrenheit;
  // }



  function days(conditions) {
    return conditions.date.weekday;
  }

    // var current = {};
    // current.zipcode = conditions.current_observation.display_location.city;
    // current.temp = conditions.current_observation.temp_f;
    // chart.dataProvider.push(current);




// var $img = $('<img>');
// $img.attr('src', conditions.current_observation.icon_url);
// $('#weather').append($img);
// console.log(conditions);
//
// var $div = $('<div>');
// $div.text(conditions.current_observation.temperature_string);
// $('#weather').append($div);





})();

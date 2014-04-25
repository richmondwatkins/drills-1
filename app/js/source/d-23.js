(function(){
'use strict';

/*global AmCharts: true */
/* jshint camelcase:false */

var chart;

$(document).ready(init);



function init(){
  makeGraph();
  $('#get').click(get);
}


  function get() {
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/e8dcaa06f5ec42ae/conditions/q/CA/'+ zip +'.json?callback=?';
    $.getJSON(url, weather);
    
  }

  function weather(conditions){
    var current = {};
    current.zipcode = conditions.current_observation.display_location.city;
    current.temp = conditions.current_observation.temp_f;
    chart.dataProvider.push(current);
    chart.validateData();
    console.log(conditions);
  }



function makeGraph() {
  chart = AmCharts.makeChart('weather', { //graph is the id of the graph
    'type': 'serial',
    'theme': 'dark',
    'dataProvider': [],        //the data that goes in the chart
    'valueAxes': [{
        'gridColor':'#FFFFFF',
    'gridAlpha': 0.2,          //opacity
    'dashLength': 0
    }],
    'gridAboveGraphs': true,
    'startDuration': 1,
    'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillAlphas': 0.8,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'temp'
    }],
    'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
    },
    'categoryField': 'zipcode',
    'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0
    },
  'exportConfig':{
    'menuTop': 0,
    'menuItems': [{
      'icon': '/lib/3/images/export.png',
      'format': 'png'
      }]
  }
});

}




})();

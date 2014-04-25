(function(){
'use strict';

/*global AmCharts: true */
/* jshint camelcase:false */

var gaugeChart;

$(document).ready(init);



function init(){
  makeGraph();
  $('#get').click(get);
}


  function get() {
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/f7683fa5314899af/conditions/q/CA/'+ zip +'.json?callback=?';
    $.getJSON(url, weather);
  }

  function weather(conditions){
    var current = conditions.current_observation.wind_gust_mph;
    gaugeChart.arrows[0].setValue(current);
    gaugeChart.axes[0].setBottomText(current + ' mph');
  }



function makeGraph() {
  gaugeChart = AmCharts.makeChart('graph', {
    'type': 'gauge',
	'theme': 'none',
    'axes': [{
        'axisThickness':1,
         'axisAlpha':0.2,
         'tickAlpha':0.2,
         'valueInterval':20,
        'bands': [{
            'color': '#84b761',
            'endValue': 10,
            'startValue': 0
        }, {
            'color': '#fdd400',
            'endValue': 15,
            'startValue': 0
        }, {
            'color': '#cc4748',
            'endValue': 15,
            'innerRadius': '95%',
            'startValue': 6
        }],
        'bottomText': '0 km/h',
        'bottomTextYOffset': -20,
        'endValue': 20
    }],
    'arrows': [{}]
});
}


})();

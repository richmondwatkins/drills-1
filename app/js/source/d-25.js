(function(){
'use strict';

/*global AmCharts: true */
/* jshint camelcase:false */

var chart;

$(document).ready(init);



function init(){
  makeGraph();
  $('#get').click(split);
}

function split(){
  $('#symbol').val().split(',').forEach(addQuote);

 //
 // getReport(shares);
}


function addQuote(symbol){
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  $.getJSON(url, getReport);//service/responding server calls function getReport once response comes back.
}

  function getReport(data){
    var shares =  $('#shares').val().split(',') * 1;
    var prices = {};
    prices.nm = data.Name;
    prices.lp =  data.LastPrice * shares;
    chart.dataProvider.push(prices);
    chart.validateData();
  }



function makeGraph() {
chart = AmCharts.makeChart('graph', {
    'type': 'pie',
	'theme': 'dark',
    'titles': [{
        'text': 'Visitors countries',
        'size': 16
    }],
    'dataProvider': [{

    }],
    'valueField': 'lp',
    'titleField': 'nm',
    'startEffect': 'elastic',
    'startDuration': 2,
    'labelRadius': 15,
    'innerRadius': '50%',
    'depth3D': 10,
    'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
    'angle': 15,
    'exportConfig':{
      menuItems: [{
      icon: '/lib/3/images/export.png',
      format: 'png'
      }]
	}
});

}

})();

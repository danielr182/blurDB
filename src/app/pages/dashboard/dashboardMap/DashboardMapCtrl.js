/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardMapCtrl', DashboardMapCtrl);

  /** @ngInject */
  function DashboardMapCtrl(baConfig, layoutPaths) {
    var layoutColors = baConfig.colors;
    var map = AmCharts.makeChart('amChartMap', {
      "type": "map",
      "theme": "light",
      "colorSteps": 6,
      "dataProvider": {
        "map": "colombiaLow",
        "getAreasFromMap": true,
        "zoomLevel": 0.9,
        "areas": [{id: "CO-CAS", value: "1000"}]
      },
      "areasSettings": {
        "autoZoom": true,
        "balloonText": "[[title]]: <strong>[[value]]</strong>"
      },
      "valueLegend": {
        "minValue": "menor",
        "maxValue": "mayor"
      },
      "zoomControl": {
        "minZoomLevel": 0.9
      }
    });
  }
})();
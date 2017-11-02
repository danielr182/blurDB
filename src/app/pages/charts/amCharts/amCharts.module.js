/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts', [])
      .config(routeConfig).config(amChartConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.amCharts', {
          url: '/amCharts',
          templateUrl: 'app/pages/charts/amCharts/charts.html',
          title: 'amCharts',
          sidebarMeta: {
            order: 0,
          },
        });
  }

  function amChartConfig(baConfigProvider) {
    var layoutColors = baConfigProvider.colors;
    AmCharts.themes.blur = {

      themeName: "blur",

      AmChart: {
        color: layoutColors.defaultText,
        backgroundColor: "#FFFFFF"
      },

      AmCoordinateChart: {
        colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
      },

      AmStockChart: {
        colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
      },

      AmSlicedChart: {
        colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],
        labelTickColor: "#FFFFFF",
        labelTickAlpha: 0.3
      },

      AmRectangularChart: {
        zoomOutButtonColor: '#FFFFFF',
        zoomOutButtonRollOverAlpha: 0.15,
        zoomOutButtonImage: "lens.png"
      },

      AxisBase: {
        axisColor: "#FFFFFF",
        axisAlpha: 0.3,
        gridAlpha: 0.1,
        gridColor: "#FFFFFF"
      },

      ChartScrollbar: {
        backgroundColor: "#FFFFFF",
        backgroundAlpha: 0.12,
        graphFillAlpha: 0.5,
        graphLineAlpha: 0,
        selectedBackgroundColor: "#FFFFFF",
        selectedBackgroundAlpha: 0.4,
        gridAlpha: 0.15
      },

      ChartCursor: {
        cursorColor: layoutColors.primary,
        color: "#FFFFFF",
        cursorAlpha: 0.5
      },

      AmLegend: {
        color: "#FFFFFF"
      },

      AmGraph: {
        lineAlpha: 0.9
      },
      GaugeArrow: {
        color: "#FFFFFF",
        alpha: 0.8,
        nailAlpha: 0,
        innerRadius: "40%",
        nailRadius: 15,
        startWidth: 15,
        borderAlpha: 0.8,
        nailBorderAlpha: 0
      },

      GaugeAxis: {
        tickColor: "#FFFFFF",
        tickAlpha: 1,
        tickLength: 15,
        minorTickLength: 8,
        axisThickness: 3,
        axisColor: '#FFFFFF',
        axisAlpha: 1,
        bandAlpha: 0.8
      },

      TrendLine: {
        lineColor: layoutColors.danger,
        lineAlpha: 0.8
      },

      // ammap
      AreasSettings: {
        alpha: 0.8,
        color: layoutColors.info,
        colorSolid: layoutColors.primaryDark,
        unlistedAreasAlpha: 0.4,
        unlistedAreasColor: "#FFFFFF",
        outlineColor: "#FFFFFF",
        outlineAlpha: 0.5,
        outlineThickness: 0.5,
        rollOverColor: layoutColors.primary,
        rollOverOutlineColor: "#FFFFFF",
        selectedOutlineColor: "#FFFFFF",
        selectedColor: "#f15135",
        unlistedAreasOutlineColor: "#FFFFFF",
        unlistedAreasOutlineAlpha: 0.5
      },

      LinesSettings: {
        color: "#FFFFFF",
        alpha: 0.8
      },

      ImagesSettings: {
        alpha: 0.8,
        labelColor: "#FFFFFF",
        color: "#FFFFFF",
        labelRollOverColor: layoutColors.primaryDark
      },

      ZoomControl: {
        buttonFillAlpha: 0.8,
        buttonIconColor: layoutColors.defaultText,
        buttonRollOverColor: layoutColors.danger,
        buttonFillColor: layoutColors.primaryDark,
        buttonBorderColor: layoutColors.primaryDark,
        buttonBorderAlpha: 0,
        buttonCornerRadius: 0,
        gridColor: "#FFFFFF",
        gridBackgroundColor: "#FFFFFF",
        buttonIconAlpha: 0.6,
        gridAlpha: 0.6,
        buttonSize: 20
      },

      SmallMap: {
        mapColor: "#000000",
        rectangleColor: layoutColors.danger,
        backgroundColor: "#FFFFFF",
        backgroundAlpha: 0.7,
        borderThickness: 1,
        borderAlpha: 0.8
      },

      // the defaults below are set using CSS syntax, you can use any existing css property
      // if you don't use Stock chart, you can delete lines below
      PeriodSelector: {
        color: "#FFFFFF"
      },

      PeriodButton: {
        color: "#FFFFFF",
        background: "transparent",
        opacity: 0.7,
        border: "1px solid rgba(0, 0, 0, .3)",
        MozBorderRadius: "5px",
        borderRadius: "5px",
        margin: "1px",
        outline: "none",
        boxSizing: "border-box"
      },

      PeriodButtonSelected: {
        color: "#FFFFFF",
        backgroundColor: "#b9cdf5",
        border: "1px solid rgba(0, 0, 0, .3)",
        MozBorderRadius: "5px",
        borderRadius: "5px",
        margin: "1px",
        outline: "none",
        opacity: 1,
        boxSizing: "border-box"
      },

      PeriodInputField: {
        color: "#FFFFFF",
        background: "transparent",
        border: "1px solid rgba(0, 0, 0, .3)",
        outline: "none"
      },

      DataSetSelector: {
        color: "#FFFFFF",
        selectedBackgroundColor: "#b9cdf5",
        rollOverBackgroundColor: "#a8b0e4"
      },

      DataSetCompareList: {
        color: "#FFFFFF",
        lineHeight: "100%",
        boxSizing: "initial",
        webkitBoxSizing: "initial",
        border: "1px solid rgba(0, 0, 0, .3)"
      },

      DataSetSelect: {
        border: "1px solid rgba(0, 0, 0, .3)",
        outline: "none"
      }

    };
    AmCharts.themes.light = {
      
        themeName:"light",
      
        AmChart: {
          color: "#000000", backgroundColor: "#FFFFFF"
        },
      
        AmCoordinateChart: {
          colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
        },
      
        AmStockChart: {
          colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
        },
      
        AmSlicedChart: {
          colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"],
          outlineAlpha: 1,
          outlineThickness: 2,
          labelTickColor: "#000000",
          labelTickAlpha: 0.3
        },
      
        AmRectangularChart: {
          zoomOutButtonColor: '#000000',
          zoomOutButtonRollOverAlpha: 0.15,
          zoomOutButtonImage: "lens"
        },
      
        AxisBase: {
          axisColor: "#000000",
          axisAlpha: 0.3,
          gridAlpha: 0.1,
          gridColor: "#000000"
        },
      
        ChartScrollbar: {
          backgroundColor: "#000000",
          backgroundAlpha: 0.12,
          graphFillAlpha: 0.5,
          graphLineAlpha: 0,
          selectedBackgroundColor: "#FFFFFF",
          selectedBackgroundAlpha: 0.4,
          gridAlpha: 0.15
        },
      
        ChartCursor: {
          cursorColor: "#000000",
          color: "#FFFFFF",
          cursorAlpha: 0.5
        },
      
        AmLegend: {
          color: "#000000"
        },
      
        AmGraph: {
          lineAlpha: 0.9
        },
        GaugeArrow: {
          color: "#000000",
          alpha: 0.8,
          nailAlpha: 0,
          innerRadius: "40%",
          nailRadius: 15,
          startWidth: 15,
          borderAlpha: 0.8,
          nailBorderAlpha: 0
        },
      
        GaugeAxis: {
          tickColor: "#000000",
          tickAlpha: 1,
          tickLength: 15,
          minorTickLength: 8,
          axisThickness: 3,
          axisColor: '#000000',
          axisAlpha: 1,
          bandAlpha: 0.8
        },
      
        TrendLine: {
          lineColor: "#c03246",
          lineAlpha: 0.8
        },
      
        // ammap
        AreasSettings: {
          alpha: 0.8,
          color: "#00b2a2",
          colorSolid: "#005764",
          unlistedAreasAlpha: 0.4,
          unlistedAreasColor: "#000000",
          outlineColor: "#FFFFFF",
          outlineAlpha: 0.5,
          outlineThickness: 0.5,
          rollOverColor: "#a0f8a0",
          rollOverOutlineColor: "#FFFFFF",
          selectedOutlineColor: "#FFFFFF",
          selectedColor: "#f15135",
          unlistedAreasOutlineColor: "#FFFFFF",
          unlistedAreasOutlineAlpha: 0.5
        },
      
        LinesSettings: {
          color: "#000000",
          alpha: 0.8
        },
      
        ImagesSettings: {
          alpha: 0.8,
          labelColor: "#000000",
          color: "#000000",
          labelRollOverColor: "#3c5bdc"
        },
      
        ZoomControl: {
          buttonFillAlpha:0.7,
          buttonIconColor:"#a7a7a7"
        },
      
        SmallMap: {
          mapColor: "#000000",
          rectangleColor: "#f15135",
          backgroundColor: "#FFFFFF",
          backgroundAlpha: 0.7,
          borderThickness: 1,
          borderAlpha: 0.8
        },
      
        // the defaults below are set using CSS syntax, you can use any existing css property
        // if you don't use Stock chart, you can delete lines below
        PeriodSelector: {
          color: "#000000"
        },
      
        PeriodButton: {
          color: "#000000",
          background: "transparent",
          opacity: 0.7,
          border: "1px solid rgba(0, 0, 0, .3)",
          MozBorderRadius: "5px",
          borderRadius: "5px",
          margin: "1px",
          outline: "none",
          boxSizing: "border-box"
        },
      
        PeriodButtonSelected: {
          color: "#000000",
          backgroundColor: "#b9cdf5",
          border: "1px solid rgba(0, 0, 0, .3)",
          MozBorderRadius: "5px",
          borderRadius: "5px",
          margin: "1px",
          outline: "none",
          opacity: 1,
          boxSizing: "border-box"
        },
      
        PeriodInputField: {
          color: "#000000",
          background: "transparent",
          border: "1px solid rgba(0, 0, 0, .3)",
          outline: "none"
        },
      
        DataSetSelector: {
      
          color: "#000000",
          selectedBackgroundColor: "#b9cdf5",
          rollOverBackgroundColor: "#a8b0e4"
        },
      
        DataSetCompareList: {
          color: "#000000",
          lineHeight: "100%",
          boxSizing: "initial",
          webkitBoxSizing: "initial",
          border: "1px solid rgba(0, 0, 0, .3)"
        },
      
        DataSetSelect: {
          border: "1px solid rgba(0, 0, 0, .3)",
          outline: "none"
        }
      
      };
  }

})();

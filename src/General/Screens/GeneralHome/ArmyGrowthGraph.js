import React from 'react'
import ReactApexChart from 'react-apexcharts';


const ArmyGrowthGraph = (datee, minte, rendss) => {
  const datnew = datee;
  var format = datnew.format
  var dateee = datnew?.date
  var mintee = datnew.minte
  var dateehour = datnew.new
  if(datnew.rendss === 'totaltask'){
    var rendervalue = 'Tasks Completed'
  }
  else{
    var rendervalue = 'Total Soldiers'
  }

  const state = {

    series: [{
      name: rendervalue ,
      data: mintee,
      color: "#FF0083",
      // color: '#008000'
    }],
    options: {
      chart: {
        height: 350,
        type: 'line'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded',
          color: "#FF0083",
          dataLabels: {
            position: 'top',
          },

        },
      },
      dataLabels: {
        enabled: true,
        offsetX: 0,
        style: {
          fontSize: '10px',
          colors: ['#fff']
        }
      },

      xaxis: {
        title: {
          text: "Time Period",
          align: "right",
          style: {
            fontSize: "14px",
            fontWeight: "500",
            color: "#fff"
          }
        },
        labels: {
          formatter: function (val) {
            if (format === 'hour') {
              return val.toFixed(0) + ':00';
            } else if (format === 'day') {
              return val
            }
          }
        },
        axisBorder: {
          show: true,
          color: 'var(--datepicker-border)',
          height: 1,
          width: '100%',
          offsetX: 0,
          offsetY: 0
        },
        categories: [...dateee],
        // crosshairs: {
        //     show: false,
        //     style: {
        //         fontSize: '12px',
        //         color: '#FF0083',
        //         border: '1px solid #FF0083',
        //     },
        // }
      },
      yaxis: {
        title: {
          text: rendervalue,
          style: {
            fontSize: "14px",
            fontWeight: "500",
            color: "#fff"
          }
        },
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          }
        }

        // crosshairs: {
        //     show: false,
        //     style: {
        //         fontSize: '12px',
        //         color: '#FF0083',
        //         border: '1px solid #FF0083',
        //     },
        // }

      },

      stroke: {
        show: true,
        width: 2,
        colors: ['#FF0083']
      },


      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: false,
        theme: false,
        color: "#00000",
        style: {
          fontSize: '12px',
          color: '#00000',
        },
        marker: {
          show: true,
        },
        items: {
          display: 'flex',
        },
        fixed: {
          enabled: false,
          position: 'topBottom',
          offsetX: 0,
          offsetY: 0,
        },
        x: {
          formatter: function (x) {
            if (typeof x !== "undefined") {
              if (format === 'hour') {
                return x + '/hr';
              }
            }
            return x;
          }
        },
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + "";

            }
            return y;
          }
        }

      },


      grid: {
        borderColor: "var(--graph-border)",
        row: {
          colors: ['transparent'], // takes an array which will be repeated on columns
          opacity: 1,
          border: 'none'
        },
      },
      events: {
        mouseMove: function (event, chartContext, config) {
          var tooltip = chartContext.el.querySelector('.apexcharts-tooltip');
          var pointsArray = config.globals.pointsArray;
          var seriesIndex = config.seriesIndex;
          var dataPointIndex = config.dataPointIndex === -1 ? 0 : config.dataPointIndex;

          if (seriesIndex !== -1) {
            var position = pointsArray[seriesIndex][dataPointIndex];

            tooltip.style.top = position[1] + 'px';
            tooltip.style.left = position[0] + 'px';
          }
        }
      }
    },
  };

  return (
    <>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="line" height={window.innerWidth > 600 ? 535 : window.innerWidth < 600 ? 300 : ""} />
      </div>
    </>
  )
}

export default ArmyGrowthGraph

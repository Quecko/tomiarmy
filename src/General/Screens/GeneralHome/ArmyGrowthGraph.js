import React from 'react'
import ReactApexChart from 'react-apexcharts';


const ArmyGrowthGraph = () => {
    
    const state = {
          
        series: [{
            name: "Total Tasks",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            toolbar: {
                show: false
              }
          },
          colors: ['#ff0083'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight',
          },
          title: {
            text: '',
            align: 'left'
          },
          grid: {
            borderColor: "rgba(255, 255, 255, 0.10)",
            row: {
              colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['10AM', '11Am', '12Am', '01AM', '02AM', '03AM', '04AM', '05AM', '06AM'],
            axisBorder: {
                show: false,
                color: '#78909C',
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
            },
          },
        },
      
      
      };
    
    return (
        <>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
            </div>
        </>
    )
}

export default ArmyGrowthGraph

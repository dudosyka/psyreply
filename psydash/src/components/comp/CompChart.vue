<template>
  <apexchart type="line" height="350px" :options="chartOptions" :series="series"></apexchart>
</template>

<script>

export default {
  name: "CompChart",
  data() {
    return {
      series: [
        {
          name: "Усталость",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "Выгорание",
          data: [75, 34, 65, 76, 89, 90, 46, 75, 89]
        },
        {
          name: "Депрессия",
          data: [23, 12, 65, 90, 12, 33, 94, 56, 29]
          // data: [45, 12, 43, 56, 67, 78, 190, 250, 1, 120]
        },
        {
          name: "Тревога",
          data: [12, 34, 45, 56, 89, 76, 12, 32, 17]
          // data: [23, 34, 83, 6, 102, 345, 123, 25, 2, 12]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          events: {
            dataPointSelection: function(event, chartContext, config) {
              console.log(chartContext, config);
            }
          }
        },
        tooltip: {
          shared: false,
          intersect: true,
        },
        markers: {
          size: 1,
          onClick(e) {
            console.log(e);
          }
        },
        events: {
          dataPointSelection: function(event, chartContext, config) {
            console.log(chartContext, config);
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    }
  },
  created() {
    window.dispatchEvent(new Event('resize'));
  }
}
</script>

<style scoped>
.container-fluid {
  height: 288px;
  background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.60) 100%);
  filter: drop-shadow(0px 4px 10px rgba(0, 163, 255, 0.07));
  backdrop-filter: blur(16px);
  border-radius: 13px;
  box-shadow: 0px 6px 21px #00000008;
}
</style>

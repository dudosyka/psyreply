<template>
  <div class="container-fluid">
  <div id="chart">
    <div data-aos="zoom-out-up">
      <h3>Ключевые запросы от сотрудников</h3>
    </div>
    <div data-aos="zoom-out-up">
      <p class="description">Пояснительный абзац</p>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 95%;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">Сложные ситуации</div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">Недопонимание и Конфликты</div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Эмоциональное и физическое состояние</div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Самооценка и уверенность в себе</div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Продуктивность и мотивация</div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Самоконтроль и деструктивные мысли</div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 65%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Самоопределение и смыслы</div>
    </div>
<!--    <div data-aos="zoom-out-up">-->
<!--      <apexchart type="bar" width="100%" height="350" :options="chartOptions" :series="series"></apexchart>-->
<!--      <div id="responsive-chart"></div>-->
<!--    </div>-->
  </div>
  </div>
</template>

<script>
// export default {
//   data: function() {
//     return {
//       chartOptions: {
//         chart: {
//           width: "100%",
//           foreColor: '#fff',
//           fontFamily: 'Rubik, sans-serif',
//           fontSize: '20px',
//           fontWeight: '700',
//           toolbar: {
//             show: false
//           },
//           type: 'bar',
//           height: 350
//         },
//         tooltip: {
//           enabled: false
//         },
//         plotOptions: {
//           bar: {
//             borderRadius: 4,
//             horizontal: true,
//           }
//         },
//         responsive: [
//           {
//             breakpoint: 800,
//             options: {
//               dataLabels: {
//                 style: {
//                   fontSize: '9px'
//                 }
//               }
//             }
//           }
//         ],
//         dataLabels: {
//           enabled: true,
//           style: {
//             colors: ['#7a7a7a']
//           },
//           formatter: function (val, opt) {
//             return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
//           },
//           offsetX: 0,
//         },
//         fill: {
//           colors: ['#FFF']
//         },
//         yaxis: {
//           labels: {
//             show: false
//           }
//         },
//         xaxis: {
//           categories: ['Сложные ситуации', 'Конфликты и недопонимание', 'Эмоциональное и физическое состояние', 'Самооценка и уверенность в себе', 'Продуктивность и мотивация', 'Самоконтроль и деструктивные мысли', 'Самоопределение и смыслы'],
//           fill: {
//             colors: ['#F44336', '#E91E63', '#9C27B0']
//           },
//         },
//         legend: {
//           position: 'top'
//         },
//       },
//       series: [{
//         data: [1000, 1285, 1794, 1450, 1611, 1781, 1890],
//       }],
//     }
//   },
// };
</script>

<style scoped>
@media only screen and (max-width: 414px) {
  #chart {
    width: 100vw;
  }
}
.container-fluid {
  padding-top: 70px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1008%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M0 540.29L10 502.31L20 520.98L30 548.83L40 490.68L50 558.61L60 490.9L70 450.36L80 431.48L90 405.53L100 396.71L110 379.77L120 344.14L130 347.57L140 366.32L150 434.53L160 444.14L170 454.11L180 434.25L190 405.07L200 465.39L210 419.31L220 386.2L230 337.35L240 342.02L250 367.63L260 410.04L270 415.91L280 381.13L290 322.19L300 297.63L310 299.89L320 269.94L330 318.48L340 333.35L350 379.57L360 315.35L370 372.99L380 411.26L390 371.98L400 389.31L410 437L420 481L430 544.09L440 536.92L450 466.92L460 438.56L470 401.21L480 332.67L490 318.52L500 327.76L510 339.61L520 292.45L530 331.62L540 265.64L550 282.28L560 290.72L570 296.26L580 268.91L590 319.38L600 332.56L610 324.42L620 318.09L630 270.48L640 298.49L650 297.6L660 269.8L670 280.45L680 244.37L690 198.03L700 248.21L710 239.39L720 276.79L730 331.29L740 358.62L750 374.85L760 428.96L770 397.76L780 463.98L790 492.24L800 514.96L810 535.87L820 521.45L830 454.2L840 470.4L850 461.39L860 452.73L870 440.31L880 392.93L890 394.85L900 339.15L910 362.39L920 398.49L930 448.73L940 505.53L950 458.23L960 402.05L970 399.39L980 378.78L990 423.12L1000 461.24L1010 430.48L1020 382.76L1030 415.98L1040 421.54L1050 423.62L1060 491.6L1070 496.6L1080 448.38L1090 464.66L1100 511.58L1110 542.48L1120 534.23L1130 500.5L1140 481.93L1150 477.93L1160 482.01L1170 516.77L1180 475.64L1190 535.98L1200 547.32L1210 511.26L1220 511.38L1230 538.2L1240 544.13L1250 478.77L1260 419.74L1270 447.37L1280 436.56L1290 391.05L1300 431.7L1310 444.82L1320 464.81L1330 530.65L1340 524.7L1350 558.2L1360 494.47L1370 468.41L1380 512.94L1390 513.89L1400 476.41L1410 457.56L1420 457.87L1430 514.99L1440 476.33' stroke='rgba(16%2c 134%2c 255%2c 0.2)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 540.29L10 502.31L20 520.98L30 548.83L40 490.68L50 558.61L60 490.9L70 450.36L80 431.48L90 405.53L100 396.71L110 379.77L120 344.14L130 347.57L140 366.32L150 434.53L160 444.14L170 454.11L180 434.25L190 405.07L200 465.39L210 419.31L220 386.2L230 337.35L240 342.02L250 367.63L260 410.04L270 415.91L280 381.13L290 322.19L300 297.63L310 299.89L320 269.94L330 318.48L340 333.35L350 379.57L360 315.35L370 372.99L380 411.26L390 371.98L400 389.31L410 437L420 481L430 544.09L440 536.92L450 466.92L460 438.56L470 401.21L480 332.67L490 318.52L500 327.76L510 339.61L520 292.45L530 331.62L540 265.64L550 282.28L560 290.72L570 296.26L580 268.91L590 319.38L600 332.56L610 324.42L620 318.09L630 270.48L640 298.49L650 297.6L660 269.8L670 280.45L680 244.37L690 198.03L700 248.21L710 239.39L720 276.79L730 331.29L740 358.62L750 374.85L760 428.96L770 397.76L780 463.98L790 492.24L800 514.96L810 535.87L820 521.45L830 454.2L840 470.4L850 461.39L860 452.73L870 440.31L880 392.93L890 394.85L900 339.15L910 362.39L920 398.49L930 448.73L940 505.53L950 458.23L960 402.05L970 399.39L980 378.78L990 423.12L1000 461.24L1010 430.48L1020 382.76L1030 415.98L1040 421.54L1050 423.62L1060 491.6L1070 496.6L1080 448.38L1090 464.66L1100 511.58L1110 542.48L1120 534.23L1130 500.5L1140 481.93L1150 477.93L1160 482.01L1170 516.77L1180 475.64L1190 535.98L1200 547.32L1210 511.26L1220 511.38L1230 538.2L1240 544.13L1250 478.77L1260 419.74L1270 447.37L1280 436.56L1290 391.05L1300 431.7L1310 444.82L1320 464.81L1330 530.65L1340 524.7L1350 558.2L1360 494.47L1370 468.41L1380 512.94L1390 513.89L1400 476.41L1410 457.56L1420 457.87L1430 514.99L1440 476.33L1440 560L0 560z' fill='url(%23SvgjsLinearGradient1009)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1008'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='SvgjsLinearGradient1009'%3e%3cstop stop-opacity='0.65' stop-color='rgba(16%2c 134%2c 255%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(255%2c 255%2c 255%2c 0.2)' offset='0.8'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
}
#chart {
  background-image: linear-gradient(120deg, #66a6ff 0%, #89d8fe 100%);
  box-shadow: 0px 0px 40px #0095ff2e;
  border: 2px solid #fafafa;
  padding: 40px;
  border-radius: 40px;
  box-shadow: 0px 0px 27px #23aeff85;
  color: white;
}
h3 {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}
.description {
  color: #ededed;
}
.apexcharts-tooltip {
  display: none;
}
.progress {
  margin-top: 10px;
}
.progress-bar {
  background-color: #fff;
}
</style>
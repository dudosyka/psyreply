import { defineComponent, h, PropType } from 'vue'
import axios from "axios";

import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Plugin
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
)

export default defineComponent({
    name: 'LineChart',
    components: {
        Line
    },
    data() {
      return {
          data: null,
      }
    },
    props: {
        chartId: {
            type: String,
            default: 'line-chart'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object as PropType<Partial<CSSStyleDeclaration>>,
            default: () => {}
        },
        plugins: {
            type: Array as PropType<Plugin<'line'>[]>,
            default: () => []
        }
    },
    async mounted() {
        console.log(this.data)
    },
    setup(props, data) {
        console.log(data)
        const chartData = {
            // @ts-ignore
            labels: JSON.parse(localStorage.getItem('labels')),
            // @ts-ignore
            datasets: JSON.parse(localStorage.getItem('datasets'))
        }

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        }

        return () =>
            h(Line, {
                chartData,
                chartOptions,
                chartId: props.chartId,
                width: props.width,
                height: props.height,
                cssClasses: props.cssClasses,
                styles: props.styles,
                plugins: props.plugins
            })
    }
})

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
    async created() {
        // @ts-ignore
        this.data = await axios.get('http://localhost:3000/uid/' + localStorage.getItem('uid')).then(res => res);
    },
    async mounted() {
        console.log(this.data)
    },
    setup(props, data) {
        console.log(data)
        const chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#f81179',
                    data: [40, 39, 10, 410, 39, 80, 40]
                },
                {
                    label: 'Data One',
                    backgroundColor: '#117979',
                    data: [40, 39, 10, 240, 39, 80, 40]
                },
                {
                    label: 'Data One',
                    backgroundColor: '#f87911',
                    data: [40, 39, 120, 40, 39, 80, 40]
                },
                {
                    label: 'Data One',
                    backgroundColor: '#ff11ff',
                    data: [40, 39, 10, 420, 39, 80, 40]
                }
            ]
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

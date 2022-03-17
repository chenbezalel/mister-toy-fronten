<template>
  <section class="prices-chart" v-if="toys">
    <h1>prices chart</h1>
    <DoughnutChart :chartData="testData" />
  </section>
</template>

<script>
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "prices-chart",
  components: { DoughnutChart },
  data() {
    return {
        data: [],
    };
  },
  created() {
    this.$store.dispatch({ type: "loadToys" }).then((toys) => {
      this.prices(toys);
    });
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    testData() {
      return {
        labels: this.$store.getters.labels,
        datasets: [
          {
            data: [...this.data],
            backgroundColor: [
              '#77CEFF',
              '#0079AF',
              '#123E6B',
              '#97B0C4',
              '#A5C8ED',
              '#33C8ED',
              '#A533ED',
              '#A53333',
            ],
          },
        ],
      }
    },
  },
  methods: {
    prices(toys) {
      this.testData.labels.forEach((label) => {
        var sumPrice = toys.reduce((acc, toy) => {
          if (toy.labels.includes(label)) acc += toy.price;
          return acc;
        }, 0);
       this.data.push(sumPrice)
      });
    },
  },
};
</script>

<style>
</style>
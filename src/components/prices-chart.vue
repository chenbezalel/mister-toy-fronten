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
        testData: {
          labels: JSON.parse(JSON.stringify(this.$store.getters.labels)),
          datasets: [
            {
              data: [],
              backgroundColor: [
                "#77CEFF",
                "#0079AF",
                "#123E6B",
                "#97B0C4",
                "#A5C8ED",
                "#33C8ED",
                "#A533ED",
                "#A53333",
              ],
            },
          ],
        },
    };
  },
  created() {
    this.$store.dispatch({ type: "loadToys" }).then((toys) => {
      this.prices(toys);
    });
  },
  mounted() {},
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    // testData() {
    //   return {
    //     labels: JSON.parse(JSON.stringify(this.$store.getters.labels)),
    //     datasets: [
    //       {
    //         data: [],
    //         backgroundColor: [
    //           "#77CEFF",
    //           "#0079AF",
    //           "#123E6B",
    //           "#97B0C4",
    //           "#A5C8ED",
    //           "#33C8ED",
    //           "#A533ED",
    //           "#A53333",
    //         ],
    //       },
    //     ],
    //   };
    // },
  },
  methods: {
    prices(toys) {
      //   const toysCopy = this.toys;
      console.log("toys:", toys);
      this.testData.labels.forEach((label) => {
        var sumPrice = toys.reduce((acc, toy) => {
          if (toy.labels.includes(label)) acc += toy.price;
          return acc;
        }, 0);
        this.testData.datasets[0].data.push(sumPrice);
        console.log(
          "this.testData.datasets[0].data:",
          this.testData.datasets[0].data
        );
      });
    },
  },
};
</script>

<style>
</style>
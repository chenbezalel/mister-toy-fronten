<template>
  <section class="toy-filter">
    <input
      type="search"
      @input="setFilter"
      v-model="filterBy.name"
      placeholder="Search toy"
    />
    <label>
      In stock:
      <select v-model="filterBy.inStock" @change="setFilter">
        <option value="">All</option>
        <option value="true">In stock</option>
        <option value="false">Not in stock</option>
      </select>
    </label>

      <select-labels :filterBy="filterBy" @setFilter="setLabels"/>
      <!-- <select @change="setFilter" multiple v-model="filterBy.labels">
        <option value="On wheels">On wheels</option>
        <option value="Box game">Box game</option>
        <option value="Art">Art</option>
        <option value="Baby">Baby</option>
        <option value="Doll">Doll</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Outdoor">Outdoor</option>
      </select> -->
      <label>
        Sort By:
        <select @change="setFilter" v-model="filterBy.sortBy">
          <option value="time">Time</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
  </section>
</template>

<script>
import selectLabels from "./select-labels.vue";
export default {
  name: "todo-filter",
  data() {
    return {
      filterBy: {
        name: "",
        labels: [],
        inStock: "",
        sortBy: "",
      },
    };
  },
  components: {
    selectLabels,
  },
  methods: {
    setLabels(labels){
      console.log(labels);
      this.filterBy.labels = labels
      this.setFilter()
    },
    setFilter() {
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
</script>

<style>
</style>
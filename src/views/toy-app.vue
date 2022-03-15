<template>
  <section class="toy-app" v-if="toys">
    <toy-filter @setFilter="setFilter" />
    <button @click="goToEdit" class="add-toy-btn">Add a new toy</button>
    <toy-list :toys="toys" @removeToy="removeToy" />
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";
import toyList from "../components/toy-list.vue";
import toyFilter from "../components/toy-filter.vue";

export default {
  name: "toy-app",
  components: {
    toyList,
    toyFilter,
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
  },
  methods: {
    removeToy(toyId) {
      this.$store.dispatch({ type: "removeToy", toyId });
    },
    setFilter(filterBy) {
      this.$store.dispatch({type: 'filter', filterBy});
    },
    goToEdit() {
      this.$router.push(`/toy/edit`);
    },
  },
};
</script>

<style>
</style>
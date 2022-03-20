<template>
  <section class="toy-app" v-if="toys">
    <toy-filter @setFilter="setFilter" />
    <router-link class="user-details" :to="'/user/' + loggedInUser._id">{{loggedInUser.username}}</router-link>
    <button v-if="loggedinUser && loggedinUser.isAdmin" @click="goToEdit" class="add-toy-btn">Add a new toy</button>
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
  data(){
    return{
      loggedinUser: this.$store.getters.user,
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    loggedInUser() {
      return this.$store.getters.user;
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
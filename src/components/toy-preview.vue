<template>
  <section class="toy-preview">
    <p class="toy-title">{{ toy.name }}</p>
    <p><span>Price:</span> ${{ toy.price }}</p>
    <p><span>In stock:</span> {{ isInStock }}</p>
      <router-link class="details-btn" :to="'/toy/' + toy._id">Details</router-link>   
      <router-link v-if="loggedinUser && loggedinUser.isAdmin" class="edit-btn" :to="'/toy/edit/' + toy._id"
        >Edit</router-link
      >
      <button v-if="loggedinUser && loggedinUser.isAdmin" class="remove-toy" @click="removeToy(toy._id)">Delete</button>
  </section>
</template>

<script>
export default {
  name: "todo-preview",
  props: {
    toy: {
      type: Object,
    },
  },
  data() {
    return {
      loggedinUser: this.$store.getters.user,
    };
  },
  computed: {
    isInStock() {
      return this.toy.inStock ? "yes" : "no";
    },
  },
  methods: {
    removeToy(toyId) {
      this.$emit("removeToy", toyId);
    },
  },
};
</script>

<style>
</style>
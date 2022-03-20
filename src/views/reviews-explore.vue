<template>
  <section class="reviews-explore" v-if="reviews">
    <h1>Reviews:</h1>
     <ul class="review-list">
      <li v-for="review in reviews" :key="review._id">
        <p>User: {{review.user.username}}</p>
        <p>Toy: {{review.toy.name}}</p>
        <p>Price: {{review.toy.price}}</p>
        <pre>Review: {{review.content}}</pre>
        <!-- <pre>{{review}}</pre> -->
      </li>
    </ul>
    <hr />
    <button @click="goBack">Go back</button>
  </section>
</template>

<script>
// import { userService } from "../services/user.service.js";

export default {
  name: "reviews-explore",
  data() {
    return {

    };
  },
  created() {
    this.$store.dispatch({type: 'loadReviews'})
  },
  methods: {
     goBack() {
      this.$router.push("/toy");
    },
  },
  computed: {
     reviews() {
      return this.$store.getters.reviews
    }, 
  },
};
</script>

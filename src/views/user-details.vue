<template>
  <section v-if="user" class="user-details">
    <article>
      <p><span>ID:</span> {{ user._id }}</p>
      <p><span>Name:</span> {{ user.fullname }}</p>
      <p><span>Username:</span> {{ user.username }}</p>
    </article>
    <hr />
    <h1>Reviews:</h1>
     <ul class="review-list">
      <li v-for="review in reviews" :key="review._id">
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
import { userService } from "../services/user.service.js";

export default {
  name: "user-detail",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const user = await userService.getById(id);
    this.user = user;
    this.$store.dispatch({type: 'loadReviews'})
  },
  methods: {
     goBack() {
      this.$router.push("/toy");
    },
  },
  computed: {
     reviews() {
      const reviews = this.$store.getters.reviews
      console.log(reviews);
      if(!reviews.length) return reviews
      else return reviews.filter(review =>
      review.user._id === this.$route.params.id)
    }, 
  },
};
</script>

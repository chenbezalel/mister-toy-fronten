<template>
  <section v-if="toy" class="toy-details">
    <article>
      <p><span>ID:</span> {{ toy._id }}</p>
      <p><span>Name:</span> {{ toy.name }}</p>
      <p><span>Price:</span> {{ toy.price }}</p>
      <p><span>Labels:</span> {{ toy.labels }}</p>
      <p><span>Created at:</span> {{ toy.createdAt }}</p>
      <p><span>In Stock:</span> {{ isInStock }}</p>
    </article>
    <hr />
    <form v-if="loggedInUser" @submit.prevent="addReview()">
      <h1>Add review:</h1>
      <textarea
        v-model="reviewToEdit.content"
        placeholder="Enter your review"
      />
      <button>Save</button>
    </form>
    <hr />
    <h1>Reviews:</h1>
     <ul class="review-list">
      <li v-for="review in reviews" :key="review._id">
        <p>user: {{review.user.username}}</p>
        <pre>review: {{review.content}}</pre>
        <!-- <pre>{{review}}</pre> -->
      </li>
    </ul>
    <hr />
    <button @click="goBack">Go back</button>
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";

export default {
  name: "toy-detail",
  data() {
    return {
      reviewToEdit: {
        content: "",
        userId: null,
        toyId: this.$route.params.id,
      },
      toy: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const toy = await toyService.getById(id);
    this.toy = toy;
    this.$store.dispatch({type: 'loadReviews'})
  },
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
     async addReview() {
      await this.$store.dispatch({type: 'addReview', review: this.reviewToEdit})
      this.reviewToEdit = {content: '', userId: null, toyId: this.$route.params.id,}
    }
  },
  computed: {
      reviews() {
      const reviews = this.$store.getters.reviews
      console.log(reviews);
      if(!reviews.length) return reviews
      else return reviews.filter(review =>
      review.toy._id === this.$route.params.id)
    },
    loggedInUser() {
      return this.$store.getters.user;
    },
    isInStock() {
      return this.toy.inStock ? "yes" : "no";
    },
  },
};
</script>

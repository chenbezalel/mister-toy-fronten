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
    <button @click="goBack">Go back</button>
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";

export default {
  name: "toy-detail",
  data() {
    return {
      toy: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const toy = await toyService.getById(id);
    this.toy = toy;
  },
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
  },
  computed: {
    isInStock() {
      return this.toy.inStock ? "yes" : "no";
    },
  },
};
</script>

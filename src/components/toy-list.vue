<template>
  <section class="toy-list">
    <ul>
      <li v-for="toy in toys" :key="toy._id">
        <toy-preview :toy="toy" @removeToy="removeToy" />
      </li>
    </ul>
  </section>
</template>

<script>
import toyPreview from "./toy-preview.vue";
export default {
  name: "todo-list",
  props: {
    toys: {
      type: Array,
      required: true,
    },
  },
  components: {
    toyPreview,
  },
  methods: {
        removeToy(toyId){
            this.$emit("removeToy", toyId)
        }
    },
};
</script>

<style>
</style>
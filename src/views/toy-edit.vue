<template>
  <section v-if="toyToEdit" class="toy-edit">
    <h3>Edit Toy:</h3>
    <form @submit.prevent="saveToy">
      <label>
        Toy:
        <input type="text" placeholder="Toy name" v-model="toyToEdit.name" />
      </label>
      <label>
        Price:
        <input
          class="price-input"
          type="number"
          min="0"
          placeholder="Price"
          v-model="toyToEdit.price"
        />
      </label>
      <label>
        In stock:
        <input type="checkbox" v-model="toyToEdit.inStock" />
      </label>
      <!-- <label>
        In stock:
        <input
          type="text"
          placeholder="In stock"
          list="in-stock"
          v-model="toyToEdit.inStock"
        />
      </label>
      <datalist id="in-stock">
        <option value=true></option>
        <option value=false></option>
      </datalist> -->
      <button>Save</button>
    </form>
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";

export default {
  name: "toy-edit",
  data() {
    return {
      toyToEdit: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    if (id) {
      const toy = await this.$store.dispatch({ type: "getById", id: this.$route.params.id })
        this.toyToEdit = toy;
    } else {
      this.toyToEdit = toyService.getEmptyToy();
    }
  },
  methods: {
    goBack() {
      this.$router.push("/toy");
    },
    async saveToy() {
      await this.$store.dispatch({
        type: "saveToy",
        toyToSave: this.toyToEdit,
      });
      this.$router.push("/toy");
    },
  },
};
</script>

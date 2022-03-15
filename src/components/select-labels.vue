<template>
  <div style="display: inline-block; margin-left: 20px">
    <!-- <p style="margin-left: 10px">use collapse-tags</p> -->
    <el-select
      @change="setFilter"
      v-model="filterBy.labels"
      multiple
      collapse-tags
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script>
export default{
    props: {
    filterBy: {
      type: Object,
    },
  },
    data(){
        return {
            options: [
              {
                value: 'On wheels',
                label: 'On wheels',
              },
              {
                value: 'Box game',
                label: 'Box game',
              },
              {
                value: 'Art',
                label: 'Art',
              },
              {
                value: 'Baby',
                label: 'Baby',
              },
              {
                value: 'Doll',
                label: 'Doll',
              },
              {
                value: 'Puzzle',
                label: 'Puzzle',
              },
              {
                value: 'Outdoor',
                label: 'Outdoor',
              },
            ]
        }
    },
    methods: {
    setFilter() {
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy.labels)));
    },
  },
}

</script>
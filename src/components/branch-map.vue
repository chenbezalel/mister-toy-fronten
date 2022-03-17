<template>
  <section class="branch-map">
    <GMapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 500px; height: 900px"
    >
     <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          @click="center=m.position"
      />
    </GMapCluster>
    </GMapMap>
  </section>
  <el-button v-for="loc in locs" :key="loc.name"
  size="large"
    :clickable="true"
    @click="loc.func(loc.pos)"
    :icon="Search"
    round>{{loc.name}}
  </el-button>
</template>

<script>
export default {
  name: "branch-map",

  data() {
    return {
      center: { lat: 32.088179, lng: 34.790144 },
      locs: [
        {
          name: "Tel Aviv",
          func: this.updateLoc,
          pos: { lat: 32.088179, lng: 34.790144 },
        },
        {
          name: "Ramat Gan",
          func: this.updateLoc,
          pos: { lat: 32.066278, lng: 34.830301 },
        },
        {
          name: "Petach Tikva",
          func: this.updateLoc,
          pos: { lat: 32.093869, lng: 34.882401 },
        },
      ],
      markers: [
        {
          position: {
            lat: 32.088179,
            lng: 34.790144,
          },
        }, // Along list of clusters
        {
          position: {
            lat: 32.066278,
            lng: 34.830301,
          },
        }, // Along list of clusters
        {
          position: {
            lat: 32.093869,
            lng: 34.882401,
          },
        }, // Along list of clusters
      ],
    };
  },
  methods: {
     updateLoc({lat, lng}) {
      console.log(lat, lng);
      this.center = {lat: lat, lng: lng}
    },
  },
};
</script>

<style>
.vue-map-container {
  height: 700px;
  width: 70vw;
}
</style>
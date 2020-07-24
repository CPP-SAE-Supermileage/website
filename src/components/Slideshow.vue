<template>
  <div>
    <v-carousel
      cycle
      height="30em"
      progress
      show-arrows-on-hover>
        <v-carousel-item
          v-for="(img, i) in imgs"
          :key="i"
          :src="img">
        </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "Slideshow",
  props: {
    imgs: {
      type: Array,
    },
    delay: {
      type: Number,
      default: 4000,
    }
  },

  data() {
    return {
      
    };
  },

  methods: {
  },
  computed: {
  }
};
</script>
<style>
</style>
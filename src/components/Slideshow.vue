<template>
  <div>
    <v-carousel
      cycle
      height="100%"
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
    // imgs: {
    //   type: Array,
    // },
    delay: {
      type: Number,
      default: 4000,
    }
  },

  data() {
    return {
      imgs:[]
    };
  },
  mounted() {
    this.importAll(require.context('@/assets/slideshow/', true, /\.(jpg|png|svg)$/))
  },

  methods: {
    importAll(r) {
      r.keys().forEach(key =>(this.imgs.push({ src: r(key), pathShort: key })));
    }
  },
  computed: {
  }
};
</script>
<style>
</style>
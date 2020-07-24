<template>
  <v-parallax
  :src="require(imgSrc)"
  height: this.height>
    <v-row
      v-if="headerTxt||txt"
      align="center"
      justify="center">
        <v-col class="text-center" cols="12">
          <h2 v-if="headerTxt">{{headerTxt}}</h2>
          <p v-if="txt">{{txt}}</p>
        </v-col>
    </v-row>
  </v-parallax>
</template>
<script>
export default {
  name: "Image",
  props: {
    imgSrc: String,
    headerTxt: String,
    txt: String,
  },
};
</script>
<style scoped>

</style>
<template>
  <!-- height is optional and defaults to 500-->
  
  <v-parallax :src="require('@/assets/parallax/' + imgSrc)" :height="displayHeight">
	<v-row v-if="headerTxt||txt" align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 v-if="headerTxt"><mark>{{headerTxt}}</mark></h2>
          <p v-if="txt"><mark>{{txt}}</mark></p>
        </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
	export default 
	{
		name: "ImageDisplayer",
		props: 
		{	
			imgSrc:        String,
			displayHeight: Number,
			headerTxt:     String,
			txt:           String,
		},
	};
</script>

<style scoped>
mark
{
    background-color: rgba(138, 136, 132, 0.8);
    color: white;
}

</style>
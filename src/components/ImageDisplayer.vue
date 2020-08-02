<template>
  <!-- height is optional and defaults to 500-->
  
  <v-parallax :src="imgSrc" :height="displayHeight">
	<v-row v-if="headerTxt||txt" align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 v-if="headerTxt">{{headerTxt}}</h2>
          <p v-if="txt">{{txt}}</p>
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
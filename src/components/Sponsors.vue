<template>
  <v-container class="text-center">
    <v-row v-for="(row, i) in sponsorList" :key="i">
      <v-col v-for="sponsor in row" :key="sponsor.name">
        <a :href="sponsor.link" target="_blank">
          <img v-if="sponsor.img" :src="sponsor.src" :alt="sponsor.name+' logo'"/>
          <p v-else>{{sponsor.name}}</p>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import json from '@/assets/sponsors/sponsors.json'

	export default 
	{
		data(){
      return{
      }
    },
    computed: {
      sponsorList: function(){
        json.forEach((row)=>{
          row.forEach((sponsor)=>{
            if(sponsor.img)
              sponsor.src = require("@/assets/sponsors/"+sponsor.img);
          })
        });
        return json;
      }
    }
	};
</script>
<style scoped>
img{
  height: 5em;
}
</style>
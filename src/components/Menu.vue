<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="CPP Logo"
          class="shrink mr-2 logo"
          contain
          :src="require('@/assets/logo.png')"
        />

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://cpp.thankyou4caring.org/pages/studentclub"
        target="_blank"
        text
      >
        <span class="mr-2">About</span>
        
      </v-btn>

      <v-btn
        href="https://cpp.thankyou4caring.org/pages/studentclub"
        target="_blank"
        text
      >
        <span class="mr-2">Competitions</span>
        
      </v-btn>


      <v-btn
        href="https://cpp.thankyou4caring.org/pages/studentclub"
        target="_blank"
        text
      >
        <span class="mr-2">Donate</span>
        
      </v-btn>
       <v-btn
        href="https://cpp.thankyou4caring.org/pages/studentclub"
        target="_blank"
        text
      >
        <span class="mr-2">Contact</span>
        
      </v-btn>
    </v-app-bar>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
    };
  },
};
</script>
<style>
.logo{
  width: 13em;
}
</style>
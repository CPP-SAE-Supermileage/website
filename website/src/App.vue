<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="data:image/jpeg;base64,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"
          transition="scale-transition"
          width="40"
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

    <v-content>
      
      <HelloWorld/>

      <sure/>

     

    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import sure from './components/sure';

export default {
  name: 'App',

  components: {
    HelloWorld,
    sure,

  },

  data: () => ({
    //
  }),
};
</script>

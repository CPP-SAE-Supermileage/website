<template>

  <v-container>
    
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          ABOUT
        </h1>

        <p class="subheading font-weight-regular">
          The California Polytechnic University, Pomona SAE Supermileage club has two teams, engineering and computer science.
          <br>The engineering team maintains and helps with the designs of the car, cfd, engineering reports for competition.
          <br>The computer science team works on the hardware for the autonomous systems, machine learning for navigation, and computer vision.
          <br>New members are always welcome.
          <br>
          <v-btn
        href="https://cpp.thankyou4caring.org/pages/studentclub"
        target="_blank"
        text
      >
        <span class="mr-2">Engineering</span>
        
      </v-btn>
      <v-btn
        href="https://cpp.thankyou4caring.org/pages/studentclub"
        target="_blank"
        text
      >
        <span class="mr-2">Computer Science</span>
        
      </v-btn>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Competitions
          <p class="subheading font-weight-regular">
            We compete in various autonomous and piloted competitiions including the 
             <a
            href="https://www.makethefuture.shell/en-gb/shell-eco-marathon"
            target="_blank"
          >Shell Eco Marathon</a>
          </p>
        </h2>

        
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Donate
        </h2>
            <p class="subheading font-weight-regular">
             <a
            href="https://cpp.thankyou4caring.org/pages/studentclub"
            target="_blank"
          >pls give money</a>
          </p>
        
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Contact
        </h2>

     

        
      </v-col>
    </v-row>
  </v-container>
</template>
<template>
  <v-container class="text-center">
    <h2>
      Contact
    </h2>
    <div class="d-flex justify-content-center">
      <div class='clickme'>
        <a href="https://www.instagram.com/cppsupermileage/" target="_blank">
          <v-img alt="Instagram Logo" height='100' width='100' contain :src="require('@/assets/insta.png')" /></a>
      </div>
      <div class='clickme'>
        <a href="https://mybar.cpp.edu/organization/saesupermileage/" target="_blank">
          <v-img alt="myBar Logo" height='100' width='100' contain :src="require('@/assets/bar.jpg')" /></a>
      </div>
    </div>
  </v-container>
</template>
<style>
 .clickme{
   margin: 1em;
 }
</style>
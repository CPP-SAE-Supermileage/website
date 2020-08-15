<template>
  <v-container class="text-center">
    <h2>
      Contact
    </h2>
    
    <p>View us on myBAR, Instagram, or join our Discord!</p>
    <v-btn @click="showForm">Apply Now!</v-btn>
    <div class="d-flex justify-content-center">
      <div class='clickme'>
        <a href="https://www.instagram.com/cppsupermileage/" target="_blank">
          <v-img alt="Instagram Logo" height='100' width='100' contain :src="require('@/assets/insta.png')" /></a>
      </div>
      <div class='clickme'>
        <a href="https://mybar.cpp.edu/organization/saesupermileage/" target="_blank">
          <v-img alt="myBar Logo" height='100' width='100' contain :src="require('@/assets/bar.jpg')" /></a>
      </div>
      <div class='clickme'>
        <a href="https://discord.gg/HqD4tM5" target="_blank">
          <v-img alt="Discord Logo" height='100' width='100' contain :src="require('@/assets/discord.png')" /></a>
      </div>
    </div>
    
  </v-container>
</template>

<script>
export default
{
    methods:
    {
        showForm()
        {
            document.getElementById('idContactForm').style.display = 'block';
            window.scrollTo({left: 0, top: document.body.scrollHeight || document.documentElement.scrollHeight, behavior: 'smooth'})
        },
    },
}

</script>

<style>
 .clickme{
   margin: 1em;
 }
</style>
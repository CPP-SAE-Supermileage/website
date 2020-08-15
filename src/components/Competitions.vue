<template>
  <v-container class="text-center" style="height:45vh;">
    <h2>Competitions</h2>
    <ul id = "competition-list">
      <li @click="autonomousClicked" :style="{ fontWeight: autoFont}">
        Autonomous
      </li>
      <li @click="onTrackClicked" :style="{ fontWeight: onTrackFont}">
         On-Track
      </li>
      <li @click="offTrackClicked" :style="{ fontWeight: offTrackFont}">
        Off-Track
      </li>
    </ul>


    <p class="text-left ">{{ content }}</p>


    <p class="subheading font-weight-regular">
        <a
      href="https://www.makethefuture.shell/en-gb/shell-eco-marathon"
      target="_blank"
    >Shell Eco Marathon</a>
    </p>
  </v-container>
</template>
<script>
export default 
{   
    name: "Competition",
    data: () =>
    ({
      // this is just the styling of the selected text, 
      // to highlight the selected competition, default will be 'autonomous'.
      autoFont: 'bold',
      onTrackFont: 'normal',  
      offTrackFont: 'normal', 

      // This is the default content, if you want to change this content, 
      // make sure to change the content in 'autonomousClicked' method as well.
      content: 'With the new Autonomous Competition in development at Shell Eco-marathon, we are expanding our software team to implement autonomous technology into our vehicle and take it to the next level. This competition is designed to test the vehicle capability of avoiding obstacles and get through a series of challenges. There are two main challenges in this competition, the test-track challenge and the parking challenge. On the test-track, the vehicle have to show good performance in accelerate, decelerate, and maneuver to avoid obstacle as well as taking turn. The parking challenge requires the vehicle to have precise estimates and calculations of its surrounding to maneuver and position itself into small space.',
    }),
    methods:
    {
        // the content will get update as the user select each area of competition
        autonomousClicked()
        {
          this.content = 'With the new Autonomous Competition in development at Shell Eco-marathon, we are expanding our software team to implement autonomous technology into our vehicle and take it to the next level. This competition is designed to test the vehicle capability of avoiding obstacles and get through a series of challenges. There are two main challenges in this competition, the test-track challenge and the parking challenge. On the test-track, the vehicle have to show good performance in accelerate, decelerate, and maneuver to avoid obstacle as well as taking turn. The parking challenge requires the vehicle to have precise estimates and calculations of its surrounding to maneuver and position itself into small space.';
          this.autoFont = 'bold';
          this.onTrackFont = "normal";      
          this.offTrackFont = 'normal';
        },
        onTrackClicked()
        {
          this.content = 'The Shell Eco-marathon On-Track Competition is based on the concept of longest-running format, which simple focus on the energy efficuency aspect of the vehicle. Teams will be given a fixed number of laps on the track to drive their vehicle. After each lab, the judges will caculate their energy efficiency and detemine the result. There are two energy category in this competition, internal combustion engine and electric vehicle. Our car is running on an electric battery because we believe sustainable energy will be needed for the environment. We are looking to compete this season with our prototype which designed to cut out some basic car needs and challenge the boundaries in energy efficiency. However, we are also looking to design a vehicle that is capable of city driving which will include basic need such as passenger space, mirror, wheels,etc., in the near future.';
          this.onTrackFont = "bold";
          this.autoFont = 'normal';
          this.offTrackFont = 'normal';
        },
        offTrackClicked()
        {
          this.content = 'The Shell Eco-marathon Off-Track Competition is designed to cover a wider aspect of development that asks participant to consider real-world requirements. This award will be consider based on the team achievement off the track.';
          this.offTrackFont = 'bold';
          this.autoFont = 'normal';
          this.onTrackFont = "normal"; 
        },
    },
}    
</script>

<style>
  ul{
    list-style: none;
  }
  #competition-list li{
    cursor: pointer;
    display: inline-flex;
    margin-left: 1em;
    margin-right: 1em;
  }
</style>
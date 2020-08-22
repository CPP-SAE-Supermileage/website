<template>
  <v-container class="text-center" style="height:45vh;">
    <h2>Competitions</h2>
    <v-tabs
      v-model="tab"
      grow>
      <v-tab
        v-for="comp in competitions"
        :key="comp.index">
        {{comp.type}}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="comp in competitions"
        :key="comp.index">
          <v-card flat>

          <v-card-text class="text-center ">{{ comp.content }}</v-card-text>
          </v-card>
      </v-tab-item>
    </v-tabs-items>
      <v-btn
      href="https://www.makethefuture.shell/en-gb/shell-eco-marathon"
      target="_blank"
    >Shell Eco Marathon</v-btn>
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

      tab: null,
      competitions: [
        {
          index: 1,
          type: 'On-track',
          content: 'The Shell Eco-marathon On-Track Competition is based on the longest-running format, which simply focuses on the energy efficiency aspect of the vehicle. Teams will be given a fixed number of laps on the track to drive their vehicle. After each lab, the judges will caculate their energy efficiency and detemine the result. There are various categories in this competition, based on design type and energy source. Our car falls into the prototype eletric category as it uses a non-convential chasis and is powered by a battery pack.'

        },
        {
          index: 2,
          type: 'Off-track',
          content: 'The Shell Eco-marathon Off-Track Competition is designed to cover a wider aspect of development and asks participants to consider real-world requirements. This is a primarily engineering and design based competition, with industry professionals judging our design and design process, as well as theoretical results from our car.'

        },
        {
          index: 3,
          type: 'Autonomous',
          content: 'With the new Autonomous Competition in development at Shell Eco-marathon, we are expanding our software team to implement autonomous technology into our vehicle and take it to the next level. This competition is designed to test how well our vehicle, as well as a simulated urban car can avoid obstacles and get through a series of challenges. These competitions are primarily software/hardware based as we must write the code from scratch, and in the case of the On-track compeition, wire and manage our car\'s sensors.'
        }
      ]

      // This is the default content, if you want to change this content, 
      // make sure to change the content in 'autonomousClicked' method as well.
    }),
    methods:
    {
        // the content will get update as the user select each area of competition
        autonomousClicked()
        {
          this.content = '';
          this.autoFont = 'bold';
          this.onTrackFont = "normal";      
          this.offTrackFont = 'normal';
        },
        onTrackClicked()
        {
          this.content = '';
          this.onTrackFont = "bold";
          this.autoFont = 'normal';
          this.offTrackFont = 'normal';
        },
        offTrackClicked()
        {
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
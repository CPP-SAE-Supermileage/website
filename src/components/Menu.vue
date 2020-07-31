<template>
<v-card>

<v-app-bar  ref="appBarRef"  app  color="primary"  dark>
    <div>
        <v-img  alt="CPP Logo"  class="shrink mr-2 logo"  contain  :src="require('@/assets/logo.png')"/>
    </div>

    <v-spacer></v-spacer>

    <div v-if="displayHamburger">
        <v-app-bar-nav-icon  @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
    </div>

    <div v-else> 
        <v-btn  @click="jumpToElement('idAbout')"  text>
            <span>About</span>     
        </v-btn>

        <v-btn  @click="jumpToElement('idCompetitions')"  text>
            <span>Competitions</span>       
        </v-btn>
        
        <v-btn  @click="jumpToElement('idSponsors')"  text>
            <span>Sponsors</span>       
        </v-btn>

        <v-btn  @click="jumpToElement('idDonate')"  text>
            <span>Donate</span>
        </v-btn>
      
        <v-btn  @click="jumpToElement('idContact')"  text>
            <span>Contact</span>  
        </v-btn>
    </div>     
</v-app-bar>

<v-navigation-drawer  v-model="drawer"  v-if="displayHamburger"  color="primary"  width="160"  app  right  temporary  dark>
        <br><br>
        <v-btn  @click="jumpToElement('idAbout')"  text>
            <span>About</span>       
        </v-btn>
        <br><br>
        
        <v-btn  @click="jumpToElement('idCompetitions')"  text>
            <span>Competitions</span>       
        </v-btn>
        <br><br>
        
        <v-btn  @click="jumpToElement('idSponsors')"  text>
            <span>Sponsors</span>       
        </v-btn>
        <br><br>
        
        <v-btn  @click="jumpToElement('idDonate')"  text>
            <span>Donate</span>
        </v-btn>
        <br><br>
        
        <v-btn  @click="jumpToElement('idContact')"  text>
            <span>Contact</span>  
        </v-btn>
</v-navigation-drawer>
</v-card>
</template>

<script>
export default 
{
    name: "Menu",
    data: () =>
    ({
        displayHamburger: false,
        drawer: false,
    }),
  
    methods:
    {
        checkBarWidth()
        {
            this.displayHamburger = window.innerWidth < 800;
        },
        
        jumpToElement(idTarget)
        {
           // document.getElementById(idTarget).scrollIntoView() has issues with an offset scroll. The "-55" corrects this.
           // This -55 may or may not need to be further tweaked after future changes.
           const y = document.getElementById(idTarget).getBoundingClientRect().top + window.pageYOffset - 55;
           
           // Note: smooth scroll currently doesn't seem to work on mobile (it still scrolls, just not smoothly).
           // Not really an issue, but would be cool if someone knew how to make it work.
           window.scrollTo({top: y, behavior: 'smooth'});
           if(this.drawer)
                this.drawer = false;
        },
    },
  
    mounted()
    {
        window.addEventListener('resize', this.checkBarWidth);
        this.checkBarWidth();
    },
    
    beforeDestroy()
    {
        window.removeEventListener('resize', this.checkBarWidth);
    },
};
</script>

<style>
    .logo{width: 13em;}
</style>
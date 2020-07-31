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
        <v-btn  href="https://cpp.thankyou4caring.org/pages/studentclub"  target="_blank" text>
            <span>About</span>     
        </v-btn>

        <v-btn  href="https://cpp.thankyou4caring.org/pages/studentclub"  target="_blank"  text>
            <span>Competitions</span>       
        </v-btn>

        <v-btn  href="https://cpp.thankyou4caring.org/pages/studentclub"  target="_blank"  text>
            <span>Donate</span>
        </v-btn>
      
        <v-btn  href="https://cpp.thankyou4caring.org/pages/studentclub"  target="_blank"  text>
            <span>Contact</span>  
        </v-btn>
    </div>     
</v-app-bar>

<v-navigation-drawer  v-model="drawer"  v-if="displayHamburger"  color="primary"  width="160"  app  right  temporary  dark>
        <br><br>
        <v-btn  href="https://cpp.thankyou4caring.org/pages/studentclub"  target="_blank"  text>
            <span>About</span>       
        </v-btn>
        <br><br>
        
        <v-btn  href="https://cpp.thankyou4caring.org/pages/studentclub"  target="_blank"  text>
            <span>Competitions</span>       
        </v-btn>
        <br><br>
        
        <v-btn  href="https://cpp.thankyou4caring.org/pages/studentclub"  target="_blank"  text>
            <span>Donate</span>
        </v-btn>
        <br><br>
        
        <v-btn  href="https://cpp.thankyou4caring.org/pages/studentclub"  target="_blank"  text>
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
        }
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
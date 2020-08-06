<template>
<!-- DO NOT ADD NEW MENU BUTTONS HERE.                                                              -->
<!-- Please see ./subcomponents/MenuButtons.vue for adding new buttons                              -->
<!-- After ADDING a new button, you must adjust the conditional on line 50 by adding to the number  -->
<!-- This will make the menu buttons collapse at a larger screen width, to account for the space    -->
<!--    required by the new button                                                                  -->

<div>

<v-app-bar  ref="appBarRef"  app  color="primary"  dark>
    <div>
        <v-img  alt="CPP Logo"  class="shrink mr-2 logo"  contain  :src="require('@/assets/logo.png')"/>
    </div>

    <v-spacer></v-spacer>

    <div v-if="displayHamburger">
        <v-app-bar-nav-icon  @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
    </div>

    <div id="ignoreMenuButtonBreaks" v-else> 
        <MenuButtons/>
    </div>     
</v-app-bar>

<v-navigation-drawer  v-model="drawer"  v-if="displayHamburger"  color="primary"  width="160"  app  right  temporary  dark>
    <MenuButtons/>
</v-navigation-drawer>

</div>
</template>

<script>
import MenuButtons from './subcomponents/MenuButtons';
export default 
{   
    name: "Menu",
    data: () =>
    ({
        displayHamburger: false,
        drawer: false,
    }),
    
    components:
    {
        MenuButtons,
    },
  
    methods:
    {
        checkBarWidth()
        {
            this.displayHamburger = window.innerWidth < 950;
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
    #ignoreMenuButtonBreaks br {display: none;}
</style>
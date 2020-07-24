<template>
  <v-app>
    <Menu/>
    <v-main>
      
      <Slideshow :imgs="slideImgs"/>
  
      <About/>
      <Image :imgSrc="'@/assets/CarRendering.png'"/>
      <Competitions/>
      <Donate/>
      <Contact/>

    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
import Slideshow from './components/Slideshow';
import About from'./components/About';
import Competitions from './components/Competitions';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Image from './components/Image';

export default {
  name: 'App',

  components: {
    Menu,
    Slideshow,
    About,
    Competitions,
    Donate,
    Contact,
    Image,
  },

  data: () => ({
    slideImgs:[
      require('@/assets/logo.png'),
      require('@/assets/CarRendering.png')
    ]
  }),
};
</script>

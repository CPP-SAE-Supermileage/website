<template>
  <v-app>
    <Menu/>
    <v-main> 
      <Slideshow :imgs="[logo, carRender, window, profile, fiberGlass]"/> 
      <About/>
      <ImageDisplayer :imgSrc="profile" :displayHeight="300" headerTxt="Header Text" txt="Other Text"/>
      <br>
      <ImageDisplayer :imgSrc="window" headerTxt="No displayHeight set" txt="Defaults to 500"/>
      <Competitions/>
      <Donate/>
      <Contact/>
    </v-main>
  </v-app>
</template>

<script>
	import Menu           from './components/Menu';
	import Slideshow      from './components/Slideshow';
	import About          from './components/About';
	import Competitions   from './components/Competitions';
	import Donate         from './components/Donate';
	import Contact        from './components/Contact';
	import ImageDisplayer from './components/ImageDisplayer';

	export default 
	{
		name: 'App',

		components: 
		{
			Menu,
			Slideshow,
			About,
			Competitions,
			Donate,
			Contact,
			ImageDisplayer,
		},

		data: () => 
		({
			carRender:       require('@/assets/CarRendering.png'),
			fiberGlass:      require('@/assets/Fiberglass.png'),
			fiberGlassTwo:   require('@/assets/Fiberglass2.png'),
			logo:            require('@/assets/logo.png'),
			profile:         require('@/assets/Profile.png'),
			window:          require('@/assets/Window.png'),
		}),
	};
</script>
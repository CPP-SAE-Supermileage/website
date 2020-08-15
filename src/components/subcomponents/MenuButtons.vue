<template>
<!-- ONLY FOR USE IN Menu.vue                                           -->
<!-- Add new buttons to the menu here.                                  -->
<!-- Please add 2 br tags after each new button                         -->
<!-- Make sure an element in App.vue has an Id the button can scroll to -->

<div>
    <br><br>
    <MenuButton buttonText="About"        targetId="idAbout"/>       <br><br>
    <MenuButton buttonText="Competitions" targetId="idCompetitions"/><br><br>
    <MenuButton buttonText="Members"      targetId="idMembers"/>     <br><br>
    <MenuButton buttonText="Sponsors"     targetId="idSponsors"/>    <br><br>
    <MenuButton buttonText="Donate"       targetId="idDonate"/>      <br><br>
    <MenuButton buttonText="Contact"      targetId="idContactForm"/>     <br><br>
</div>
</template>

<script>
    import MenuButton from './MenuButton';
    export default
    {
        name: "MenuButtons",
        components:
        {
            MenuButton,
        },
    };
</script>
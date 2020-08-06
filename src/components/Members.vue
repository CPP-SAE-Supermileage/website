<template>
<!-- This is where you add new Member Cards for the "Active Members" section -->
<!-- MemberCard has the following input parameters:
    1. name      - REQUIRED - Your first name and last name, separated by exactly one space. (i.e. 'John Smith' )
    2. roles     - REQUIRED - A very brief statement of your roles in the club. (i.e. 'Software Team Member' )
    3. email     - OPTIONAL - Your email address (i.e. 'johnsmith123@gmail.com' )
    4. discord   - OPTIONAL - Your Discord username (i.e. 'johnsmith#1234' )
    5. github    - OPTIONAL - Your Github username (i.e. 'John-Smith' )
    6. imageName - OPTIONAL - The filename w/ extension for a picture of yourself. (i.e. 'JohnSmith.png')
        PLEASE PLACE THIS IMAGE IN /assets/members -->

<v-container>
    <h2>Active Members</h2>
    <v-row justify="center">
    <MemberCard name="Daniel Milligan" roles="Software Team and Website Developer" email="ddmilligan@cpp.edu" github="The-Mills"/>
    <MemberCard name="John Smith" roles="Supreme Overlord" email="johnsmith1234@gmail.com" discord="johnsmith#1234"
        github="404" imageName="Example.png"/>
    
    
    <!-- DO NOT ADD MemberCards OUTSIDE OF THIS V-ROW -->
    </v-row>
</v-container>
</template>

<script>
    import MemberCard from './subcomponents/MemberCard';

    export default
    {
        name: "Members",
        
        components:
        {
            MemberCard,
        },
    };
</script>
<style >
</style>
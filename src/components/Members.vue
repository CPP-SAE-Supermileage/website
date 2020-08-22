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
        <MemberCard name="Maximum Wilder-Smith" roles="President and Software Lead" email="mwildersmith@cpp.edu" 
          github="maxwildersmith" />

        <MemberCard name="Damian Ugalde" roles="Engineering Lead" email="dpugalde@cpp.edu" 
          github="DamianPilot382" />

        <MemberCard name="Dakota Eckheart" roles="Treasurer and Software Team Member" email="deckheart@cpp.edu" 
          discord="dakota#7191" github="deckheart"/>
          
        <MemberCard name="Steven Chan" roles="Software Team Member" email="sychan@cpp.edu"
          discord="Banana#4408" github="FeelsBadnana" />

        <MemberCard name="Bao Nguyen" roles="Software Team and Website Developer" email="bvnguyen1@cpp.edu"
          github="bvnguyen1" />

        <MemberCard name="Kyo Kondo Nguyen" roles="Software Team and Website Developer" email="kjkondo@cpp.edu"
          github="kjkondo" />
          
        <MemberCard name="Daniel Milligan" roles="Software Team and Website Developer" email="ddmilligan@cpp.edu" 
          github="The-Mills"/>
              
        <!-- DO NOT ADD MemberCards OUTSIDE OF THIS V-ROW -->
    </v-row>
    
    <h2>Advisors</h2>
    <v-row justify="center">
        <MemberCard name="Dr. Castro" roles="Faculty Advisor"/>
        <MemberCard name="Arda Buyuksan" roles="Founder, President (2018-2019), and Alumni Advisor"/>
    </v-row>
    
    
    <h2>Alumni and Former Members</h2>
    <p>
        Josue Castaneda - President (2019-2020)<br>
        Matthew Caballero - Vice President (2019-2020))<br>
        Peter Kyunghoon Lee - Treasurer (2019-2020)<br>
        Matthew Bell<br>
        Alejandro Robles<br>
        Kate Ly<br>
        Jiangzheng Pan<br>
        Stuart Geyer - Honorary Member<br>
    </p>
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
<template>
<!-- ONLY FOR USE IN MenuButtons.vue                                           -->
<!-- If you need to add a new menu button, edit MenuButtons.vue, not this file -->

    <v-btn  @click="jumpToElement(targetId)"  text>
        <span>{{buttonText}}</span>       
    </v-btn>
</template>
<script>
    export default
    {
        name: "MenuButton",
        props:
        {
            buttonText:   String,
            targetId:     String,
        },
        
        methods:
        {
            jumpToElement(idTarget)
            {
                if(idTarget === 'idContactForm');
                { document.getElementById('idContactForm').style.display = 'block';} 
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
    };
</script>
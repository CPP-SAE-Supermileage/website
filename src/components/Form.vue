<template>
<form @submit.prevent="submit">
    <v-icon style="margin-left: 90%" @click="hideForm">mdi-close-box</v-icon>
	<ul>
	<li>
	<v-text-field 
        v-model="name"
        :error-messages="nameErrors"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
	</li>
    <li>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
    </li>
    <li>
      <v-text-field
        v-model="major"
        :error-messages="majorErrors"
        label="Major"
        required
        @input="$v.major.$touch()"
        @blur="$v.major.$touch()"
      ></v-text-field>
    </li>
    <li>
      <v-text-field
        v-model="gradTerm"
        :error-messages="termErrors"
        label="Graduation Term"
        required
        @input="$v.gradTerm.$touch()"
        @blur="$v.gradTerm.$touch()"
      ></v-text-field>
    </li>
    
    <v-row>
    <h6 style="margin-left:1em; margin-top:1em; color:#686868;">Areas of interest: </h6>
    </v-row>

    <v-row>
    <v-col cols="12"  sm="6">
        <v-row>
        <h6 style="margin-left:1em; color:#686868;">Computer Science</h6>
        </v-row>
    <v-checkbox style="margin:0;"
        label="ML/CV"
        hide-details
    ></v-checkbox>
    <v-checkbox
        label="CoppoliaSIM"
        hide-details
    ></v-checkbox>
    <v-checkbox
        label="Hardware"
        hide-details
    ></v-checkbox>
    </v-col>
    <v-col cols="12"  sm="6">
    <v-row>
        <h6 style="margin-left:1em; color:#686868;">Engineering</h6>
        </v-row>
    <v-checkbox style="margin:0;"
        label="CFD"
        hide-details
    ></v-checkbox>
    <v-checkbox
        label="Design"
        hide-details
    ></v-checkbox>
    <v-checkbox
        label="Electrical"
        hide-details
    ></v-checkbox>
    </v-col>
    </v-row>

    <v-textarea
    outlined
        name="experienceText"
        label="Areas of experience (optional)"
        ></v-textarea>

        <v-btn class="mr-4" @click="submit">Submit</v-btn>
        <v-btn class="mr-4" @click="clear">Clear</v-btn>
        <p id = "submit-error">{{ submitMessage }}</p>
    </ul>

</form>
</template>



<script>
const { validationMixin } = require('vuelidate')
const { required, email } = require('vuelidate/lib/validators')






export default 
{
    name: "",
    mixins: [validationMixin],
   

    data: () =>
    ({
        name: '',
        email: '',
        major: '',
        gradTerm: '',
        validName: false,
        submitMessage: null,
    }),


    validations: {
        name: { 
            required, 
        },
        email: { 
            required, 
            email 
        },
        major: { 
            required 
        },
        gradTerm: {
            required
        },
    },

    computed: {
        nameErrors () {
          const errors = []
          if (!this.$v.name.$dirty)
            return errors
          !this.$v.name.required && errors.push('Name is required.') 
          return errors
        },  
        emailErrors () {
          const errors = []
          if (!this.$v.email.$dirty) 
            return errors
          !this.$v.email.email && errors.push('Must be valid e-mail')
          !this.$v.email.required && errors.push('E-mail is required')
          return errors
        },
        majorErrors () {
          const errors = []
          if (!this.$v.major.$dirty) 
            return errors
          !this.$v.major.required && errors.push('Major is required.')
          return errors
        }, 
        termErrors () {
          const errors = []
          if (!this.$v.gradTerm.$dirty) 
            return errors
          !this.$v.gradTerm.required && errors.push('Graduation term is required.')
          return errors
        },
    },

    methods: {
        submit() {
            console.log('submit clicked')
            this.$v.$touch()
            if (this.$v.$invalid) {
               this.submitMessage = "*Please fill out the form correctly."
            } else{
               this.submitMessage = null;
            }
         },
         clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.major = ''
            this.gradTerm = ''
            this.submitMessage = null;
        },
        
        hideForm()
        {
            document.getElementById('idContactForm').style.display = 'none';
        },
    }


 }
</script>


<style>
li{
	height:65px;
	list-style:none;
}
ul{
    padding:0;
    margin:0;
}
.v-text-field{
    position: absolute;
    width:90%;
}
#submit-error{
    height:1.5em; 
    padding-top:0.3em;
    font-size:0.9em;
    color: red;
}
</style>  
   

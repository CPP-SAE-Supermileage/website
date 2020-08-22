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
        name="name"
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
        name="email"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
    </li>
    <li>
      <v-text-field
        v-model="major"
        label="Major"
        name="major"
      ></v-text-field>
    </li>
    <li>
      <v-text-field
        v-model="gradTerm"
        label="Graduation Term"
        no-resize
        name="gradTerm"
      ></v-text-field>
    </li>
    
  <li>
    <v-textarea
        outlined
        v-model="message"
        name="message"
        label="Message"
        required
    ></v-textarea>
  </li>
  <br>
  <br>
  <br>
  <br>
  <li>
        <v-btn type="submit" class="mr-4" @click="submit">Submit</v-btn>
        <v-btn class="mr-4" @click="clear">Clear</v-btn>
        <p id = "submit-error">{{ submitMessage }}</p>
  </li>
    </ul>

</form>
</template>



<script>
const { validationMixin } = require('vuelidate')
const { required, email } = require('vuelidate/lib/validators')
import emailjs from 'emailjs-com';





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
        message: '',
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
    },

    methods: {
        submit(e) {
            console.log('submit clicked')
            this.$v.$touch()
            if (this.$v.$invalid) {
               this.submitMessage = "*Please fill out the form correctly."
            } else{
              emailjs.sendForm('gmail', 'contact_form', e.target, 'user_YyleyZlFb5Zl8N5KSnuIZ')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
               this.submitMessage = null;
            }
         },
         clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.major = ''
            this.gradTerm = ''
            this.message = ''
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
   

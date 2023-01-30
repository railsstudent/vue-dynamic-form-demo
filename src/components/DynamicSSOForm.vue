<script setup lang="ts">
import { computed } from 'vue';
import { TextField, RadioField, Validator, required, url } from '@asigloo/vue-dynamic-forms'

const azureForm = computed(() => ({
  id: 'azure-sso-form',
  fields: {
    name: TextField({
      label: 'Name',
      validations: [
        Validator({
          validator: required,
          text: 'This field is required'
        })
      ]
    }),
    url: TextField({
      label: 'Right Management Services URL',
      validations: [
        Validator({
          validator: required,
          text: 'This field is required'
        }),
        Validator({
          validator: url,
          text: 'URL is expected'
        })
      ]
    })
  }
}))

const mulesoftForm = computed(() => ({
  id: 'mulesoft-sso-form',
  fields: {
    name: TextField({
      label: 'Name',
      validations: [
        Validator({
          validator: required,
          text: 'This field is required'
        })
      ]
    }),
    url: TextField({
      label: 'Assertion Consumer Services (ACS) URL',
      validations: [
        Validator({
          validator: required,
          text: 'This field is required'
        }),
        Validator({
          validator: url,
          text: 'URL is expected'
        })
      ]
    }),
    audience: TextField({
      label: 'Audience',
      validations: [
        Validator({
          validator: required,
          text: 'Audience is required'
        })
      ]
    })
  }
}))

const aspSSOForm = computed(() => ({
  id: 'asp-sso-form',
  fields: {
    name: TextField({
      label: 'Name',
      validations: [
        Validator({
          validator: required,
          text: 'This field is required'
        })
      ]
    }),
    audience: TextField({
      label: 'Audience',
      validations: [
        Validator({
          validator: required,
          text: 'Audience is required'
        })
      ]
    }),
    recipient: TextField({
      label: 'Recipient',
      validations: [
        Validator({
          validator: required,
          text: 'This field is required'
        })
      ]
    }),
    signResponse: RadioField({
      label: 'Sign Response',
      options: [
        {
          key: 'yes',
          value: 'Yes',
        },
        {
          key: 'no',
          value: 'No',
        },
      ],
      value: 'yes',
    }),
  }
}))

function mounted() { 
  console.log('mounted: hello world')
}

function updateValues(values: any) {
  console.log('values', values);
}

mounted();

</script>

<template>
  <div class="greetings">
    <h1>This is an about page</h1>
    <dynamic-form :form="aspSSOForm" @change="updateValues" />
    <button submit="true" :form="aspSSOForm.id">Submit</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

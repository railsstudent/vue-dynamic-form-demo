<script setup lang="ts">
import { computed, ref } from 'vue';
import { TextField, RadioField, Validator, required, url } from '@asigloo/vue-dynamic-forms'
import { FormKitSchema } from '@formkit/vue'

const props = defineProps({
  code: { 
    type: String,
    required: true
  }
})

console.log(props.code)

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

const azureData = [
  {
    $el: 'h1',
    children: 'Azure DB Single Sign On Integration'
  },
  {
    $formkit: 'text',
    name: 'name',
    label: 'Name',
    validation: 'required'
  },
  {
    $formkit: 'url',
    name: 'url',
    label: 'Right Management Services URL',
    placeholder: 'http://www.example.com',
    help: 'This is the URL of your Right Management Server. It can be internal or external, but users have to be able to reach it',
    validation: 'required|url'
  }
]
const formSchema = ref([])

async function mounted() { 
  formSchema.value = await new Promise<any>((resolve) => { setTimeout(() => { 
    if (props.code === 'azure') {
      return resolve(azureData)
    }
    resolve([])
  }, 100) })
  console.log('mounted: hello world')
}

function save(data: any) {
  console.log('data', data)
}

mounted();

</script>

<template>
  <div class="greetings">
    <FormKit type="form" submit-label="Save" @submit="save">
      <FormKitSchema :schema="formSchema" />
    </FormKit>
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

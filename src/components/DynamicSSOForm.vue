<script setup lang="ts">
import { reset } from '@formkit/core';
import { FormKitSchema } from '@formkit/vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  code: { 
    type: String,
    required: true
  }
})

console.log(props.code)

const azureData = [
  {
    $el: 'h1',
    children: 'New AD RMS SSO Integration'
  },
  {
    $formkit: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'AD RMS',
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

const muleSoftData = [
  {
    $el: 'h1',
    children: 'New AnyPoint SSO Integration'
  },
  {
    $formkit: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'AnyPoint',
    validation: 'required'
  },
  {
    $formkit: 'url',
    name: 'url',
    label: 'Assertion Consumer Service (ACS) URL',
    placeholder: 'Your ACS URL',
    help: 'This is the URL of your Right Management Server. It can be internal or external, but users have to be able to reach it',
    validation: 'required|url'
  },
  {
    $formkit: 'text',
    name: 'audience',
    label: 'Audience',
    placeholder: 'Your audience',
    validation: 'required|length:3',
  }
]

const dotNetAuth0Data = [
  {
    $el: 'h1',
    children: 'New ASP.NET Auth0 SSO Integration'
  },
  {
    $formkit: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'ASP.NET Auth0 Name',
    validation: 'required'
  },
  {
    $formkit: 'text',
    name: 'audience',
    label: 'Audience',
    placeholder: 'Your audience',
    validation: 'required|length:3,20',
    help: 'Between 3 and 20 characters'
  },
  {
    $formkit: 'text',
    name: 'recipient',
    label: 'Recipient',
    placeholder: 'Your recipient',
    validation: 'required',
  },
  {
    $formkit: 'radio',
    name: 'signResponse',
    label: 'Sign Response',
    options: {
      'yes': 'Yes',
      'no': 'No',
    },
    value: 'no',
    validation: 'required'
  }
]

const formSchema = ref([])

async function loadFormConfiguration(code: string) {
  formSchema.value = await new Promise<any>((resolve) => { setTimeout(() => { 
    if (code === 'azure') {
      return resolve(azureData)
    } else if (code === 'anypoint') {
      return resolve(muleSoftData)
    } else if (code === 'dotnet_auth0') {
      return resolve(dotNetAuth0Data)
    }
    resolve([])
  }, 100) })
}

const route = useRoute()

watch(() => route.params.code, (code) => {
  if (typeof code === 'string') {
    loadFormConfiguration(code)
  } else if (code.length) {
    loadFormConfiguration(code[0])
  }
})

function created() {
  loadFormConfiguration(props.code)
  console.log('created: hello world')
}

async function save(data: any) {
  console.log('data', data)
  await new Promise<boolean>((resolve) => setTimeout(() => resolve(true), 1000))
  reset('ssoForm')
  alert(JSON.stringify(data))
}

created()

</script>

<template>
  <div class="greetings">
    <FormKit type="form" id="ssoForm" submit-label="Save" @submit="save">
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

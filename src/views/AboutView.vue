<script setup lang="ts">
import { useRoute } from 'vue-router'
import DynamicSSOForm from '../components/DynamicSSOForm.vue'

const route = useRoute()
const code = extractCode()

function extractCode() {
  if (route.params.code) {
    const code = route.params.code
    if (typeof code === 'string') {
      return code
    } else if (code.length) {
      return code[0]
    }
  }
  return 'azure'
}

console.log('about view ->', code)

</script>

<template>
  <div class="about">
    <DynamicSSOForm :code="code" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

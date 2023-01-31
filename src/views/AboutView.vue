<script setup lang="ts">
import { useRoute } from 'vue-router'
import DynamicSSOForm from '../components/DynamicSSOForm.vue'

const route = useRoute()
const code = route.params.code as string

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

<script setup lang="ts">
import DynamicSSOForm from '../components/DynamicSSOForm.vue'
</script>

<template>
  <div class="about">
    <DynamicSSOForm :msg="'testing'" />
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

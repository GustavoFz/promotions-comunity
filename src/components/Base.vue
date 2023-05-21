<template>
  <div>
    <AppHeader />
    <div>
      <RouterView />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@/components/app/Footer.vue'
import AppHeader from '@/components/app/Header.vue'
</script>

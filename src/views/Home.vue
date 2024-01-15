<template>
  <div class="text-lg font-medium mb-4">Home：{{ msg }}</div>
  <HelloWorld msg="Vite + Vue + Home" />
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue';
const msg = ref('hello world');
</script>

<style lang="scss" scoped></style>

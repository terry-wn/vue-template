<template>
  <div class="text-3xl font-bold underline mb-2">Demo：{{ msg }}</div>
  <HelloWorld msg="Vite + Vue + Demo" />
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue';
const msg = ref('hello world');
</script>

<style lang="scss" scoped></style>

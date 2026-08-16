<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const images = import.meta.glob('../assets/james/*.png', { eager: true })
console.log(images)
const moduleArray = Object.values(images).map(item=> item.default)
</script>

<template>
  <div>{{ moduleArray }}</div>
</template>

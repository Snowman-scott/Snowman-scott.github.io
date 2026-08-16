<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #heading>Site contents</template>
    Some Pretty cool stuff about James Whitman
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <img alt="James" class="logo" src="../assets/james/james.png" width="45" height="45"/>
    </template>
    <template #heading>James Whitman</template>
    James whitman is a star on tiktok, He is famous for Riding a Bike, being a mechanic

    He is great

    WE love james
  </WelcomeItem>
</template>

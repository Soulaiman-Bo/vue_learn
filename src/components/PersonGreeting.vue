<template>
  <a :href="featuredLink">FeatureLink</a>
  <p v-font-size:small>Small</p>
  <p v-font-size>Meduim</p>
  <p v-font-size:large>Large</p>

  <my-header>
    <template #title> Building own vue 3 Plugin </template>
    <template #author> Soulaiman Bouhlal </template>
  </my-header>
</template>

<script setup>
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
}
.header {
  width: 100%;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}
</style>
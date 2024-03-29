<template>
  <header class="header">
    <div class="title">
      <h1>Plugins</h1>
    </div>
    <hr />
  </header>
  <main class="main">
    <PersonGreeting />
  </main>
</template>

<script setup>
import { ref } from "vue";
import PersonGreeting from "./components/PersonGreeting.vue";
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
<template>
  <header class="header">
    <div class="title">
      <h1>Custom Events</h1>
    </div>
    <hr />
  </header>
  <main class="main">
    <div>
      <input v-model="firstName" />
      <input v-model="lastName" />
    </div>
    <PersonGreeting
      :firstName="firstName"
      :lastName="lastName"
      @CallHeroes="handleCallHeroes"
    />
  </main>
</template>

<script setup>
import { ref } from "vue";
import PersonGreeting from "./components/PersonGreeting.vue";

const firstName = ref("Jackie");
const lastName = ref("Chzan");

function handleCallHeroes(fullName) {
  alert(fullName);
}
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
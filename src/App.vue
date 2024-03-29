<template>
  <header class="header">
    <div class="title">
      <h1>Watch And WatchEffect</h1>
    </div>
    <hr />
  </header>
  <main class="main">
    <textarea v-model="textContent"></textarea>
    <p>{{ textContent }}</p>
    <p v-if="istyping">Matt is Typing...</p>
  </main>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
const textContent = ref("");
const istyping = ref(false);

watch(
  textContent,
  (newValue, oldValue) => {
    console.log({ newValue }, { oldValue });
  },
  { immediate: true }
);

const stop = watchEffect((onInvalidate) => {
  if (textContent.value.length > 0) {
    istyping.value = true;

    // if (textContent.value.length > 0) {
    //   stop();
    // }

    const showTypingStatus = setTimeout(() => {
      istyping.value = false;
    }, 2000);

    onInvalidate(() => {
      clearInterval(showTypingStatus);
    });
  }
});
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding-block: 3rem;
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
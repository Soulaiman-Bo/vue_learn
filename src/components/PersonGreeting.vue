<template>
  <div>Hello {{ fullname }}</div>
  <button @click="sendEvent">Call Heroes</button>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';


const props = defineProps({
  firstName: String,
  lastName: String
});

const emit = defineEmits(['CallHeroes']);

const fullname = computed(() => `${props.firstName} ${props.lastName}`);

function sendEvent() {
  emit('CallHeroes', `Calling ${fullname.value}` );
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
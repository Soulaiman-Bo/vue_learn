<template>
  <header class="header">
    <div class="title">
      <h1>Refs VS Reactive Data</h1>
    </div>
    <hr />
  </header>
  <main class="main">
    <p>{{ numberTwo }}</p>
    <button @click="numberTwo++">Increment</button>
    <p>{{ person.name }} - {{ person.age }}</p>
    <button @click="updatePerson">Update Person</button>
    <p>{{ personTwo.name }} - {{ personTwo.age }}</p>
    <button @click="updatePersonTwo">Update Person two</button>
  </main>
</template>

<script setup>
import { ref, reactive } from "vue";
const numberTwo = ref(2);
const person = ref({
  name: "jhon",
  age: 25,
});

const personTwo = reactive({
  name: "tim",
  age: 32,
});

const updatePerson = () => {
  person.value.name = "scott";
};

const updatePersonTwo = () => {
  personTwo.name = "tom";
};

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
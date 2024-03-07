<script setup>
import { ref } from "vue";

// Define reactive data and props

const greeting = ref(`Hello, Vue 3!${1}`);
const counter = ref(0);

// Define a function
function incrementCounter() {
  counter.value++;
  if (counter.value > 10) {
    counter.value = 0;
  }
}
</script>

<template>
  <div>
    <h1>
      {{ greeting }}
    </h1>
    <button @click="incrementCounter">
      Click me!
    </button>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

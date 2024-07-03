<template>
  <main class="max-w-screen-lg mx-auto py-5">
    <div class="flex items-center gap-3" @click="toggleDarkMode">
      <InputSwitch v-bind:model-value="checked" />
      <label class="cursor-pointer">Light/Dark Mode</label>
    </div>
    <hr class="my-5" />
    <SaqueView />
  </main>
</template>

<script setup>
import InputSwitch from 'primevue/inputswitch'
import SaqueView from './SaqueView.vue';
import { defineModel } from 'vue';

const checked = defineModel()

const toggleDarkMode = () => {
  checked.value = !checked.value
  window.document.documentElement.classList.toggle('dark')
}
</script>

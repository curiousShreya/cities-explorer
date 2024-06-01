<template>
  <div class="flex flex-col md:flex-row items-center mb-4">
    <input
        type="text"
        v-model="region"
        @input="handleInput"
        @keyup.enter="search"
        placeholder="Enter region"
        class="w-full sm:mb-2 inputBox md:w-3/4 border rounded px-4 py-2 md:mb-0 md:mr-2"
        :style="{ flexBasis: '75%' }"
    />
    <button
        class="w-full md:w-auto bg-primary text-white px-3 py-2 rounded"
        @click="search"
        style="min-width: 80px;"
    >
      Search
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const region = ref<string>('');
const timer = ref(0);
const emit = defineEmits(['search']);

const handleInput = (e) => {
  clearTimeout(timer.value);

  // Set a new timer to call fetchSearchResults after 500 milliseconds
  timer.value = setTimeout(() => {
    search();
  }, 500);
};

const search = () => {
  emit('search', region.value);
};
</script>

<style scoped>
@media (max-width: 540px) {
  .inputBox {
     margin-bottom: 0.5rem;
  }
}

.bg-primary {
  background-color: #f18070;
}

</style>

<template>
  <div class="flex items-center">
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer" @change="toggleView">
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-400 dark:peer-focus:ring-red-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-400"></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" v-if="isGrid">Record</span>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300" v-else>Card</span>
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);
const isGrid = ref(props.modelValue);

const toggleView = () => {
  isGrid.value = !isGrid.value;
  emit('update:modelValue', isGrid.value);
};
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>

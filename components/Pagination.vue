<template>
  <div class="flex justify-between items-center mt-4 flex-wrap space-y-2 md:space-y-0">
    <div class="flex space-x-2">
      <button
          @click="changePage(0)"
          :disabled="currentPage === 0"
          class="bg-primary text-white px-4 py-2 rounded disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-700"
      >
        First
      </button>
      <button
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 0"
          class="bg-primary text-white px-4 py-2 rounded disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-700"
      >
        Prev
      </button>
    </div>
    <span class="text-primary mx-4">Page {{ currentPage + 1 }} of {{ totalPages + 1 }}</span>
    <div class="flex space-x-2">
      <button
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="bg-primary text-white px-4 py-2 rounded disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-700"
      >
        Next
      </button>
      <button
          @click="changePage(totalPages)"
          :disabled="currentPage === totalPages"
          class="bg-primary text-white px-4 py-2 rounded disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-700"
      >
        Last
      </button>
    </div>
  </div>
</template>

  <script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{ total: number; current: number }>();
  const emit = defineEmits(['page-changed']);

  const currentPage = computed(() => props.current);
  const totalPages = computed(() => Math.ceil(props.total / 10) - 1);

  const changePage = (page: number) => {
    if (page >= 0 && page <= totalPages.value) {
      emit('page-changed', page);
    }
  };
  </script>

  <style scoped>
  .bg-primary {
    background-color: #f18070;
  }

  .text-primary {
    color: #f18070;
  }

  button:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    .space-y-2 {
      margin-bottom: 0.5rem;
    }

    .space-y-0 {
      margin-bottom: 0;
    }

    .mx-4 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  @media (min-width: 769px) {
    .space-y-0 {
      margin-bottom: 0;
    }

    .mx-4 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  </style>

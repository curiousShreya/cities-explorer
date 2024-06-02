<template>
  <div>
    <!-- Search Box Skeleton -->
    <div class="flex flex-col md:flex-row items-center mb-4 animate-pulse">
      <div class="w-full sm:mb-2 md:w-3/4 border rounded bg-gray-300 h-10 md:mb-0 md:mr-2"></div>
      <div class="w-full md:w-auto bg-gray-300 h-10 rounded mt-2 md:mt-0" style="min-width: 80px;"></div>
    </div>

    <!-- Grid Skeleton -->
    <div class="grid grid-cols-1 gap-4 animate-pulse">
      <div
          v-for="n in 4"
          :key="n"
          class="bg-gray-300 rounded-md shadow-lg p-4"
      >
        <div class="h-6 bg-gray-400 rounded mb-4"></div>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="flex flex-col">
            <div class="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-400 rounded w-1/2"></div>
          </div>
          <div class="flex flex-col">
            <div class="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-400 rounded w-1/2"></div>
          </div>
          <div class="flex flex-col">
            <div class="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-400 rounded w-1/2"></div>
          </div>
          <div class="flex flex-col">
            <div class="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-400 rounded w-1/2"></div>
          </div>
          <div class="flex flex-col">
            <div class="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-400 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed as this is a static skeleton loader
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>

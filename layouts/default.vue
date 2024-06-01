<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-red-400 text-white p-4">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold ml-8">Cities Explorer</h1>
      </div>
    </header>
    <main class="flex-grow container mx-auto p-4">
      <NuxtPage />
    </main>
    <footer class="bg-gray-800 text-white p-4 mt-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Cities Explorer. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
/* Global styles if necessary */
</style>

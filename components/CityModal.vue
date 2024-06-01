<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-black opacity-50 absolute inset-0"></div>
    <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Nearby Cities</h3>
        <button type="button" class="absolute top-0 right-0 pt-4 pr-4" @click="$emit('close')">
          <span class="text-gray-400 hover:text-gray-500">&times;</span>
        </button>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <p class="mb-4">{{ city.name }}'s nearby cities:</p>
        <ul class="list-disc pl-5">
          <li v-for="nearbyCity in nearbyCities" :key="nearbyCity.id">
            {{ nearbyCity.name }} - {{ nearbyCity.distance }} km ({{ nearbyCity.region }})
          </li>
        </ul>
      </div>
      <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-400 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface City {
  id: number;
  name: string;
}

interface NearbyCity {
  id: number;
  name: string;
  distance: number;
  region: string;
}

const props = defineProps<{ city: City; nearbyCities: NearbyCity[] }>();
</script>

<style scoped>
/* Scoped styles if necessary */
</style>

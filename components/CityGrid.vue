<template>
  <div class="grid grid-cols-1 gap-4">
    <div
        v-for="city in cities"
        :key="city.id"
        @click="showNearby(city)"
        class="bg-white rounded-md shadow-lg hover:bg-gray-100 cursor-pointer p-4"
    >
      <h3 class="text-lg font-bold mb-4">{{ city.name }}</h3>
      <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div class="flex flex-col">
          <div class="font-bold">Country:</div>
          <div>{{ city.country }}</div>
        </div>
        <div class="flex flex-col">
          <div class="font-bold">Region:</div>
          <div>{{ city.region }}</div>
        </div>
        <div class="flex flex-col">
          <div class="font-bold">Latitude:</div>
          <div>{{ city.latitude }}</div>
        </div>
        <div class="flex flex-col">
          <div class="font-bold">Longitude:</div>
          <div>{{ city.longitude }}</div>
        </div>
        <div class="flex flex-col">
          <div class="font-bold">Population:</div>
          <div>{{ city.population }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface City {
  id: number;
  name: string;
  country: string;
  region: string;
  latitude: number;
  longitude: number;
  population: number;
}

const props = defineProps<{ cities: City[] }>();
const emit = defineEmits(['show-nearby']);

const showNearby = (city: City) => {
  emit('show-nearby', city);
};
</script>

<style scoped>
/* Scoped styles if necessary */
</style>

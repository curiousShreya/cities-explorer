<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div class="card bg-white shadow-md rounded p-4 cursor-pointer hover:bg-gray-100" v-for="city in props.cities" v-if="props.cities.length>0" :key="city.id" @click="showNearby(city)">
      <div class="w-full p-4">
        <h3 class="text-lg font-bold">{{ city.name }}</h3>
        <p class="text-gray-600">{{ city.country }}</p>
        <p class="text-gray-600">{{ city.region }}</p>
      </div>
      <div class="w-full p-4 flex justify-between">
        <div>
          <p class="text-gray-600">Latitude</p>
          <p>{{ city.latitude }}</p>
        </div>
        <div>
          <p class="text-gray-600">Longitude</p>
          <p>{{ city.longitude }}</p>
        </div>
        <div>
          <p class="text-gray-600">Population</p>
          <p>{{ city.population }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { defineProps, defineEmits } from 'vue';

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

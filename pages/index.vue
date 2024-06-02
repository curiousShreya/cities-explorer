<template>
  <div class="container mx-auto p-4">
    <SkeletonLoader v-if="isLoading" />
    <div v-else>
      <SearchBar @search="handleSearch" />
      <div class="mb-4">
        <ToggleSwitch v-model="showGrid" />
      </div>
      <CityGrid :cities="cities" v-if="showGrid" @show-nearby="showNearbyCities"/>
      <CityCards :cities="cities" v-if="!showGrid" @show-nearby="showNearbyCities" />
      <div class="mt-4" v-if="cities.length==0 && !isLoading">No data found</div>
      <Pagination :total="total" :current="currentPage" @page-changed="fetchCities" v-if="cities.length==10" />
      <CityModal v-if="showModal" :city="selectedCity" :nearbyCities="nearbyCities" @close="showModal = false" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SearchBar from '~/components/SearchBar.vue';
import CityGrid from '~/components/CityGrid.vue';
import CityCards from '~/components/CityCards.vue';
import Pagination from '~/components/Pagination.vue';
import CityModal from '~/components/CityModal.vue';
import {runtime} from "std-env";
import SkeletonLoader from "~/components/SkeletonLoader.vue";

interface City {
  id: number;
  name: string;
  country: string;
  region: string;
  latitude: number;
  longitude: number;
  population: number;
}

interface NearbyCity {
  id: number;
  name: string;
  distance: number;
  region: string;
}

const cities = ref<City[]>([]);
const total = ref<number>(0);
const currentPage = ref<number>(0);
const selectedCity = ref<City | null>(null);
const nearbyCities = ref<NearbyCity[]>([]);
const showModal = ref<boolean>(false);
const showGrid = ref<boolean>(true);
const isLoading = ref<boolean>(true);
const originalCities = ref<City[]>([]);
const runtimeConfig = useRuntimeConfig()


onMounted(() => {
  fetchCities(0)
})

const fetchCities = async (page: number = 0) => {
  try {
    const response = await fetch(`${runtimeConfig.public.baseUrl}?offset=${page}0&limit=10`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': runtimeConfig.public.apiKey,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    cities.value = data.data;
    originalCities.value = data.data;
    total.value = 100;
    currentPage.value = page;
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
  } finally {
    isLoading.value = false;
  }
};

const handleSearch = (region: string) => {
  cities.value =  region.length==0 ? originalCities.value : originalCities.value.filter(x => x.region.toLowerCase().includes(region.toLowerCase()));

};

const showNearbyCities = async (city: City) => {
  selectedCity.value = city;
  try {
    const response = await fetch(`${runtimeConfig.public.baseUrl}/${city.id}/nearbyCities`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': runtimeConfig.public.apiKey,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      },
      params: {
        radius: '100',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    nearbyCities.value = data.data.map(city => ({
      id: city.id,
      name: city.name,
      distance: city.distance,
      region: city.region
    }));


  } catch (error) {
    console.error('An error occurred while fetching the nearby cities:', error);
  } finally {
    showModal.value = true;
  }

};

</script>

<style scoped>
/* Scoped styles if necessary */
</style>

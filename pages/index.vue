<template>
  <div class="container mx-auto p-4">
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
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SearchBar from '~/components/SearchBar.vue';
import CityGrid from '~/components/CityGrid.vue';
import CityCards from '~/components/CityCards.vue';
import Pagination from '~/components/Pagination.vue';
import CityModal from '~/components/CityModal.vue';

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
  // Replace with your API call
  const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?offset=${page}0&limit=10`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': runtimeConfig.public.apiKey,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    },
  });
  const data = await response.json();

  cities.value = data.data;
  originalCities.value = data.data;
  total.value = 100;
  currentPage.value = page;
  isLoading.value = false;
};

const handleSearch = (region: string) => {
  cities.value =  region.length==0 ? originalCities.value : originalCities.value.filter(x => x.region.toLowerCase().includes(region.toLowerCase()));

};

const showNearbyCities = async (city: City) => {
  selectedCity.value = city;
  // Replace with your API call
    const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${city.id}/nearbyCities`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '52ceebb191msh70bc01959ec8f22p1bb866jsn1f9dd9d2bdd5',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    },
    params: {
      radius: '100',
    },
  });
  const data = await response.json();
  nearbyCities.value = data.data.map(city => {
    return {
      id: city.id,
      name: city.name,
      distance: city.distance,
      region: city.region
    }
  })
  showModal.value = true;
};

</script>

<style scoped>
/* Scoped styles if necessary */
</style>

<template>
  <div class="wrapper">
    <p>{{ $store.getters['user/fullName']}}</p>
    <div v-for="hotel in hotels" :key="hotel.abbreviation">
      <hotel-card :hotel="hotel" @click="$store.dispatch('hotel/addToFavorites',hotel)" @click.middle="$router.push({ name: 'HotelDetail', params:{code:hotel.abbreviation} })"/>
    </div>
    <h2 v-if="$store.getters['hotel/existFavorite']">Favorites</h2>
    <div v-for="hotel in $store.state.hotel.favorites" :key="hotel.abbreviation">
      <hotel-card :hotel="hotel" @click="$store.dispatch('hotel/removeToFavorites',hotel)"/>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import allHotels from '@/data/hotels.js'
import HotelCard from '@/components/HotelCard.vue'

export default {
  components: {
    HotelCard
  },
  setup () {
    const hotels = ref(allHotels)
    return { hotels }
  }
}
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h3 {
  grid-column: span 3;
}
</style>

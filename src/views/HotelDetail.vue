<template>
  <div>
    <p>Hotel {{ hotel.name }} ({{hotel.abbreviation}})</p>
    <p>Located in {{ hotel.city }} , {{ hotel.state }}</p>
    <p>See hotel Sumary</p>
    <div>
      <router-link :to="{ name: 'HotelDescription' }">{{hotel.abbreviation}}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import hotels from '@/data/hotels.js'
import router from '@/router'
export default {
  setup () {
    const route = useRoute()
    const hotel = computed(() => {
      return hotels.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
    })
    onMounted(() => {
      if (!hotel.value) {
        router.push({ name: 'PageNotFound' })
      }
    })
    return { hotel }
  }
}
</script>

<template>
  <div>
    <h1>Sumary for Hotel {{ hotel.name }} ({{hotel.abbreviation}})</h1>
    <h2>Description</h2>
    <p class="justified">{{ hotel.description }}</p>
    <p>Category {{ hotel.category }} &#10024;</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import hotels from '@/data/hotels.js'

export default {
  setup () {
    const route = useRoute()
    const hotel = computed(() => {
      return hotels.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
    })

    return { hotel }
  }
}
</script>

<style>
p.justified{
  text-align: justify;
}
</style>

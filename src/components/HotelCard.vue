<template>
  <div class="hotel">
    <p>{{ hotel.abbreviation }}</p>
    <p>{{ hotel.name }}</p>
    <p>{{ hotel.city }}, {{ hotel.state }}</p>
  </div>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.hotel {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.hotel p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}

.hotel p:last-child {
  font-style: italic;
  font-size: .8rem;
}
</style>

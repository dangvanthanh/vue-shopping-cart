<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  min-height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

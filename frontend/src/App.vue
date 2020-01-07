<template>
  <div id="app">
    <header role="banner">
      <Navbar />
    </header>
    <main role="main">
      <transition name="fade">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    Navbar
  }
};
</script>

<style>
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

.router-link.router-link-exact-active.router-link-active {
  @apply bg-gray-800 rounded-lg;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 978px) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>

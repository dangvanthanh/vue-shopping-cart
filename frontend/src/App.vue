<template>
  <div id="app">
    <Navbar/>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';

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

@media (min-width: 768px) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

/* .fade-enter-active {
  animation: up 1s;
  animation-delay: .5s;
  opacity: 0;
}
.fade-leave-active {
  animation: down 1s;
}

@keyframes down {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}
@keyframes up {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
} */
</style>

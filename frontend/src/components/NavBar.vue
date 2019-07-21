<template>
  <div class="bg-blue-600 mb-4">
    <div class="max-w-6xl mx-auto mb-4 px-4">
      <nav class="flex">
        <div class="flex">
          <router-link
            tag="a"
            :to="{ name: 'home' }"
            class="block no-underline text-white mt-2 text-2xl uppercase font-semibold"
          >
            Shopyyy
          </router-link>
        </div>
        <div class="flex-grow">
          <div class="flex-grow text-right">
            <div class="relative inline-block" v-if="!loggedIn">
              <router-link
                tag="a"
                :to="{ name: 'login' }"
                class="nav-item inline-block no-underline p-3 text-white capitalize hover:bg-blue-400"
              >
                Login
              </router-link>
            </div>
            <div class="relative inline-block" v-if="!loggedIn">
              <router-link
                tag="a"
                :to="{ name: 'signup' }"
                class="nav-item inline-block no-underline p-3 text-white capitalize hover:bg-blue-400"
              >
                Signup
              </router-link>
            </div>
            <div class="relative inline-block" v-if="loggedIn">
              <router-link
                tag="a"
                :to="{ name: 'dashboard' }"
                class="nav-item inline-block no-underline p-3 text-white capitalize hover:bg-blue-400"
              >
                Dashboard
              </router-link>
            </div>
            <div class="relative inline-block" v-if="loggedIn">
              <a
                href="#"
                class="nav-item inline-block no-underline p-3 text-white capitalize hover:bg-blue-400"
                @click.prevent="logout"
              >
                Logout
              </a>
            </div>
            <div class="relative inline-block">
              <router-link
                tag="a"
                :to="{ name: 'checkout' }"
                class="inline-block no-underline px-3 py-2 text-white capitalize"
              >
                <span class="align-middle inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M10 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm6.305-15l-3.432 12H5.945L3.008 8H14.17l-1.412 5h2.078l1.977-7H0l4.615 11h13.239l3.474-12h1.929L24 3h-4.195z"
                      fill="#ffffff"
                    />
                  </svg>
                </span>
                (<span class="badge badge-light">{{ cart.length }}</span
                >)
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Categories from '@/components/Categories.vue';

export default {
  components: { Categories },
  data() {
    return {
      isShowDropdown: false
    };
  },
  computed: {
    ...mapGetters({
      loggedIn: 'isAuthenticated',
      cart: 'getCart'
    })
  },
  methods: {
    ...mapActions(['logOut']),
    logout() {
      this.logOut();
      localStorage.removeItem('loggedIn');
      this.$router.push('home');
    }
  }
};
</script>

<style>
.nav-item.router-link-exact-active {
  background-color: #2779bd;
  color: #fff;
}

.dropdown-enter,
.dropdown-leave-to {
  transform: scaleY(0.7);
  opacity: 0;
}

.dropdown-enter-to,
.dropdown-leave {
  opacity: 1;
  transform: scaleY(1);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease-out;
  transform-origin: top center;
}

.pin-dropdown {
  top: 48px;
  min-width: 150px;
}
</style>

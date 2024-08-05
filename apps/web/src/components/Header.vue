<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'
import Categories from './Categories.vue'
import Container from './Container.vue'

const route = useRoute()
const category = ref(
	route.fullPath === '/' ? '/' : (route.params.category as string),
)

watch(
	() => route.params.category,
	async (newCategory) => {
		category.value = route.fullPath === '/' ? '/' : (newCategory as string)
	},
)
</script>

<template>
  <header role="banner"
    :class="css({ pos: 'sticky', top: 0, zIndex: 50, w: 'full', bg: 'white', borderBottomWidth: '1px', borderColor: 'gray.200' })">
    <Container>
      <div :class="flex({ align: 'center', justify: 'space-between', py: 3 })">
        <h1 :class="css({
          fontSize: '3xl',
          lineHeight: '1.125',
          color: 'gray.900',
          fontWeight: '600',
        })
          ">
          <router-link to="/">S</router-link>
        </h1>
        <Categories :category="category"/>
        <nav :class="flex({ align: 'center', justify: 'end', columnGap: 4 })">
          <router-link to="/login" :class="css({ fontSize: 'sm', px: 3, py: 1.5 })">
            Login
          </router-link>
          <router-link to="/signup" :class="css({
            fontSize: 'sm',
            px: 3,
            py: 1.5,
            bg: 'gray.900',
            rounded: 'md',
            color: 'white',
          })
            ">
            Signup
          </router-link>
        </nav>
      </div>
    </Container>
  </header>
</template>

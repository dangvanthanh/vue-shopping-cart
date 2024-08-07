<script setup lang="ts">
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Categories from './Categories.vue'
import Container from './Container.vue'
import IconClose from './IconClose.vue'
import IconHamburger from './IconHamburger.vue'

const isOpen = ref(false)
const route = useRoute()
const category = ref(
	route.fullPath === '/' ? '/' : (route.params.category as string),
)

onMounted(() => {
	onResize()
	window.addEventListener('resize', onResize)
})

onUnmounted(() => {
	window.removeEventListener('resize', onResize)
})

watch(
	() => route.params.category,
	async (newCategory) => {
		category.value = route.fullPath === '/' ? '/' : (newCategory as string)
	},
)

function onResize() {
	const w = window.innerWidth

	if (w >= 768) {
		isOpen.value = true
	}
}
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
        <button :class="css({
          cursor: 'pointer',
          color: 'gray.600',
          md: {
            display: 'none',
          }
        })" type="button" @click="isOpen = !isOpen">
          <IconHamburger :class="css({ w: 6, h: 6 })" />
        </button>
        <div :class="css({ flex: 1 })" v-if="isOpen">
          <div :class="css({
            pos: 'fixed',
            top: 0,
            left: 0,
            h: 'full',
            w: 'full',
            zIndex: -1,
            bg: 'gray.900/90',
            md: {
              display: 'none',
              opacity: 0,
            }
          })" @click="isOpen = false"></div>
          <div :class="css({
            pos: 'fixed',
            bg: 'white',
            top: 0,
            left: 0,
            bottom: 0,
            w: 72,
            p: 6,
            md: {
              pos: 'relative',
              w: 'auto',
              p: 0,
              top: 'auto',
              left: 'auto',
              bottom: 'auto',
              display: 'flex',
              flex: '1'
            }
          })">
            <button type="button" :class="css({
              pos: 'absolute',
              top: 0,
              right: 0,
              m: 2,
              cursor: 'pointer',
              color: 'gray.600',
              md: {
                display: 'none',
              }
            })" @click="isOpen = false">
              <IconClose :class="css({ w: 6, h: 6 })" />
            </button>
            <h1 :class="css({
              fontSize: '3xl',
              lineHeight: '1.125',
              color: 'gray.900',
              fontWeight: '600',
              md: {
                display: 'none',
              }
            })
              ">
              <router-link to="/">S</router-link>
            </h1>
            <Categories :category="category" />
            <nav
              :class="flex({ gap: 3, mt: 6, direction: 'column', align: 'center', justify: 'end', md: { flexDirection: 'row', mt: 0 } })">
              <router-link to="/login" :class="css({ w: 'full', fontSize: 'sm', px: 3, py: 1.5 })">
                Login
              </router-link>
              <router-link to="/signup" :class="css({
                w: 'full',
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
        </div>
      </div>
    </Container>
  </header>
</template>

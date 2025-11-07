<script setup lang="ts">
import IconBarMenu from '@/components/icon/BarMenu.vue'
import IconClose from '@/components/icon/Close.vue'
import IconShoppingCart from '@/components/icon/ShoppingCart.vue'
import ProductCart from '@/components/product/Cart.vue'
import { formatcurrency } from '@/lib'
import { useCartStore } from '@/store'
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Categories from './Categories.vue'
import Container from './Container.vue'

const { cart } = useCartStore()
const isOpenMenu = ref(false)
const isOpenCart = ref(false)
const route = useRoute()

const category = ref(
	route.fullPath === '/' ? '/' : (route.params.category as string),
)

const total = computed(() => {
	return cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
})

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
		isOpenMenu.value = true
	}
}
</script>

<template>
	<header
		role="banner"
		:class="css({ pos: 'sticky', top: 0, zIndex: 50, w: 'full', bg: 'white', borderBottomWidth: '1px', borderColor: 'gray.200' })"
	>
		<Container>
			<div :class="flex({ align: 'center', justify: 'space-between', py: 3 })">
				<h1
					:class="css({
          fontSize: '3xl',
          lineHeight: '1.125',
          color: 'gray.900',
          fontWeight: '600',
        })
          "
				>
					<router-link to="/">S</router-link>
				</h1>
				<div :class="flex({ gap: 2, md: { display: 'none' } })">
					<button
						type="button"
						:class="css({
            fontSize: 'sm',
            px: 2,
            py: 1.5,
            bg: 'gray.50',
            rounded: 'md',
            color: 'gray.900',
            borderWidth: 1,
            borderColor: 'gray.100',
            cursor: 'pointer',
            pos: 'relative'
          })
            "
						@click="isOpenCart = true"
					>
						<span
							v-if="cart.length"
							:class="css({
              pos: 'absolute',
              top: -2,
              right: -2,
              w: 5,
              h: 5,
              p: .5,
              fontWeight: 500,
              rounded: 'full',
              fontSize: '10px',
              color: 'white',
              bg: 'gray.900'
            })"
							>{{ cart.length }}</span
						>
						<IconShoppingCart :class="css({ w: 6, h: 6 })"/>
					</button>
					<button
						:class="css({
            fontSize: 'sm',
            px: 2,
            py: 1.5,
            bg: 'gray.50',
            rounded: 'md',
            color: 'gray.900',
            borderWidth: 1,
            borderColor: 'gray.100',
            cursor: 'pointer'
          })"
						type="button"
						@click="isOpenMenu = !isOpenMenu"
					>
						<IconBarMenu :class="css({ w: 6, h: 6 })"/>
					</button>
				</div>
				<div :class="css({ flex: 1 })" v-if="isOpenMenu">
					<div
						:class="css({
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
          })"
						@click="isOpenMenu = false"
					></div>
					<div
						:class="css({
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
          })"
					>
						<button
							type="button"
							:class="css({
              pos: 'absolute',
              top: 0,
              right: 0,
              m: 2,
              cursor: 'pointer',
              color: 'gray.600',
              md: {
                display: 'none',
              }
            })"
							@click="isOpenMenu = false"
						>
							<IconClose :class="css({ w: 6, h: 6 })"/>
						</button>
						<h1
							:class="css({
              fontSize: '3xl',
              lineHeight: '1.125',
              color: 'gray.900',
              fontWeight: '600',
              md: {
                display: 'none',
              }
            })
              "
						>
							<router-link to="/">S</router-link>
						</h1>
						<Categories :category="category || '/'"/>
						<nav
							:class="flex({ gap: 3, mt: 6, direction: 'column', align: 'center', justify: 'end', md: { flexDirection: 'row', mt: 0 } })"
						>
							<button
								type="button"
								:class="css({
                display: 'none',
                fontSize: 'sm',
                px: 2,
                py: 1.5,
                bg: 'gray.50',
                rounded: 'md',
                color: 'gray.900',
                borderWidth: 1,
                borderColor: 'gray.100',
                cursor: 'pointer',
                pos: 'relative',
                md: {
                  display: 'block'
                }
              })
                "
								@click="isOpenCart = true"
							>
								<span
									v-if="cart.length"
									:class="css({
                  pos: 'absolute',
                  top: -2,
                  right: -2,
                  w: 5,
                  h: 5,
                  p: .5,
                  fontWeight: 500,
                  rounded: 'full',
                  fontSize: '10px',
                  color: 'white',
                  bg: 'gray.900'
                })"
									>{{ cart.length }}</span
								>
								<IconShoppingCart :class="css({ w: 6, h: 6 })"/>
							</button>
							<router-link
								to="/login"
								:class="css({
                w: 'full',
                fontSize: 'sm',
                px: 2,
                py: 1.5,
                bg: 'gray.900',
                rounded: 'md',
                color: 'white',
                borderWidth: 1,
                borderColor: 'gray.900',
              })
                "
							>
								Login
							</router-link>
						</nav>
					</div>
				</div>

				<div v-if="isOpenCart" :class="css({ zIndex: 100 })">
					<div
						:class="css({
            pos: 'fixed',
            top: 0,
            left: 0,
            h: 'full',
            w: 'full',
            zIndex: -1,
            bg: 'gray.900/90',
          })"
						@click="isOpenCart = false"
					></div>
					<div
						:class="css({
            pos: 'fixed',
            bg: 'white',
            top: 0,
            right: 0,
            bottom: 0,
            w: '24rem',
            p: 6
          })"
					>
						<div :class="flex({ direction: 'column', h: 'full' })">
							<div
								:class="flex({ justify: 'space-between', pb: 4, borderBottomWidth: 1, borderBottomColor: 'gray.100' })"
							>
								<h3 :class="css({ fontSize: 'xl', fontWeight: 600 })">Cart</h3>
								<button
									type="button"
									:class="css({
                  cursor: 'pointer',
                  color: 'gray.600',
                })"
									@click="isOpenCart = false"
								>
									<IconClose :class="css({ w: 6, h: 6 })"/>
								</button>
							</div>
							<template v-if="cart.length">
								<div
									:class="flex({ direction: 'column', w: 'full', h: 'full' })"
								>
									<div
										:class="flex({ direction: 'column', overflowY: 'auto', gap: 2, maxH: 'calc(100vh - 12rem)', py: 4 })"
									>
										<template v-for="product in cart">
											<ProductCart :product="product"/>
										</template>
									</div>
									<div :class="css({ pb: 4 })">
										<div :class="flex({ justify: 'space-between', my: 2 })">
											<div :class="css({ fontSize: 'xl', fontWeight: 500 })">
												Total
											</div>
											<div :class="css({ fontSize: 'xl', fontWeight: 500 })">
												{{ formatcurrency(total) }}
											</div>
										</div>
										<button
											type="button"
											:class="css({
                      w: 'full',
                      fontSize: 'sm',
                      px: 2,
                      py: 1.5,
                      bg: 'gray.900',
                      rounded: 'md',
                      color: 'white',
                      borderWidth: 1,
                      borderColor: 'gray.900',
                    })
                      "
										>
											Checkout
										</button>
									</div>
								</div>
							</template>
							<template v-else>
								<div
									:class="flex({ direction: 'column', align: 'center', justify: 'center', w: 'full', h: 'full' })"
								>
									<IconShoppingCart
										:class="css({ w: 16, h: 16, color: 'gray.600' })"
									/>
									<p :class="css({ mt: 2 })">Your cart is empty</p>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</header>
</template>

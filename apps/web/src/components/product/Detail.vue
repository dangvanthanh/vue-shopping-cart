<script setup lang="ts">
import { formatcurrency } from '@/lib'
import { useCartStore } from '@/store'
import type { Product } from '@/types'
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'

defineProps<{
	product: Product
}>()

const { addToCart } = useCartStore()

const fillStar = (n: number, rating: number) => {
	return n <= rating ? 'currentColor' : 'none'
}
</script>

<template>
	<section
		:class="css({
    overflow: 'hidden',
    py: '8',
  })
    "
	>
		<div :class="css({ display: 'flex', flexWrap: 'wrap' })">
			<div
				:class="css({
        lg: { w: '1/2', h: 'auto', p: 8 },
        w: 'full',
        h: '64',
        bgColor: 'gray.100',
        p: 6,
        rounded: 'xl',
        pos: 'relative',
      })
        "
			>
				<img
					alt=""
					:class="css({ w: 'full', h: 'full', objectFit: 'contain' })"
					loading="lazy"
					:src="product.thumbnail"
				>
				<div
					:class="css({
          pos: 'absolute',
          top: 0,
          right: 0,
          m: 2,
          p: 2,
          bg: 'white',
          rounded: 'sm',
          color: product.favorite ? 'red.600' : 'gray.900',
        })
          "
				>
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						:class="css({ w: '4', h: '4' })"
						viewBox="0 0 24 24"
					>
						<path
							d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
						/>
					</svg>
				</div>
			</div>
			<div
				:class="css({
        lg: { w: '1/2', mt: 0, pl: 6 },
        w: 'full',
        mt: '6',
        pos: 'relative',
      })
        "
			>
				<h1
					:class="css({
          color: 'gray.900',
          fontSize: '3xl',
          lineHeight: '1',
          fontWeight: 'medium',
          mb: 2,
        })
          "
				>
					{{ product.title }}
				</h1>
				<div :class="css({ display: 'flex', mb: '4' })">
					<span :class="css({ display: 'flex', alignItems: 'center' })">
						<svg
							:fill="fillStar(n, product.rating)"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							:class="css({
                w: 5,
                h: 5,
                color: 'orange.500',
              })
                "
							viewBox="0 0 24 24"
							v-for="n in 5"
							:key="n"
						>
							<path
								d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
							/>
						</svg>
					</span>
				</div>
				<p :class="css({ lineHeight: 'relaxed' })">{{ product.description }}</p>
				<p :class="css({ mt: '6' })">
					<span
						:class="css({
            fontWeight: 'semibold',
            fontSize: '2xl',
            lineHeight: '1',
            fontVariantNumeric: 'tabular-nums',
          })
            "
					>
						{{ formatcurrency(product.price) }}
					</span>
				</p>

				<div :class="flex({ mt: 6, align: 'center', gap: 1 })">
					<template v-for="color in product.colors">
						<div
							:class="css({
              w: 6,
              h: 6,
              rounded: 'full',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'gray.200',
            })
              "
							:style="{ backgroundColor: color }"
						></div>
					</template>
				</div>

				<div
					:class="css({
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          mt: '6',
        })
          "
				>
					<button
						:class="css({
            w: 'full',
            rounded: 'md',
            display: 'inline-flex',
            justifyContent: 'center',
            bg: 'gray.900',
            color: 'white',
            px: 3,
            py: 1.5,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'gray.900',
            cursor: 'pointer',
          })
            "
						@click="addToCart(product)"
					>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

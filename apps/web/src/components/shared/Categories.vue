<script setup lang="ts">
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { useRequest } from 'alova/client'
import { getCategories } from '@/api'

const props = defineProps<{
	category: string
}>()

const { loading, data: categories, error } = useRequest(getCategories)

function getCategoryActive(isSameCategory: boolean) {
	return {
		display: 'inline-flex',
		alignItems: 'center',
		px: 4,
		py: 1.5,
		bg: isSameCategory ? 'gray.900' : 'gray.100',
		color: isSameCategory ? 'white' : 'gray.700',
		rounded: 'full',
		fontSize: 'sm',
		w: 'full',
		md: {
			w: 'auto',
		},
	}
}
</script>

<template>
	<div v-if="loading" :class="flex({ align: 'center', gap: 3 })">
		<template v-for="_ in 3">
			<div
				:class="css({
        display: 'inline-flex',
        alignItems: 'center',
        px: 5,
        py: 1.5,
        bg: 'gray.100',
        color: 'gray.700',
        rounded: 'full',
        minW: '28',
      })
        "
			>
				&nbsp;
			</div>
		</template>
	</div>
	<div v-else-if="error">{{ error.message }}</div>
	<div
		v-else
		:class="flex({
    direction: 'column',
    align: 'start',
    gap: 3,
    whiteSpace: 'nowrap',
    mt: 6,
    md: {
      flexDirection: 'row',
      alignItems: 'center',
      mr: 'auto',
      ml: 12,
      mt: 0
    }
  })
    "
	>
		<router-link
			to="/"
			:class="css({
      ...getCategoryActive(props.category === '/')
    })
      "
		>
			All
		</router-link>
		<template v-if="categories">
			<template v-for="category in categories">
				<router-link
					:to="`/category/${category.slug}`"
					:class="css({
          ...getCategoryActive((category.slug === props.category))
        })
          "
				>
					{{ category.name }}
				</router-link>
			</template>
		</template>
	</div>
</template>

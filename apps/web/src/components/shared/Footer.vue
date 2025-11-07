<script setup lang="ts">
import { css } from '@styled-system/css'
import Container from './Container.vue'

const year = new Date().getFullYear()
</script>

<template>
	<footer
		role="contentinfo"
		:class="css({ borderTopWidth: '1px', borderTopColor: 'gray.200', py: 6, px: 4 })"
	>
		<Container>
			<p :class="css({ fontSize: 'sm', textAlign: 'center' })">
				&copy; {{ year }}. All Rights Reserved.
			</p>
		</Container>
	</footer>
</template>

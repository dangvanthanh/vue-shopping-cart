<script setup lang="ts">
import { css } from '@styled-system/css'
import Container from '@/components/shared/Container.vue'
import Footer from '@/components/shared/Footer.vue'
import Header from '@/components/shared/Header.vue'
</script>

<template>
	<Header/>
	<main role="main" :class="css({ py: 6 })">
		<Container>
			<slot/>
		</Container>
	</main>
	<Footer/>
</template>

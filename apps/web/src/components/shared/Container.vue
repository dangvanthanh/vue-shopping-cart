<script setup lang="ts">
import { css } from '@styled-system/css'
</script>

<template>
	<div :class="css({ maxW: '5xl', mx: 'auto', px: 4 })">
		<slot/>
	</div>
</template>

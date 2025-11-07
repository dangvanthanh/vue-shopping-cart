<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import { css } from '@styled-system/css'
</script>

<template>
	<AuthLayout>
		<div
			:class="css({
      w: 'full',
      maxW: 'lg',
      mx: 'auto',
      py: 12,
      px: 6,
      bgColor: 'white',
      shadow: 'shadow',
      rounded: 'md',
    })
      "
		>
			<img src="/404.svg" alt="" :class="css({ w: 'full', h: 'auto' })">
			<div :class="css({ mt: '10' })">
				<p :class="css({ textAlign: 'center' })">
					<router-link
						to="/"
						:class="css({
            textUnderlineOffset: '2px',
            textDecorationLine: 'underline',
            _hover: { textDecorationLine: 'none' },
          })
            "
					>
						Back to homepage
					</router-link>
				</p>
			</div>
		</div>
	</AuthLayout>
</template>

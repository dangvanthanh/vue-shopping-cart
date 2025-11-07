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
			<h2 :class="css({ display: 'flex', justifyContent: 'center' })">
				<router-link
					to="/"
					:class="css({
          display: 'flex',
          alignItems: 'center',
          fontSize: '6xl',
          lineHeight: '1',
          textTransform: 'uppercase',
          pos: 'relative',
          fontWeight: '600',
        })
          "
				>
					<span>S</span>
				</router-link>
			</h2>
			<p
				:class="css({
        my: '6',
        fontSize: 'base',
        lineHeight: '1',
        textAlign: 'center',
        color: 'gray.900',
      })
        "
			>
				Create new an account
			</p>
			<form>
				<div
					:class="css({
          rounded: 'md',
          shadow: 'sm',
          p: 6,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray.100',
        })
          "
				>
					<div :class="css({ mb: '3' })">
						<label
							for="email"
							:class="css({
              display: 'block',
              mb: '2',
              fontSize: 'sm',
              lineHeight: 'sm',
              color: 'gray.900',
            })
              "
						>
							Email
						</label>
						<input
							type="email"
							:class="css({
              appearance: 'none',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'gray.200',
              display: 'block',
              w: 'full',
              px: 3,
              py: 1.5,
              color: 'gray.900',
              rounded: 'md',
            })
              "
							placeholder="Email address"
						>
					</div>
					<div :class="css({ mb: '3' })">
						<label
							for="password"
							:class="css({
              display: 'block',
              mb: '2',
              fontSize: 'sm',
              lineHeight: 'sm',
              color: 'gray.900',
            })
              "
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							:class="css({
              appearance: 'none',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'gray.200',
              display: 'block',
              w: 'full',
              px: 3,
              py: 1.5,
              color: 'gray.900',
              rounded: 'md',
            })
              "
							placeholder="Password"
						>
					</div>
					<div :class="css({ mt: '6' })">
						<button
							type="submit"
							:class="css({
              w: 'full',
              rounded: 'md',
              display: 'inline-flex',
              justifyContent: 'center',
              bg: 'gray.900',
              color: 'white',
              px: 3,
              py: 1.5,
              border: '1px',
              borderStyle: 'solid',
              borderColor: 'gray.900',
              cursor: 'pointer',
            })
              "
						>
							Create An Account
						</button>
					</div>
				</div>
			</form>
			<div :class="css({ mt: '10' })">
				<p :class="css({ textAlign: 'center' })">
					Already have an account?
					<router-link
						to="/login"
						:class="css({
            textUnderlineOffset: '2px',
            textDecorationLine: 'underline',
            _hover: { textDecorationLine: 'none' },
          })
            "
					>
						Back to login
					</router-link>
				</p>
			</div>
		</div>
	</AuthLayout>
</template>

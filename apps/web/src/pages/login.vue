<script setup lang="ts">
import { css } from '@styled-system/css'
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>

<template>
	<AuthLayout>
		<div
			:class="
        css({
          w: 'full',
          maxW: 'lg',
          mx: 'auto',
          py: 12,
          px: 6,
          bgColor: 'white',
          shadow: 'shadow',
          rounded: 'sm',
        })
      "
		>
			<h2 :class="css({ display: 'flex', justifyContent: 'center' })">
				<router-link
					to="/"
					:class="
            css({
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
				:class="
          css({
            my: '6',
            fontSize: 'base',
            lineHeight: '1',
            textAlign: 'center',
            color: 'gray.900',
          })
        "
			>
				Log in to your account
			</p>
			<form>
				<div
					:class="
            css({
              rounded: 'sm',
              p: 6,
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'gray.900',
              shadow: '4px 4px 0 0',
            })
          "
				>
					<div :class="css({ mb: '3' })">
						<label
							for="email"
							:class="
                css({
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
							:class="
                css({
                  appearance: 'none',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'gray.900',
                  display: 'block',
                  w: 'full',
                  px: 3,
                  py: 2,
                  color: 'gray.900',
                  rounded: 'sm',
                  shadow: '4px 4px 0 0',
                })
              "
							placeholder="Email address"
						>
					</div>
					<div :class="css({ mb: '3' })">
						<label
							for="password"
							:class="
                css({
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
							:class="
                css({
                  appearance: 'none',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'gray.900',
                  display: 'block',
                  w: 'full',
                  px: 3,
                  py: 2,
                  color: 'gray.900',
                  rounded: 'sm',
                  shadow: '4px 4px 0 0',
                })
              "
							placeholder="Password"
						>
					</div>
					<div :class="css({ mt: '6' })">
						<button
							type="submit"
							:class="
                css({
                  w: 'full',
                  rounded: 'sm',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  px: 3,
                  py: 2,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'gray.900',
                  cursor: 'pointer',
                  bg: 'white',
                  color: 'gray.900',
                  fontWeight: 'semibold',
                  shadow: '4px 4px 0 0',
                })
              "
						>
							Sign In
						</button>
					</div>
				</div>
			</form>
			<div :class="css({ mt: '10' })">
				<p :class="css({ textAlign: 'center' })">
					Not registered?
					<router-link
						to="/signup"
						:class="
              css({
                textUnderlineOffset: '2px',
                textDecorationLine: 'underline',
                _hover: { textDecorationLine: 'none' },
              })
            "
					>
						Create an account
					</router-link>
				</p>
			</div>
		</div>
	</AuthLayout>
</template>

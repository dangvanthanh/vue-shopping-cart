<script setup lang="ts">
import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'

const year = new Date().getFullYear()
</script>

<template>
  <header role="banner" :class="css({ maxW: '5xl', mx: 'auto', px: 4 })">
    <div :class="flex({ align: 'center', justify: 'space-between', py: 4 })">
      <h1 :class="css({
        fontSize: '3xl',
        lineHeight: '1.125',
        color: 'gray.900',
        fontWeight: '600',
      })
        ">
        <router-link to="/">S</router-link>
      </h1>
      <nav :class="flex({ align: 'center', justify: 'end', columnGap: 4 })">
        <router-link to="/login" :class="css({ fontSize: 'sm', px: 3, py: 1.5 })">
          Login
        </router-link>
        <router-link to="/signup" :class="css({
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
  </header>

  <main role="main" :class="css({ maxW: '5xl', mx: 'auto', px: 4 })">
    <slot></slot>
  </main>

  <footer role="contentinfo" :class="css({ maxW: '5xl', mx: 'auto', py: 6, px: 4 })">
    <p :class="css({ fontSize: 'sm', textAlign: 'center' })">
      © {{ year }}. All Rights Reserved.
    </p>
  </footer>
</template>

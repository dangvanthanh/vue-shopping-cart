<script setup lang="ts">
import Container from '@/components/Container.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { css } from '@styled-system/css'
</script>

<template>
  <Header />
  <main role="main" :class="css({ py: 6 })">
    <Container>
      <slot />
    </Container>
  </main>
  <Footer />
</template>

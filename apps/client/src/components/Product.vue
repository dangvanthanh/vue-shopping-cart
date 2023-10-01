<script setup lang="ts">
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

interface IProduct {
  id: string;
  description: string;
  price: number;
  title: string;
  thumbnail: string;
  rating: number;
  category: string;
  colors: string[];
}

defineProps<{
  product: IProduct;
}>();
</script>

<template>
  <router-link
    :to="`/product/${product.id}`"
    :class="
      flex({
        w: 'full',
        bgColor: 'white',
        pb: '5',
        direction: 'column',
        overflow: 'hidden',
      })
    "
  >
    <div
      :class="
        css({
          display: 'block',
          pos: 'relative',
          h: '64',
          overflow: 'hidden',
          bg: 'gray.100',
          rounded: 'xl',
          p: 6,
        })
      "
    >
      <img
        :src="product.thumbnail"
        loading="lazy"
        :class="css({ w: 'full', h: 'full', objectFit: 'contain' })"
      />
    </div>
    <div :class="css({ flex: '1' })">
      <h2
        :class="
          css({
            color: 'gray.900',
            fontSize: 'base',
            lineHeight: 'base',
            fontWeight: 'medium',
            mt: '3',
            mb: '3',
          })
        "
      >
        {{ product.title }}
      </h2>
      <p
        :class="
          css({ mb: '3', fontSize: 'lg', lineHeight: 'lg', fontWeight: 'bold' })
        "
      >
        $ {{ product.price }}
      </p>

      <div :class="flex({ align: 'center', gap: 2 })">
        <template v-for="color in product.colors">
          <div
            :class="
              css({
                w: 5,
                h: 5,
                rounded: 'full',
                borderWidth: '1px',
                borderColor: 'gray.200',
              })
            "
            :style="{ backgroundColor: color }"
          ></div>
        </template>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import { IProduct } from "@/types";
import { formatcurrency } from "@/lib";

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
      <div
        :class="
          css({
            pos: 'absolute',
            top: 0,
            right: 0,
            m: 2,
            p: 1,
            bg: 'white',
            rounded: 'sm',
            color: product.favorite ? 'red.600' : 'gray.900',
          })
        "
      >
        <svg
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :class="css({ w: '4', h: '4' })"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          />
        </svg>
      </div>
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
          css({
            mb: '3',
            fontSize: 'lg',
            lineHeight: '1',
            fontWeight: 'semibold',
            fontVariantNumeric: 'tabular-nums',
          })
        "
      >
        {{ formatcurrency(product.price) }}
      </p>

      <div :class="flex({ align: 'center', gap: 1 })">
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

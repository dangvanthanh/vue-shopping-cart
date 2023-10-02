<script setup lang="ts">
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
</script>

<template>
  <div
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
      <div
        :class="
          css({
            w: 'full',
            h: 'full',
            objectFit: 'contain',
            bg: 'gray.100',
          })
        "
      >
        &nbsp;
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
            bg: 'gray.100',
          })
        "
      >
        &nbsp;
      </h2>
      <p
        :class="
          css({
            mb: '3',
            fontSize: 'lg',
            lineHeight: '1',
            fontWeight: 'semibold',
            fontVariantNumeric: 'tabular-nums',
            bg: 'gray.100',
            w: '1/2',
          })
        "
      >
        &nbsp;
      </p>

      <div :class="flex({ align: 'center', gap: 1 })">
        <template v-for="_ in 2">
          <div
            :class="
              css({
                w: 5,
                h: 5,
                rounded: 'full',
                borderWidth: '1px',
                borderColor: 'gray.200',
                bg: 'gray.100',
              })
            "
          ></div>
        </template>
      </div>
    </div>
  </div>
</template>

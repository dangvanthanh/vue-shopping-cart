<script setup lang="ts">
import { useRequest } from "alova";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import { getCategories } from "@/api";

const props = defineProps<{
  category: string;
}>();

const { loading, data, error } = useRequest(getCategories);
</script>

<template>
  <div :class="css({ py: '5' })">
    <div v-if="loading" :class="flex({ align: 'center', gap: 3 })">
      <template v-for="_n in 3">
        <div
          :class="
            css({
              display: 'inline-flex',
              alignItems: 'center',
              px: 5,
              py: 1.5,
              bg: 'gray.100',
              color: 'gray.700',
              rounded: 'full',
              minW: '28',
            })
          "
        >
          &nbsp;
        </div>
      </template>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else :class="flex({ align: 'center', gap: 3 })">
      <router-link
        to="/"
        :class="
          css({
            display: 'inline-flex',
            alignItems: 'center',
            px: 5,
            py: 1.5,
            bg: props.category === '/' ? 'gray.900' : 'gray.100',
            color: props.category === '/' ? 'white' : 'gray.700',
            rounded: 'full',
          })
        "
      >
        All
      </router-link>
      <template v-if="data">
        <template v-for="cat in data.data">
          <router-link
            :to="`/category/${cat.slug}`"
            :class="
              css({
                display: 'inline-flex',
                alignItems: 'center',
                px: 5,
                py: 1.5,
                bg: cat.slug === props.category ? 'gray.900' : 'gray.100',
                color: cat.slug === props.category ? 'white' : 'gray.700',
                rounded: 'full',
              })
            "
          >
            {{ cat.name }}
          </router-link>
        </template>
      </template>
    </div>
  </div>
</template>

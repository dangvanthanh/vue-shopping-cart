<script setup lang="ts">
import { useRequest } from "alova";
import { css } from "../../styled-system/css";
import { flex, grid } from "../../styled-system/patterns";
import BaseLayout from "@/layouts/BaseLayout.vue";
import Product from "@/components/Product.vue";
import { getProducts, getCategories } from "@/api";

const {
  loading: loadingProduct,
  data: dataProduct,
  error: errorProduct,
} = useRequest(getProducts);

const {
  loading: loadingCategories,
  data: dataCategories,
  error: errorCategories,
} = useRequest(getCategories);
</script>

<template>
  <BaseLayout>
    <div :class="css({ py: '5' })">
      <div v-if="loadingCategories">Loading...</div>
      <div v-else-if="errorCategories">{{ errorCategories.message }}</div>
      <div v-else :class="flex({ align: 'center', gap: 3 })">
        <router-link
          to="/"
          :class="
            css({
              display: 'inline-flex',
              alignItems: 'center',
              px: 5,
              py: 1.5,
              bg: 'gray.900',
              color: 'white',
              rounded: 'full',
            })
          "
        >
          All
        </router-link>
        <template v-if="dataCategories">
          <template v-for="category in dataCategories.data">
            <router-link
              :to="`/category/${category.slug}`"
              :class="
                css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 5,
                  py: 1.5,
                  bg: 'gray.100',
                  color: 'gray.700',
                  rounded: 'full',
                })
              "
            >
              {{ category.name }}
            </router-link>
          </template>
        </template>
      </div>
    </div>
    <div>
      <div v-if="loadingProduct">Loading...</div>
      <div v-else-if="errorProduct">{{ errorProduct.message }}</div>
      <template v-else>
        <div v-if="dataProduct" :class="grid({ columns: 3, gap: 6 })">
          <template v-for="product in dataProduct.data">
            <Product :product="product" />
          </template>
        </div>
      </template>
    </div>
  </BaseLayout>
</template>

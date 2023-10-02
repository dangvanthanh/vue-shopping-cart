<script setup lang="ts">
import { useRequest } from "alova";
import { grid } from "../../styled-system/patterns";
import BaseLayout from "@/layouts/BaseLayout.vue";
import Product from "@/components/Product.vue";
import Categories from "@/components/Categories.vue";
import ProductSkeleton from "@/components/ProductSkeleton.vue";
import { getProducts } from "@/api";

const { loading, data: products, error } = useRequest(getProducts);
</script>

<template>
  <BaseLayout>
    <Categories category="/" />
    <div
      v-if="loading"
      :class="
        grid({
          columns: { base: 1, md: 2, lg: 3 },
          gap: { base: 4, md: 5, lg: 6 },
        })
      "
    >
      <template v-for="_ in 6">
        <ProductSkeleton />
      </template>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <template v-else>
      <div
        v-if="products"
        :class="
          grid({
            columns: { base: 1, md: 2, lg: 3 },
            gap: { base: 4, md: 5, lg: 6 },
          })
        "
      >
        <template v-for="product in products">
          <Product :product="product" />
        </template>
      </div>
    </template>
  </BaseLayout>
</template>

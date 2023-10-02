<script setup lang="ts">
import { useRequest } from "alova";
import { grid } from "../../styled-system/patterns";
import BaseLayout from "@/layouts/BaseLayout.vue";
import Product from "@/components/Product.vue";
import Categories from "@/components/Categories.vue";
import ProductSkeleton from "@/components/ProductSkeleton.vue";
import { getProducts } from "@/api";

const { loading, data, error } = useRequest(getProducts);
</script>

<template>
  <BaseLayout>
    <Categories category="/" />
    <div v-if="loading" :class="grid({ columns: 3, gap: 6 })">
      <template v-for="_n in 6">
        <ProductSkeleton />
      </template>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <template v-else>
      <div v-if="data" :class="grid({ columns: 3, gap: 6 })">
        <template v-for="product in data.data">
          <Product :product="product" />
        </template>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useRequest } from "alova";
import { grid } from "../../styled-system/patterns";
import BaseLayout from "@/layouts/BaseLayout.vue";
import Product from "@/components/Product.vue";
import ProductSkeleton from "@/components/ProductSkeleton.vue";
import Categories from "@/components/Categories.vue";
import { getProductsByCategory } from "@/api";

const route = useRoute();
let category = route.params.category;

let { loading, data, error } = useRequest(
  getProductsByCategory(category as string)
);

watch(
  () => route.params.category,
  async (newCategory) => {
    const { data: newData, onSuccess } = useRequest(
      getProductsByCategory(newCategory as string)
    );

    onSuccess(() => {
      data.value = newData.value;
    });

    category = newCategory;
  }
);
</script>

<template>
  <BaseLayout>
    <Categories :category="(category as string)" />
    <div v-if="loading" :class="grid({ columns: 3, gap: 6 })">
      <template v-for="_n in 6">
        <ProductSkeleton />
      </template>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <div v-if="data" :class="grid({ columns: 3, gap: 6 })">
        <template v-for="product in data.data">
          <Product :product="product" />
        </template>
      </div>
    </div>
  </BaseLayout>
</template>

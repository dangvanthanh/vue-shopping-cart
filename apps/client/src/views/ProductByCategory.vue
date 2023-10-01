<script setup lang="ts">
import { useRoute } from "vue-router";
import { createAlova, useRequest } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import VueHook from "alova/vue";
import { css } from "../../styled-system/css";
import { flex, grid } from "../../styled-system/patterns";
import Layout from "@/layouts/Layout.vue";
import Product from "@/components/Product.vue";
import { watch } from "vue";

const alovaInstance = createAlova({
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  responded: (response) => response.json(),
});

const route = useRoute();
const category = route.params.category;

let {
  loading: loadingCategories,
  data: dataCategories,
  error: errorCategories,
} = useRequest(alovaInstance.Get("http://localhost:8000/categories"));


let {
  loading: loadingProduct,
  data: dataProduct,
  error: errorProduct,
} = useRequest(alovaInstance.Get(`http://localhost:8000/products/${category}`));

watch(
  () => route.params.category,
  async (newCategory) => {
    console.log(newCategory);
  }
);
</script>

<template>
  <Layout>
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
              bg: 'gray.100',
              color: 'gray.700',
              rounded: 'full',
            })
          "
        >
          All
        </router-link>
        <template v-for="cat in dataCategories.data">
          <router-link
            :to="`/category/${cat.slug}`"
            :class="
              css({
                display: 'inline-flex',
                alignItems: 'center',
                px: 5,
                py: 1.5,
                bg: cat.slug === category ? 'gray.900' : 'gray.100',
                color: cat.slug === category ? 'white' : 'gray.700',
                rounded: 'full',
              })
            "
          >
            {{ cat.name }}
          </router-link>
        </template>
      </div>
    </div>
    <div>
      <div v-if="loadingProduct">Loading...</div>
      <div v-else-if="errorProduct">{{ errorProduct.message }}</div>
      <div v-else :class="grid({ columns: 3, gap: 6 })">
        <template v-for="product in dataProduct.data">
          <Product :product="product" />
        </template>
      </div>
    </div>
  </Layout>
</template>

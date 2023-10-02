<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useRequest } from "alova";
import { css } from "../../styled-system/css";
import { flex, grid } from "../../styled-system/patterns";
import BaseLayout from "@/layouts/BaseLayout.vue";
import Product from "@/components/Product.vue";
import { getCategories, getProductsByCategory } from "@/api";

const route = useRoute();
let category = route.params.category;

let {
  loading: loadingCategories,
  data: dataCategories,
  error: errorCategories,
} = useRequest(getCategories);

let {
  loading: loadingProducts,
  data: dataProducts,
  error: errorProducts,
} = useRequest(getProductsByCategory(category as string));

watch(
  () => route.params.category,
  async (newCategory) => {
    const { data, onSuccess } = useRequest(
      getProductsByCategory(newCategory as string)
    );

    onSuccess(() => {
      dataProducts.value = data.value;
    });

    category = newCategory;
  }
);
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
              bg: 'gray.100',
              color: 'gray.700',
              rounded: 'full',
            })
          "
        >
          All
        </router-link>
        <template v-if="dataCategories">
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
        </template>
      </div>
    </div>
    <div>
      <div v-if="loadingProducts">Loading...</div>
      <div v-else-if="errorProducts">{{ errorProducts.message }}</div>
      <div v-else>
        <div v-if="dataProducts" :class="grid({ columns: 3, gap: 6 })">
          <template v-for="product in dataProducts.data">
            <Product :product="product" />
          </template>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

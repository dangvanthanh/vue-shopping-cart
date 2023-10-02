<script setup lang="ts">
import { useRequest } from "alova";
import { useRoute } from "vue-router";
import ProductDetail from "@/components/ProductDetail.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { getProductById } from "@/api";

const route = useRoute();
const id = route.params.id;

const { loading, data, error } = useRequest(getProductById(id as string));
</script>

<template>
  <BaseLayout>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <template v-if="data">
        <ProductDetail :product="data.data" />
      </template>
    </div>
  </BaseLayout>
</template>

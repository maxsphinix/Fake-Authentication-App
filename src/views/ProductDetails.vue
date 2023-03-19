<template>
  <div>
    <h2>Product {{ productId }}</h2>
    <p>{{ productData }}</p>
    <p v-if="currentUser">Current User: {{ currentUser.email }}</p>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import useCurrentUser from "../useCurrentUser";

export default {
  setup() {
    const { currentUser } = useCurrentUser();
    const instance = getCurrentInstance();
    const productId = parseInt(instance.proxy.$route.params.id);
    const productData = `https://dummyjson.com/products/${productId}`;
    return {
      currentUser,
      productId,
      productData,
    };
  },
};
</script>



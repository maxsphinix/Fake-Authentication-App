<template>
  <div id="app">
    <nav class="menu">
      <router-link to="/login" v-if="!$store.getters.isAuthenticated"
        >Login</router-link
      >
      <router-link to="/signup" v-if="!$store.getters.isAuthenticated"
        >Signup</router-link
      >
      <router-link to="/products" v-if="$store.getters.isAuthenticated"
        >Products</router-link
      >
      <router-link to="/" exact>Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

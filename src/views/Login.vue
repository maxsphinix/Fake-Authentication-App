<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>
        Email:
        <input type="email" class="form-input" v-model="email" required />
      </label>
      <label>
        Password:
        <input type="password" class="form-input" v-model="password" required />
      </label>
      <button type="submit" class="form-button">Login</button>
    </form>
  </div>
</template>
  
  <script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          // redirect the user to the products page
          this.$router.push("/products");
        })
        .catch((error) => {
          // handle the error
          console.log(error);
        });
    },
  },
};
</script>
  
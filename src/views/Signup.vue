<template>
  <div class="container">
    <h1>Signup</h1>
    <form @submit.prevent="signup">
      <label>
        Name:
        <input type="text" class="form-input" v-model="name" required />
      </label>
      <label>
        Email:
        <input type="email" class="form-input" v-model="email" required />
      </label>
      <label>
        Password:
        <input type="password" class="form-input" v-model="password" required />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          class="form-input"
          v-model="confirmPassword"
          required
        />
      </label>
      <button type="submit" class="form-button">Signup</button>
    </form>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  name: "SignupForm",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      isLoading: false,
    };
  },

  methods: {
    async signup() {
      this.isLoading = true;
      try {
        axios.post("/api/signup", {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.isLoading = false;
        this.$router.push("/login");
      } catch (error) {
        this.isLoading = false;
        this.errorMessage = error.response.data.message;
      }
    },
  },
};
</script>

  
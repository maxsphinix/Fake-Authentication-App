<template>
  <div class="products">
    <h1>Our Products</h1>
    <div class="product-cards">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.images" :alt="product.title" />
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <span>{{ product.price }}</span>
        <button @click="goToProductDetails(product.id)">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsPage",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    goToProductDetails(id) {
      this.$router.push({ name: "ProductDetails", params: { id } });
    },
  },
  mounted() {
    console.log("mounted");
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => (this.products = Object.values(data)))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
/* add styles for product cards */
.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-card h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

.product-card p {
  font-size: 14px;
  margin-bottom: 10px;
}

.product-card span {
  font-size: 16px;
  font-weight: bold;
  color: #007bff;
  margin-top: auto;
}

.product-card button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: auto;
}

.product-card button:hover {
  background-color: #0069d9;
}
</style>



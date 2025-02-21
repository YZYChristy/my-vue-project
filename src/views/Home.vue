<template>
  <div class="home">
    <h1>Cross-Border E-Commerce</h1>
    <div class="products">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        @add-to-cart="addToCart" />
    </div>
    <Cart />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Cart from '../components/Cart.vue'
import axios from 'axios'
export default {
  components: {
    ProductCard,
    Cart
  },
  data() {
    return {
      products: [
        {
          name: 'Laptop',
          description: 'High-performance laptop for all your needs.',
          price: '1200.00',
          currency: 'USD',
          image: 'https://via.placeholder.com/200'
        },
        {
          name: 'Smartphone',
          description: 'Latest model smartphone with great features.',
          price: '800.00',
          currency: 'USD',
          image: 'https://via.placeholder.com/200'
        }
      ]
    }
  },
  methods: {
    addToCart(product) {
      this.$refs.cart.addToCart(product);
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h1 {
  font-size: 36px;
  color: #333;
}
</style>


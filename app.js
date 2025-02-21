// frontend/app.js
new Vue({
  el: '#app',
  data: {
    products: []
  },
  mounted() {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  },
  methods: {
    addToCart(productId) {
      const userId = 1; // 假设用户ID为1
      fetch('http://localhost:5000/user_behavior', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
          action: 'click'
        })
      }).then(response => response.json())
        .then(data => {
          alert(data.message);
        });
    }
  }
});

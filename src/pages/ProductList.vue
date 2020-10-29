<template>
  <div>
    <h1 class="product-list-header">Product List</h1>
    <section class="product-list-root">
      <main class="products-container">
        <ProductCard
          class="product-card"
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add="addProductToCart(product)"
        ></ProductCard>
        <button class="see-more-button" @click="seeMoreProducts">See More</button>
      </main>
      <aside>
        <h2>Cart</h2>
        <div class="cart-items-container">
          <ShoppingCart
            v-for="item in items"
            :key="item.id"
            :item="item"
            @add-from-cart="addProductToCartFromCart(item)"
            @remove="removeProductFromCart(item)"
          ></ShoppingCart>
        </div>
        <div class="total-container">
          <p class="total-total-amount">Total Amount:</p>
          <p class="total-price">{{total}} $</p>
        </div>
        <button class="checkout-button">Make a payment</button>
      </aside>
    </section>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import ShoppingCart from "@/components/ShoppingCart";
export default {
  name: "ProductList",
  components: {
    ProductCard,
    ShoppingCart
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    products() {
      return this.$store.getters.availableProducts;
    },
    items() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartSumUp;
    }
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => (this.loading = false));
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
    addProductToCartFromCart(product) {
      this.$store.dispatch("addProductToCartFromCart", product);
    },
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
    seeMoreProducts() {
      this.$store.dispatch("seeMoreProducts");
    }
  }
};
</script>

<style scoped>
.product-list-root {
  background-color: white;
}
.product-list-header {
  padding-top: 20px;
  color: white;
}

.cart-items-container {
  display: flex;
  flex-direction: column;
}
.total-container {
  display: flex;
  justify-content: space-between;
}
.total-total-amount {
  margin-left: 50px;
}
.total-price {
  color: rgba(247, 150, 30, 0.8953771289537713);
  width: 15%;
}
ul {
  list-style-type: none;
  padding: 0;
}
.checkout-button {
  color: white;
  border: none;
  border-radius: 2%;
  font-size: 20px;
  margin: 20px;
  height: 50px;
  width: 90%;
  background: linear-gradient(
    90deg,
    rgba(247, 150, 30, 0.8953771289537713) 0%,
    rgba(255, 60, 0, 1) 100%
  );
}

.products-container {
  display: grid;
  grid-template-columns: 48% 48%;
  grid-gap: 4%;
  padding: 20px;
  margin-bottom: 100px;
}

@media (min-width: 768px) {
  .products-container {
    grid-template-columns: 20% 20% 20% 20%;
    grid-gap: 5%;
  }
}

@media (min-width: 1200px) {
  .products-container {
    grid-template-columns: 20% 20% 20% 20%;
    grid-gap: 5%;
    margin-right: 0;
    padding-right: 0;
    width: 70%;
  }
  .checkout-button {
    width: 50%;
    font-size: 15px;
  }
  .product-list-root {
    display: flex;
    flex-direction: row;
  }
  aside {
    width: 30%;
  }
  .cart-items-container {
    width: 100%;
  }
  .item-card-container {
    margin-right: 5%;
  }
  .total-container {
    margin-right: 5%;
  }
  .see-more-button {
    width: 60px;
    height: 60px;
    align-self: end;
  }

}
</style>

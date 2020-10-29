<template>
  <div class="card">
    <img class="img-size" :src="product.image_url" />
    <h2 class="product-title">{{product.productName}}</h2>
    <p v-if="desktop">{{product.productDescription}}</p>
    <div class="price-stock-container">
      <p class="product-price">{{product.price}}$</p>
      <p class="product-stock">{{product.stock}} left</p>
      <button class="product-add" @click="$emit('add')">+ add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
    desktop: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border: solid 1px lightgray;
  border-radius: 2%;
}
.img-size {
  width: 100%;
  height: auto;
  border-radius: 2%;
}

.price-stock-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 5px;
}
.product-title {
  text-align: center;
  margin-left: 5px;
  padding: 0;
  margin-bottom: 0;
}
.product-price {
  color: #0077b6;
}
.product-stock {
    color: rgba(247, 150, 30, 0.8953771289537713);
}
.product-add {
  border: solid 1px lightgray;
  border-radius: 10%;
  height: 50%;
  align-self: center;
  background-color: white;
}

</style>

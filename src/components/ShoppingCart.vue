<template>
  <ul class="item-card-container">
    <li>
      <img :alt="item.productName" :src="item.image_url" />
    </li>
    <li class="item-main-info">
      <h3 class="item-title">{{item.productName}}</h3>
      <div class="quantity-container">
        <button class="quantity-button" @click="$emit('remove')">-</button>
        <li v-if="item.quantity">{{item.quantity}}</li>
        <button class="quantity-button" @click="$emit('add-from-cart')">+</button>
      </div>
    </li>
    <li class="item-price">{{item.price}} $</li>
  </ul>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    item: Object
  }
};
</script>

<style scoped>
img {
  width: 120px;
  height: auto;
  padding: 10px;
}

.item-card-container {
  display: grid;
  grid-template-columns: 40% 40% 10%;
  grid-gap: 2%;
}

.item-main-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}
.item-title {
  margin: 0;
  text-align: left;
}
.quantity-container {
  display: flex;
  justify-content: space-between;
  border: solid 1px lightgray;
  width: 45%;
}

.quantity-button {
  border: none;
  background-color: white;
}

.item-price {
  align-self: center;
  color: #0077b6;
}

@media (min-width: 768px) {
  .img {
    width: 180px;
  }
  .item-main-info {
    width: 90%;
}
.quantity-container {
  width: 15%;
}
.item-card-container {
  padding-left: 50px;
}
}
@media (min-width: 1200px) {
  .img {
    width: 200px;
  }
  .item-title{
    font-size: 15px;
  }
  .quantity-container {
    width: 60%;
  }
}
</style>
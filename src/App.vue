<template>
  <div id="app">
    <ProductList class="product-list"/>
  </div>
</template>

<script>
import ProductList from './pages/ProductList'

export default {
  name: 'app',
  components: {
    ProductList
  }
}
</script>

<style>
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 15px;
  color: black;
  background-color: #f4a261;
  padding: 20px;
  height: 100vh;
}
#app {
  height: 100vh;
}
.product-list {
  height: 100%;
}
* {
  box-sizing: border-box;
}
</style>

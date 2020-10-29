<template>
  <div id="app">
    <ProductList/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 15px;
  color: black;
  background-color: #f4a261;
  padding: 20px;
  height: 100vh;
}
* {
  box-sizing: border-box;
}
</style>

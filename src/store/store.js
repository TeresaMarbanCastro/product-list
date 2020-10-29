import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: [],
    products: [],
    cart: [],
    total: 0,
  },
  getters: {
    availableProducts(state) {
      return state.products.filter((product) => product.stock > 0);
    },
    cartProducts(state) {
      return state.cart;
    },
    cartSumUp(state) {
      return state.total
    }
  },
  actions: {
    fetchProducts({ commit }) {
      axios
        .get("http://localhost:3000/grocery")
        .then((response) => {
          commit("setAllProducts", response.data);
          commit("setProducts", response.data.slice(0, 7));
        })
        .catch(() => console.log("Unavailable Product"));
    },
    addProductToCart(context, product) {
      if (product.stock > 0) {
        const cartItem = context.state.cart.find((i) => i.id === product.id);
        if (!cartItem) {
          context.commit("pushProductToCart", product);
        } else {
          context.commit("increaseQuantity", cartItem);
        }
        context.commit("decreaseProductStock", product);
        context.commit("updateTotal");
        axios
          .patch(`http://localhost:3000/grocery/${product.id}`, product)
          .then((response) => response.status)
          .catch(() => console.log("Error"));
      }
    },
    addProductToCartFromCart(context, item) {
      const productItem = context.state.products.find((i) => i.id === item.id);
      if (productItem.stock > 0) {
        context.commit("increaseQuantity", item);
        context.commit("decreaseProductStock", productItem);
        context.commit("updateTotal");
      }
      axios
        .patch(`http://localhost:3000/grocery/${item.id}`, productItem)
        .then((response) => response.status)
        .catch(() => console.log("Error"));
    },
    removeProductFromCart(context, item) {
      const productItem = context.state.products.find((i) => i.id === item.id);
      context.commit("decreaseQuantity", item);
      context.commit("increaseProductStock", productItem);
      context.commit("updateTotal");
      if (item.quantity === 0) {
        context.commit("removeProductFromCart", item);
      }
      axios
        .patch(`http://localhost:3000/grocery/${item.id}`, productItem)
        .then((response) => response.status)
        .catch(() => console.log("Error"));
    },
    seeMoreProducts(context) {
      const end = context.state.products.length;
      const newProducts = context.state.allProducts.slice(0, end + 2);
      context.commit("setProducts", newProducts);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setAllProducts(state, allProducts) {
      state.allProducts = allProducts;
    },
    pushProductToCart(state, product) {
      state.cart.push({ ...product, quantity: 1 });
    },
    removeProductFromCart(state, product) {
      state.cart = state.cart.filter((i) => i.id !== product.id);
    },
    increaseQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    decreaseQuantity(state, cartItem) {
      cartItem.quantity--;
    },
    increaseProductStock(state, product) {
      product.stock++;
    },
    decreaseProductStock(state, product) {
      product.stock--;
    },
    updateTotal(state){
      state.total= state.cart.reduce(
        (acc, i) => acc + i.quantity * i.price,
        0
      );
    }
  },
});

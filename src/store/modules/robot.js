import axios from "axios";

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: {
      heads: [], arms: [], bases: [], torsos: []
    }
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    }
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(i => i.head.onSale);
    }
  },
  actions: {
    getParts({ commit }) {
      axios.get("/api/parts")
        .then(r => commit("updateParts", r.data))
        .catch(e => console.error(e));
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      axios.post("/api/cart", cart)
        .then(() => commit("addRobotToCart", robot))
        .catch(e => console.error(e));
    }
  }
};

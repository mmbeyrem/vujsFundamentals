import axios from "axios";

export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {

  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    sinIn({ commit }) {
      axios.post("/api/signIn")
        .then(r => commit("updateCurrentUser", r.data))
        .catch(e => console.log(e));
    }
  }
};

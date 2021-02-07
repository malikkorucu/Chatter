import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    img: "",
    onlines: [],
    socketUrl: "http://localhost:5000",
  },
  getters: {
    getImg(state) {
      return state.img;
    },
    getOnlines(state) {
      return state.onlines;
    },
    getSocketUrl(state) { 
      return state.socketUrl
    }
  },
  mutations: {
    setImg(state, img) {
      state.img = img;
    },
    setOnlines(state, onlines) {
      state.onlines = onlines;
    },
  },
  actions: {},
  modules: {},
});

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({

  state: {
    onPage: 1,
    getGender: '',
    page: 1,
  },
  mutations: {
    setOnPage (state, count) {
      state.onPage = count;
    },
    addToOnPage (state, add) {
      state.onPage += add;
    },
    setGender (state, gender) {
      state.getGender = gender;
    },
    setPage (state, value) {
      let newWalue = state.page + value;
      if (newWalue <= 0) {
        newWalue = 1;
      }
      state.page = newWalue;
    }
  }
});

export default store

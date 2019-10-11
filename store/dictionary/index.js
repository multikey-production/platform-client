export default {
  state() {
    return {
      dictionary: {}
    }
  },
  mutations: {
    set(state, payload) {
      state.dictionary = payload;
    }
  },
  actions: {
    async findOne({
      commit
    }, payload) {
      const response = await this.$axios.$get('/dictionaries/findone', payload).catch(err => {
        console.log(err)
      });

      if (response) {
        commit('set', JSON.parse(response.value));
      }
    }
  },
  getters: {
    get(state) {
      return state.dictionary;
    }
  },
  namespaced: true
};

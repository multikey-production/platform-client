export default {
  state() {
    return {
      notification: {
        isActive: false,
        type: 'success',
        message: 'Success'
      }
    }
  },
  mutations: {
    set(state, payload) {
      state.notification = payload;
    }
  },
  actions: {
    fetch({
      commit
    }, payload) {
      commit('set', payload);
      const closeNotification = {
        isActive: false
      };
      setTimeout(() => {
        commit('set', closeNotification)
      }, 3000);
    },

    async nuxtServerInit({
      commit
    }, {
      req
    }) {
      let subdomen = req.headers.host.split('.')[0];

      if (subdomen === req.headers.host || Number.isInteger(parseInt(subdomen))) {
        subdomen = 'ru';
      }

      await this.dispatch("dictionary/findOne", {
        params: {
          filter: {
            where: {
              lang: subdomen
            }
          }
        }
      });
    }
  },
  getters: {
    get(state) {
      return state.notification;
    }
  },
  namespaced: true
};

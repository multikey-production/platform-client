import Vuex from 'vuex';
import common from './common';
import dictionary from './dictionary';

const store = () => {
  return new Vuex.Store({
    modules: {
      common,
      dictionary
    }
  })
}

export default store;

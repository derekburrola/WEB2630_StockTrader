//DONE: Import vue and name it Vue
import Vue from 'vue'
//DONE: Import vuex and name it Vuex
import Vuex from 'vuex'

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';

//DONE Initialize Vuex using Vue.use()
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio
  }
})
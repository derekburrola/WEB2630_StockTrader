import stocks from '../../data/stocks';

//DONE: Create const called state that is a data object{}
//DONE: Create an array called stocks inside the state object
const state = {
  stocks: []
}

//DONE: Create const called mutations that is a data object{}
//DONE: Inside mutations object create a vuex method called 'SET_STOCKS' that takes two parameters (state, stocks)
//DONE: Inside 'SET_STOCKS' set state.stocks equal to stocks
//DONE: Inside mutations object create a vuex method called 'RND_STOCKS' that takes one parameter (state)
//DONE: Inside 'RND_STOCKS' your will create a state.stocks.forEach that is a point function that passes stock
//DONE: Set stock.price equal to Math.round() passing stock.price * (1 + Math.random() - 0.5)
const mutations = {
    SET_STOCKS (state, stocks){
      state.stocks = stocks
    },
    RND_STOCKS(state){
      state.stocks.forEach( stock =>{
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
      })
    }
}


const actions = {

  // Note: Use buyStock as reference for the comments below within actions
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },

  //DONE: Create initStocks that is a pointer function that passes {commit}
  //DONE: Use the commit method passing 'SET_STOCKS' and stocks
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks)
  },


  //DONE: Create randomizeStocks that is a pointer function that passes {commit}
  //DONE: Use the commit method passing 'RND_STOCKS'
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS')
  }
};

//DONE: Create const called getters that is a data object{}
//DONE: Inside getters object create stocks that is a pointer function that passes the state
//DONE: Return state.stocks
const getters = {
  stocks: (state) =>{
    return state.stocks;
  }
}

export default {
  //DONE: Export the const state, mutations, actions, and getters
  state,
  mutations,
  actions,
  getters
};
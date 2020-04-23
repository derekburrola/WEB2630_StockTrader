//DONE: Import vue and name it Vue
import Vue from 'vue'

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        // DONE: Create const call stocks that is equal to data.stocks
        const stocks = data.stocks
        // DONE: Create const call funds that is equal to data.funds
        const funds = data.funds
        // DONE: Create const call stockPortfolio that is equal to data.stockPortfolio
        const stockPortfolio = data.stockPortfolio

        //DONE: Create a const called portfolio that is a data object {}
        //DONE: Inside portfolio add stockPortfolio and funds
        const portfolio = {
          stockPortfolio, 
          funds
        }
        

        //ToDo: using vuex commit method pass 'SET_STOCKS' and stocks
        commit('SET_STOCKS', stocks)
        //ToDo: using vuex commit method pass 'SET_PORTFOLIO' and portfolio
        commit('SET_PORTFOLIO', portfolio)
      }
    });
};
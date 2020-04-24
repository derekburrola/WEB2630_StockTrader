//DONE: Create const called state that is a data object{}
//DONE: Create funds and set it to 10000
//DONE: Create an array called stocks and leave it empty
const state = {
  funds: 10000,
  stocks: []
}


//DONE: Create const called mutations that is a data object{}
//DONE: Inside mutations object create a vuex method called 'BUY_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
//DONE: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
//DONE: If (record) then set record.quantity += quantity
//DONE: Else push id: stockId and quantity: quantity to state.stocks
//DONE: Set state.funds -= stockPrice * quantity
const mutations = {
  BUY_STOCK(state, {stockId, quantity, stockPrice}){
    const record = state.stocks.find(element => element.id == stockId)
    if(record){
      record.quantity += quantity
    }
    else{
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity
  },
  SELL_STOCK(state, {stockId, quantity, stockPrice}){
    const record = state.stocks.find(element => element.id == stockId);
    if(record.quantity > quantity){
      record.quantity -= quantity
    }
    else{
      state.stocks.splice(state.stocks.indexOf(record),1);
    }
    state.funds += stockPrice * quantity
  },
  SET_PORTFOLIO(state, portfolio){
    state.funds = portfolio.funds
    portfolio.stockPortfolio ? state.stocks = portfolio.stockPortfolio : [];
    //state.stocks = portfolio.stockPortfolio ? [] : portfolio.stockPortfolio;
  }    
}

//DONE: Inside mutations object create a vuex method called 'SELL_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
//DONE: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
//DONE: If (record.quantity > quantity) then set record.quantity -= quantity
//DONE: Else set state.stocks.splice(state.stocks.indexOf(record, 1))
//DONE: Set state.funds += stockPrice * quantity

//DONE: Inside mutations object create a vuex method called 'SET_PORTFOLIO' that takes two parameters (state, portfolio}
//DONE: Set state.funds equal t portfolio.funds
//DONE: Set state.stocks equal to portfolio.stockPortfolio if portfolio.stockPortfolio else [] (Use if else using ? and :)


//DONE: Create const called actions that is a data object()
//DONE: Create sellStock that passes ({commit}, order)
//  DONE: Use the commit method passing 'SELL_STOCK' and order
const actions={
  sellStock({ commit }, order){
    commit('SELL_STOCK', order)
  }
}

//DONE: Create const called getters that is a data object{}
//DONE: Inside getters object create stockPortfolio method that takes two parameters (state, getters)
//DONE: return state.stocks.map() that is a pointer function that passes stock
//DONE: Create const called record that is equal to getters.stocks.find(element => element.id == stock.id)
//DONE: Return an object
//DONE: Set id to stock.id
//DONE: Set quantity to stock.quantity
//DONE: Set name to record.name
//DONE: Set price to record.price
//DONE: Create funds method that passes state
//DONE: Return state.funds
const getters={
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
        return {
          id: stock.id, 
          quantity: stock.quantity,
          name: record.name,
          price: record.price
        }
    });
  },
  funds(state){
    return state.funds;
  }
};

export default {
  //DONE: Export the const state, mutations, actions, and getters
  state,
  mutations,
  actions,
  getters
}
//DONE: Create const called state that is a data object{}
//DONE: Create funds and set it to 10000
//DONE: Create an array called stocks and leave it empty
const state = {
  funds : 10000,
  stocks : []
}


//DONE: Create const called mutations that is a data object{}
//ToDo: Inside mutations object create a vuex method called 'BUY_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
//ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
//ToDo: If (record) then set record.quantity += quantity
//ToDo: Else push id: stockId and quantity: quantity to state.stocks
//ToDo: Set state.funds -= stockPrice * quantity
const mutations = {

    
}

//ToDo: Inside mutations object create a vuex method called 'SELL_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
//ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
//ToDo: If (record.quantity > quantity) then set record.quantity -= quantity
//ToDo: Else set state.stocks.splice(state.stocks.indexOf(record, 1))
//ToDo: Set state.funds += stockPrice * quantity

//ToDo: Inside mutations object create a vuex method called 'SET_PORTFOLIO' that takes two parameters (state, portfolio}
//ToDo: Set state.funds equal t portfolio.funds
//ToDo: Set state.stocks equal to portfolio.stockPortfolio if portfolio.stockPortfolio else [] (Use if else using ? and :)


//ToDo: Create const called actions that is a data object()
//ToDo: Create sellStock that passes ({commit}, order)
//  ToDo: Use the commit method passing 'SELL_STOCK' and order
const actions={
  
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
  stockPortolio (state, getters) {
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
  //ToDo: Export the const state, mutations, actions, and getters
  state,
  mutations,
  actions,
  getters
}
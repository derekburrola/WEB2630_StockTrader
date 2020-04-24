<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <!--DONE: Create a router-link that goes to '/' root, add class navbar-brand and add Stock Trader text-->
        <router-link 
            to="/"
            class="navbar-brand"
            ><a>Stock Trader</a></router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <!--DONE: Create router-link that goes to '/portfolio'-->
                    <!--DONE: set activeClass to "active", add tag attribute set to li, and add Portfolio text-->
          <router-link 
            to="/portfolio"
            tag="li"
            active-class="active"
            ><a>Portfolio</a></router-link>
          <!--DONE: Create router-link that goes to '/stocks'-->
                    <!--DONE: set activeClass to "active", add tag attribute set to li, and add Stocks text-->
          <router-link 
            to="/stocks"
            tag="li"
            active-class="active"
            exact
            ><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds:
          <!--ToDo: Call funds computed function and pipe the currency filter that is created in main.js-->
        </strong>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <!--DONE: Add click event to <a> that calls endDay method-->
            <a href="#" @click="endDay">End Day</a>
          </li>

          <!--ToDo: Inside <li> Bind to class using :class that passes an object {} called open and set it to isDropdownOpen-->
          <!--DONE: Add click event that toggles isDropdownOpen to true and false-->
          <li class="dropdown" @click="isDropdownOpen=!isDropdownOpen">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <!--DONE: Add click event that calls the saveData method-->
              <li><a href="#" @click="saveData">Save Data</a></li>
              <!--DONE: Add click event that calls the loadData method-->
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
//DONE: Import mapActions from vuex
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      //DONE: Create data object called isDropdownOpen and set it to false
      isDropdownOpen: false
    }
  },
  computed: {
    //DONE: Create a computed function called funds
    //DONE: Have funds() return this.$store.getters.funds
    funds(){
      return this.$store.getters.funds
    }
  },
  methods: {
    //DONE: Create ...mapActions method
    //DONE: Call randomizeStocks: 'randomizeStocks'
    //DONE: Call fetchData: 'loadData'
    ...mapActions({
      randomizeStocks:'randomizeStocks',
      fetchData: 'loadData'
    }),
    

    //DONE: Create endDay method
    //DONE: Call randomizeStocks()
    endDay(){
      this.randomizeStocks();
    },
    

    //DONE: Create SaveData method
    //TODO: Create const called data that holds an object
    //DONE: Set funds: to the $store getters funds
    //DONE: Set stockPortfolio: to the $store getters stockPortfolio
    //DONE: Set stocks: to the $store getters stocks
    //DONE: Outside the data object use $http, using .put pass 'data.json' and the data object
    saveData(){
      const data = {
        funds : this.$store.getters.funds,
        stockPortfolio : this.$store.getters.stockPortfolio,
        stocks : this.$store.getters.stocks,
      }
      this.$http.put('data.json', data)
    },
    

    //DONE: Create loadData method
    //DONE: Call fetchData()
    loadData(){
      this.fetchData()
    }
  }
}
</script>
<template>
  <div>
    stock test
    <!--DONE: Load app-stock component-->
    <app-stock
      v-for="stock in stocks"
      :key="stock"
      :stock="stock"
    ></app-stock>
    <!--DONE: Loop through stock in stocks using v-for-->
    <!--DONE: Bind to stock using : and pass stock from the v-for-->
  </div>
</template>

<script>
//DONE: Import Stock from ./Stock.vue
import Stock from './Stock.vue'

export default {
  //DONE: Initialize Stock component and name it appStock
  components:{
    appStock: Stock
  },

  computed: {
    //DONE: Create stocks computer method
    //DONE: Return $store.getters.stocks
    stocks(){
      return this.$store.getters.stocks;
    }
    
    
  }
}
</script>
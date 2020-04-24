<template>
  <div>
    <!--DONE: Load app-stock component-->
    <!--ToDo: Loop through stock in stocks using v-for-->
    <!--ToDo: Bind to stock using : and pass stock from the v-for-->
    <app-Stock
      v-for="stock in stocks"
      :key="stock"
      :stock="stock"
    >
    </app-Stock>
  </div>
</template>

<script>
//DONE: Import mapGetters from vuex
import { mapGetters } from 'vuex'
//DONE: Import Stock from ./Stock.vue
import Stock from './Stock.vue'

export default {
  computed: {
    //DONE: Create ...mapGetters method
    //DONE: Call stocks: 'stockPortfolio'
    ...mapGetters({
      stocks:'stockPortfolio',
    }),
    
    
  },

  //ToDo: Initialize Stock component and name it appStock
  components:{
    appStock: Stock
  }
}
</script>
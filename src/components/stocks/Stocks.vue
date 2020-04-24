<template>
  <div>
    stock test
    <!--DONE: Load app-stock component-->
    <app-stock></app-stock>
    <!--ToDo: Loop through stock in stocks using v-for-->
    <!--ToDo: Bind to stock using : and pass stock from the v-for-->
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
    //ToDo: Create stocks computer method
    // ToDo: Return $store.getters.stocks
    
  }
}
</script>
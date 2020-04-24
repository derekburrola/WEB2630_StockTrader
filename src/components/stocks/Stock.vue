<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          <!--DONE: Display the stock.name data object-->
          {{ stock.name }}
          <!--DONE: Inside <small> tags display Price: stock.price-->
            <small>Price: {{ stock.price }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <!--DONE: Inside input use v-model.number and pass quantity-->
          <!--DONE: Bind to class using : and pass object called danger that takes in insufficientFunds-->
          <input
            v-model.number="quantity"
            :class="{danger:insufficientFunds}"
            type="number"
            class="form-control"
            placeholder="Quantity"
          >
        </div>
        <div class="pull-right">
          <!--DONE: Inside the button add a click event that calls buyStock-->
          <!--DONE: Bind to disabled using : and set it equal to insufficientFunds || quantity is less than or equal to 0 || !Number.isInteger(quantity)-->
          <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity<=0 || !Number.isInteger(quantity)">
            <!--DONE: Display insufficientFunds data object and add if using ? 'Not Enough' else 'Buy'-->
            {{ insufficientFunds ? 'Not Enough' : 'Buy' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>

<script>
export default {
  //DONE: Set props equal to stock using array syntax
  props: ['stock'],
  data () {
    return {
      //DONE: Create data object called quantity and set it to 0
      quantity: 0
    }
  },
  computed: {
    //DONE: Create a computed function called funds
    //DONE: Have funds() return $store.getters.funds
    funds(){
      return this.$store.getters.funds;
    },

    //DONE: Create a computed function called insufficientFunds
    //DONE: Have insufficientFunds() return this.quantity * this.stock.price > this.funds
    insufficientFunds(){
      return (this.quantity * this.stock.price) > this.funds
    }

  },
  methods: {
    //DONE: Create buyStock method
    //DONE: Create const called order that holds an object
    //DONE: Set stockId: to this.stock.id
    //DONE: Set stockPrice: to this.stock.price
    //DONE: Set quantity: to this.quantity
    //DONE: Outside the data object $store.dispatch() passing 'buyStock' and order
    //DONE: Reset quantity to 0
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock',order)
      this.quantity = 0
    }
  }
}
</script>
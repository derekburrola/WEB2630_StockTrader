<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <!--DONE: Display the stock.name data object-->
                    {{ stock.name }}
                    <!--DONE: Inside <small> tags display Price: stock.price | Quantity stock.quantity-->
                        <small>Price: {{ stock.price }} | Quantity: {{ stock.quantity}} </small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <!--DONE: Inside input use v-model.number and pass quantity-->
                        <!--DONE: Bind to class using : and pass object called danger that takes in insufficientQuantity-->
                    <input
                            v-model.number="quantity"
                            :class="{danger:insufficientQuantity}"
                            type="number"
                            class="form-control"
                            placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <!--DONE: Inside the button add a click event that calls sellStock-->
                        <!--DONE: Bind to disabled using : and set it equal to insufficientQuantity || quantity is less than or equal to 0 || !Number.isInteger(quantity)-->
                    <button class="btn btn-success" @click="sellStock" :disabled="insufficientQuantity || quantity<=0 || !Number.isInteger(quantity)">
                        <!--ToDo: Display insufficientQuantity data object and add if using ? 'Not Enough' else 'Sell'-->
                        {{ insufficientQuantity ? 'Not Enough' : 'Sell' }}
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
    //DONE: Import mapActions from vuex
    import { mapActions } from 'vuex'

    export default {
        //DONE: Set props equal to stock using array syntax
        props: ['stock'],
        
        data() {
            return {
                //DONE: Create data object called quantity and set it to 0
                quantity: 0
            }
        },
        computed: {
            //DONE: Create a computed function called insufficientQuantity
                //DONE: Have insufficientQuantity() return this.quantity > this.stock.quantity
            insufficientQuantity(){
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            //DONE: Create ...mapActions method
                //DONE: Call placeSellOrder: 'sellStock'
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),

            // //DONE: Create sellStock method
            //     //DONE: Create const called order that holds an object
            //         //DONE: Set stockId: to this.stock.id
            //         //DONE: Set stockPrice: to this.stock.price
            //         //DONE: Set quantity: to this.quantity
            // //DONE: Outside the data object pass the data object order to placeSellOrder()
            // //DONE: Reset quantity to 0
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.placeSellOrder(order)
                this.quantity = 0
            }
        }
    }
</script>
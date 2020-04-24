<template>
  <div class="container">
    <!--DONE: Load app-header-->
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <transition
          name="slide"
          mode="out-in"
        >
          <!--DONE: Load router-view-->
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
//DONE: Import Header Component
import Header from './components/Header.vue'

export default {
  //DONE: Initialize Header component and name it appHeader
  components: {
    appHeader: Header
  },
  //DONE: On page creation dispatch 'initStocks' to the vuex $store
  created(){
    this.$store.dispatch('initStocks');
  }
  
}
</script>

<style>
body {
  padding: 30px;
}

/*ToDo: Create slide-in effect for enter-active*/
/*ToDo: Create slide-in effect for leave-active*/

/*ToDo: Create Keyframes for slide-in, remember to include from and to*/
/*You can use any settings*/

/*ToDo: Create Keyframes for slide-out, remember to include from and to*/
/*You can use any settings*/

    .leave-active{
        transition: opacity 1s ease;
        opacity: 0;
        animation: slide-in 1s ease-out forwards;
    }
    .enter-active{
        animation: slide-in 1s ease-out forwards;
    }

    @keyframes slide-out{
        0%{
            transform: translateX(-800px);
        }
        100%{
            transform: translateX(0);
        }
    }
    @keyframes slide-in{
         0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(1px);
        }
    }
</style>


//DONE: Import Home Component
import Home from './components/Home.vue'
//DONE: Import portfolio/Portfolio Component
import Portfolio from './components/portfolio/Portfolio.vue'
//DONE: Import stocks/Stocks Component
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
  //DONE: Create Route for Home Component with root (/) path
  { path: '/', component: Home},
  //DONE: Create Route for Portfolio Component
  { path: '/portfolio', component: Portfolio},
  //DONE: Create Route for Stocks Component
  { path: '/stocks', component: Stocks},
];

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import sellers from './modules/seller'
import goods from './modules/goods'
import ratings from './modules/ratings'
Vue.use(Vuex);
export default new Vuex.Store({
         getters,
         actions,
         modules:{
             sellers,
             goods,
             ratings
         }

});

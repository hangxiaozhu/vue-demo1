<template>
  <div id="app">
<v-header></v-header>
    <div class="tab"> 
      <div class="tab-item">
<router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
<router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>
        </div>    
    </div>
   
   <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import './css/reset.css'
export default {
  components:{
    'v-header':Header,
  }
}
</script>
<style lang="less" scoped>
#app .tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid rgba(7,17,27,0.1);
  .tab-item{
    flex: 1;
    text-align: center;
    & > a {
      font-size: 14px;
      display: block;
      &.active{
        color: yellowgreen;
        font-size: 16px;
      }
    }
  }
  
}
  

</style>

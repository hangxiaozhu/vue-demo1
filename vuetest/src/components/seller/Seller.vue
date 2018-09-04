<template>
<div class="rate">
     <h2>{{seller.name}}</h2>
     <br>
    <h2>{{seller.bulletin}}</h2>
     <br>
      <ul>
        <li class="imgss"v-for = "item in seller.pics">
            <img :src="item" alt="">
        </li>
    </ul>
   
</div>

    
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   	created(){
			this.$store.dispatch('getSeller');
		},
		computed:mapGetters([
			'seller'
		])
}
</script>

<style lang="less" scoped>
ul{
    width: 100%;
}
li:nth-child(2n+1){
    float: left;
    width: 50%;
}
li:nth-child(2n){
    float: right;
    width: 50%;
}
</style>


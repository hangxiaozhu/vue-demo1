<template>
	<div class="ratings">
		<div class="menu-wrapper">
			<cube-scroll>  
			<ul>
				<li v-for="item in ratings">
                    <img :src="item.avatar" alt="">
					{{item.username}}
					
                    
                    <br>
                    {{item.text}}

				</li>
                
			</ul>
			</cube-scroll>
		</div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		created(){
			this.$store.dispatch('getRatings');
		},
		computed:mapGetters([
			'ratings'
		])
	}
</script>

<style lang="less" scoped>
	// .ratings{
	// 	display: flex;
	// 	position: absolute;
	// 	top:174px;
	// 	bottom: 46px;
	// 	overflow: hidden;
	// 	.menu-wrapper{
	// 		flex:0 0 80px;
	// 		width: 80px;
	// 		background-color: #f3f5f7;
	// 	}
	// 	.foods-wrapper{
	// 		flex:1;
	// 	}
	// }
	.menu-wrapper {
		height: 600px;
	}
	

</style>
<template>
<div class="wrapp">
  <div class="hello">
 <cube-scroll-nav
  :side="true"
  :data="data"
  :current="current"
  @change="changeHandler"
  @sticky-change="stickyChangeHandler">
  <cube-scroll-nav-panel
    v-for="(item,index1) in data"
    :key="item.name"
    :label="item.name"
    :title="item.name">
    <ul>
      <li v-for="(food,index) in item.foods"> 
        
        <div>
          <img :src="food.icon">
          <p>{{food.name}}</p>
          <span>销量：{{food.sellCount}}</span>
          <span>评论数：{{food.rating}}</span>
          <br>
          <div style="height:20px" class="jiahao">
            <span style="float:right;line-height: 20px;">单价：{{food.price}}元</span>
            <div>
            <img  @click="incItem(index1,index)" src="http://pic.58pic.com/58pic/14/36/21/28q58PICAiI_1024.png" alt=""></div>
          
          </div>
        </div>
      </li>
    </ul>
  </cube-scroll-nav-panel>
</cube-scroll-nav>
  </div>
 
 
  <div class="foot">
      <div class="footer menu-wrapper" v-if="willShow">

   <cube-scroll>    
<ul>
  
  <li v-for="(item,index) in shop"> 
    <span class="limit">{{item.name}} </span>
    <p style="float:right;margin-right:5px;">
     <span @click="incNum(index)" class="jia">+</span>
    <span style='width:20px;display:inline-block;text-align:center;'>{{item.num}}</span>
    <span @click="delNum(index)" class="jia">-</span>
    <button @click="delProduct(index)">删除</button>
    </p>
     <span style="float:right;margin-right:20px;">￥{{item.price}}</span>
     
  </li>
</ul>
</cube-scroll> 
  </div>
    <p style="float:left" @click="isShow()">饿了点我</p>
总计￥<span class="tatal">{{tatal}}</span><p style="float:right">￥<span>22</span>起送</p>
  </div>
  
  </div>
</template>

<script>
import goodsData from "../../../data.json";
const goods = goodsData.goods;
export default {
  name: "HelloWorld",
  data() {
    return {
      data: goods,
      current: goods[0].name,
      // arr: [],
      tatal: 0,
      shop: [],
      willShow: false
    };
  },
  methods: {
    changeHandler(label) {},
    stickyChangeHandler(current) {},
    incItem(index1, index) {
      var price = goods[index1].foods[index].price;
      var name = goods[index1].foods[index].name;

      const shopItem = this.shop.find(item => {
        console.log("aaa",item);
        return item.name === name;

      });
      if (shopItem) {
        console.log("shopItem",shopItem)
        shopItem.num++;
        // console.log(num);
      } else {
        this.shop.push({ name, price, num: 1 });
      }
      console.log("shop", this.shop);
      var total = 0;
      this.shop.forEach(element => {
        total += element.price * element.num;
      });
      this.tatal = total;
      // console.log(this.shop);
      // this.arr.push(price);
      // var sum = 0;
      // for (var i = 0; i < this.arr.length; i++) {
      //   sum += this.arr[i];
      // }
      // this.tatal = sum;
      // console.log(this.tatal);
    },
    isShow() {
      if (this.willShow == true) {
        this.willShow = false;
      } else {
        this.willShow = true;
      }
    },
    incNum(index) {
      console.log("qwe", this.shop);
      this.shop[index].num = this.shop[index].num + 1;
      var total = 0;
      this.shop.forEach(function(element) {
        total += element.price * element.num;
      });
      this.tatal = total;

      // console.log(this.tatal);
    },
    delNum(index) {
      if (this.shop[index].num > 1) {
        this.shop[index].num = this.shop[index].num - 1;
        this.tatal = this.tatal - this.shop[index].price;
        // console.log(this.tatal);
      } else {
        this.shop[index].num = 0;
        this.tatal = this.tatal - this.shop[index].price;
        this.shop.splice(index, 1);
        if (this.shop.length == 0) {
          this.arr = [0];
        }
        // console.log(this.shop);
      }
    },
    delProduct(index){
      this.tatal = this.tatal - this.shop[index].price* this.shop[index].num;
    this.shop.splice(index, 1);
     
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 450px;
}
.jiahao {
  line-height: 20px;
}
.jiahao img {
  width: 20px;
  height: 20px;
  float: right;
}
.foot {
  line-height: 30px;
  background: blueviolet;
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 111;
  width: 100%;
  overflow: auto;
  background-color: rgba(7, 17, 27, 0.7);
  color: #fff;
  font-size: 20px;
}
.jia {
  display: inline-block;
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  background: black;
}
.limit {
  display: inline-block;
max-width: 160px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
/* .menu-wrapper{
height: 100%;
} */
</style>


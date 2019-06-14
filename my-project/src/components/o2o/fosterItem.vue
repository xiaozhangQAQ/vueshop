<template>
	<div class="fosterItem_box">
		<group class = 'no_margintop'>
			<div class="" v-for = '(item,index) in shopList' @click = 'todetail' :key="index">							
			    <cell-box >	    	
			       <div class="weui-cell__hd shop_pro_leftImg"><img :src="item.shop_imgsrc"></div>
			       <div class="weui-cell__bd">
				      <p class="shop_pro_item_title">{{ item.shop_title }}</p>
				      <p class="shop_pro_item_detail">{{ item.shop_detail }}</p>
				      <div class="shop_pro_item_status">
						   <span class="shop_pro_item_badge">
						   	   热销
						   </span>
						   <!--<slot name="aa"></slot>-->
					  </div>
					  <div class="shop_pro_item_price">							     
				      		<div class="placeholder">
				      		   <div class="shop_pro_price_money">￥<span>{{ item.shop_price }}</span></div>
				      	    </div>							     							      
					        <div class="shop_pro_item_addcar">
					      	   <img :src="cartimg"/>
					        </div>
				      </div> 
				   </div>  
			    </cell-box>
		    </div>
		</group>
	</div>
</template>

<script>
	import {CellBox,Group, Flexbox, FlexboxItem, Icon} from 'vux'
	import {mapState} from 'vuex'
	
	export default {
		components:{
			CellBox,
			Group,
			Flexbox, 
			FlexboxItem,	
			Icon
		},
		data(){
			return {
				 shopList:[
				   {shop_title:'aa',shop_imgsrc:'../static/images/ji.png',shop_detail:'好吃',shop_price:'145'},
				   {shop_title:'aa',shop_imgsrc:'../static/images/ji.png',shop_detail:'好吃',shop_price:'145'},
				   {shop_title:'aa',shop_imgsrc:'../static/images/ji.png',shop_detail:'好吃',shop_price:'145'}
				 ],
				 cartimg:'../static/images/tjgw.png'
			}
		},
//		props:['pd_p'],
		methods:{
			todetail(){
				this.$router.push({
					name:'goodsDetail',
					params:{
						name:'aa'
					}
				})
			}
		},
		mounted(){
//			console.log(this.pd_p)
var self=this;
//			console.log(self.$parent)
		}
	}
</script>

<style scoped>
	.shop_pro {
	    width: 100%;
	    background-color: #fff;
	    padding-top: 10px;
	    margin-bottom: 15px;
	}
	.shop_pro h4 {
	    text-align: center;
	    color: #333;
	    position: relative;
	}
	.shop_pro h4:before {
	    content: '';
	    position: absolute;
	    top: 43%;
	    background: #494949;
	    width: 9%;
	    height: 2px;
	    left: 55px;
	}
	.shop_pro h4 span {
	    color: #00b260;
	}
	.shop_pro h4:after {
	    content: '';
	    position: absolute;
	    top: 43%;
	    background: #00b260;
	    width: 9%;
	    height: 2px;
	    right: 55px;
	}
	.weui-cell__hd img {
	    display: block;
	    margin-right: 5px;
	}
	.shop_pro_leftImg img {
	    width: 110px;
	    height: 110px;
	}
	.shop_pro_item_title {
	    margin-bottom: 7px;
	    font-size: 16px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 1;
	}
	.shop_pro_item_detail {
	    color: #999;
	    font-size: 12px;
	    margin-bottom: 7px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.shop_pro_item_progress{
		display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	    margin-bottom: 7px;
	}
	.shop_pro_item_bar{
		 background-color: #ebebeb;
    height: 3px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
	}
	.js_progress{
		width: 0;
	    height: 100%;
	    background-color: #09bb07;
	}   
	.shop_pro_item_progress .weui-progress__opr {
	    font-size: 14px;
	    color: #00b260;
	    display: block;
	    margin-left: 15px;
	}
	
	.shop_pro_item_price .shop_pro_item_price_info {
	    border-right: 1px solid #e1e1e1;
	    /* border: none; */
	    margin-left: 10px;
	}
	.shop_pro_item_price .shop_pro_item_price_info:last-child {
	    border: none;
	}
	.shop_pro_item_price p {
	    color: #999;
	    font-size: 12px;
	    margin-bottom: 3px;
	}
	.shop_pro_item_price .shop_pro_price_money {
	    color: #e30000;
	    font-size: 14px;
	    margin-bottom: 1px;
	}
	.shop_pro_item_status{
		margin-bottom: 20px;
	}
	.shop_pro_item_status .shop_pro_item_badge{
		position: relative;
	    display: inline-block;
	    padding: 0 6px;
	    font-size: 12px;
	    text-align: center;
	    background-color: #FF5722;
	    color: #fff;
	    border-radius: 2px;
	    height: 18px;
	    line-height: 18px;
	}
	.shop_pro_item_addcar{
		position: absolute;
		bottom: 5px;
		right: 5px;
	}
	.shop_pro_item_addcar img{
		width: 45px;
		height: 45px;
	}
	.shop_pro_item_time{
		position: absolute;
	    bottom: 0px;
	    right: 17px;
	    font-size: 12px;
	    color: #999;
	}
	.shop_pro_item_leftImg{
		margin-right: 10px;
	}
	.shop_pro_item_leftImg img{
		width: 110px;
		height: 77px;
	}
	.no_margintop .weui-cells{
		margin-top: 0;
	}
</style>
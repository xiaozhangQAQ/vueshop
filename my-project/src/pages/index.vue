<template>
	<div class="shop_box">
		<mysearch @searchvalch="searchval"></mysearch>
	    <div class="" style="padding-top: 45px;">	    	
	    	
	    <!--轮播图-->
		<div class="shop_banner">
			<swiper loop :list="demo06_list"></swiper>	
		</div>	
		
		<!-- 推荐认养
       <div class="shop_pro">
       	    <div class="shop_pro_title">
       	    	<h4> 推荐认养 <span> RECOMMEND </span></h4>
       	    </div>
       	    <fosterItem :pd_p = 'pd' v-for="n in 3"></fosterItem>	           	    	           	    
       </div> -->
	           	           
	    <!--  精品商城         -->
	        <div class="shop_pro">
           	    <div class="shop_pro_title">
           	    	<h4> 精品商城 <span> BOUTIQUE </span></h4>
           	    </div> 
           	    <div class="">
           	    	<goodsItem></goodsItem>
           	    </div>
           	    
	        </div>
	        
	        
	        <!--  新闻资讯         -->
	        <div class="shop_pro">
           	    <div class="shop_pro_title" @click="send">
           	    	<h4> 新闻资讯 <span> NEWS </span></h4>
           	    </div>
           	    
           	    <group>
				    <cell-box v-for = '(item,index) in newsList' :key="index">
				       <div class="weui-cell__hd shop_pro_leftImg shop_pro_item_leftImg"><img :src="item.news_imgsrc"></div>
				       <div class="weui-cell__bd">
					      <p class="shop_pro_item_title">{{ item.news_title }}</p>
					      <p class="shop_pro_item_detail">{{ item.news_detail }}</p>
					      <div class="weui-progress shop_pro_item_time">
							   {{item.news_date}}天前
						  </div>
					   </div>   
				    </cell-box>
				</group>   	        
	        </div>
       </div>
       <totop></totop>
       
	</div>
</template>

<script>
	import { Swiper,CellBox,Group, Flexbox, FlexboxItem} from 'vux';
	import tabnav from '@/components/o2o/ShopTabnav.vue';
	import fosterItem from '@/components/o2o/fosterItem.vue';
	import goodsItem from '@/components/o2o/goodsItem.vue';
	import Vue from 'vue';
	import mysearch from '@/components/o2o/search.vue';
	import totop from '@/components/o2o/totop.vue';
	
	import ajaxAsync from '@/api/ajaxAsync'

	export default {
		name:'index',
		components:{
			Swiper,
			CellBox,
			Group,
			Flexbox, 
			FlexboxItem,
			fosterItem,
			goodsItem,
			tabnav,
			mysearch,
			totop
		},
		data(){
			return {
				demo06_list:[{
				  url: 'javascript:',
				  img: '../static/images/news.png',
				  
				}, {
				  url: 'javascript:',
				  img: '../static/images/jingpin.png',
				  
				}, {
				  url: 'javascript:',
				  img: '../static/images/news.png',
				  
				}, {
				  url: 'javascript:',
				  img: '../static/images/jingpin.png',
				  
				}],
				 newsList:[
				   {news_title:'教你四招健康吃鸡肉',news_imgsrc:'../static/images/news1.png',news_detail:'自由散养，成就非凡品质啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊sadfgasd',news_date:1},
				   {news_title:'鸡蛋怎么做最营养',news_imgsrc:'../static/images/news2.png',news_detail:'自由散养，成就非凡品质',news_date:2},
				   {news_title:'鸡蛋怎么做好吃',news_imgsrc:'../static/images/news3.png',news_detail:'自由散养，成就非凡品质',news_date:3}
				 ],
				 transitionName: 'slide-right',
				 noData: '',
				 datashow:{}
			}
		},
		methods:{
			toProDetail:function(){
//				this.$http.post('/api').then(function(data){
//					console.log(data)
//				});
			},
			searchval(a){
				
			},
			async send(){
				let response = await ajaxAsync('/api/data',{'a':1});
               console.log(response); 
			}
		},
		mounted(){
			var self = this;
//          this.$http.post('/api/user/hpshow')
//	        .then(function(response){
//	        	//请求的列表数据
//		        let arr = response.data.data;	
//		        self.datashow = arr
//		        console.log(self.datashow)
//	        }).catch((e)=> {
//		        //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
//              console.log(e)
//	        })
//          this.$http.get('/api/data')
//	        .then(function(response){
//	        	//请求的列表数据
//		   
//		        console.log(response)
//	        }).catch((e)=> {
//		        //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
//              console.log(e)
//	        })
            this.$http.fetchGet ('/api/data')
		}
	}
</script>

<style scoped>
	.pro_box{
		display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    width: 100%;
	}
	.shop_box{
		/*background-color: #fff;*/
		position: absolute;
		top: 0;
		width: 100%;
		bottom: 50px;
		overflow: auto;
	}
	.shop_banner{
		padding: 10px;
		background-color: #fff;
		margin-bottom: 20px;
	}
	.shop_banner .vux-swiper{
		height: 127px !important;
		border-radius: 8px;
	}
	.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
		display: none;
	}
	.shop_box .vux-slider > .vux-indicator,.shop_box .vux-slider .vux-indicator-right{
		right:0px;
		left: 40%;
	}
	.shop_banner .vux-slider > .vux-indicator > a > .vux-icon-dot, .vux-slider .vux-indicator-right > a > .vux-icon-dot{
		width: 8px;
		height: 8px;
		background-color: #999;
	}
	.shop_banner .vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active{
		background-color: #fff;
	}
	
	.shop_pro_title{
		margin: 10px 0px;
	}
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
	}
</style>	

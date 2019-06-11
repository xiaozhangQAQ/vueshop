<template>
	<div class="goods_detail_box">
		<!--banner-->		
		<div class="" style="position: relative;">
			<div class="" style="position: absolute;top: 10px;left: 10px;z-index: 10;" @click="ret">
				<x-icon type="ios-arrow-thin-left" size="30"></x-icon>
			</div>
		   <swiper :list="goodsimg" :style = "{height:imgheight,width:imgwidth}" dots-position="center" auto loop></swiper>				
		</div>

        <div class="detail_containt">
			<p class="detail_containt_title">100期罗牛山鸡蛋</p>
			<p class="detail_containt_detail">采取山地果园放养，自由采食加喂五谷杂粮</p>
			<div class="detail_containt_box">
				<div class="detail_containt_price">
					￥ <span> 120.00 </span> /份
				</div>					
				<div class="detail_containt_residue">
					剩余：<span>40</span>份
				</div>
			</div>
			
			<div class="weui-cells detail_containt_item">
	          <div class="weui-cell">
	            <div class="weui-cell__bd has_carts_count detail_containt_item_count">
	                <!--<span>数量</span>-->
                    <!--<div class="weui-count">
		                <a class="has_carts_count_jian">-</a>
		                <input class="weui-count__number" type="number" value="1">
		                <a class="has_carts_count_add">+</a>
		             </div>-->
		             <x-number :title = "num_label" :min="min" :max ='max'  v-model = 'a' @on-change="change"></x-number>
	            </div>	           
	          </div>		         	
	        </div>	       
		</div>
		<div v-for="src in list" style="background-color:#eee;text-align:center;">
	      <span style="font-size:20px;"><inline-loading></inline-loading></span>
	      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" class="ximg-demo" :offset="-100" container="#vux_view_box_body"></x-img>
	   </div>
	   <detBottom></detBottom>
	    <totop></totop>
	</div>
</template>

<script>
	import { Swiper,CellBox,Group, Flexbox, FlexboxItem,XNumber,XImg,InlineLoading} from 'vux';
	import totop from '@/components/o2o/totop.vue';
	import detBottom from '@/components/o2o/detBottom';
	
	export default {
		components:{
			Swiper,
			CellBox,
			Group,
			Flexbox, 
			FlexboxItem,
			XNumber,
			XImg,
			InlineLoading,
			totop,
			detBottom
		},
		data(){
			return {
				goodsimg:[{
				  url: 'javascript:',
				  img: './static/images/edg.png',
				  
				}, {
				  url: 'javascript:',
				  img: './static/images/edg.png',
				  
				}, {
				  url: 'javascript:',
				  img: './static/images/edg.png',
				  
				}, {
				  url: 'javascript:',
				  img: './static/images/edg.png',
				  
				}],
				list: [
			        'https://o5omsejde.qnssl.com/demo/test1.jpg',
			        'https://o5omsejde.qnssl.com/demo/test2.jpg',
			        'https://o5omsejde.qnssl.com/demo/test4.jpg',			      
			        'https://o5omsejde.qnssl.com/demo/test8.jpg'
			    ],
				imgheight:'auto',
				imgwidth:'auto',
				num_label:'数量',
				min:1,
				max:10,
				a:1
			}
		},
		methods:{
			success (src, ele) {
		      console.log('success load', src,)
		      const span = ele.parentNode.querySelector('span');
		      ele.parentNode.removeChild(span)
		   },
		   ret(){
		   	this.$router.go(-1)
		   },
		   change(val){
		   	var self = this;	
//		   	 val = this.$store.state.count;
//		   	 self.$store.dispatch("numadd",val)
		   }
		},
		mounted(){		
			$(window).scrollTop(0);
			let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.imgwidth = w+'px';
            this.imgheight = w+'px';
		} 
	}
</script>

<style>
	.goods_detail_box{
		margin-bottom: 50px;
	}
	.goods_detail_box .vux-slider > .vux-swiper{
		height: auto !important;
	}
	.goods_detail_box .vux-slider > .vux-swiper{
		position: static;
		background-color: #fff;
	}
	.goods_detail_box .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
		display: none;
	}
	
	.detail_containt {
	    background-color: #fff;
	    padding: 0 0.7rem;
	    margin-bottom: 15px;
	}
	.detail_containt .detail_containt_title {
	    margin-bottom: 5px;
	    font-size: 16px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 1;
	}
	.detail_containt .detail_containt_detail {
	    color: #999;
	    font-size: 14px;
	    margin-bottom: 7px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.detail_containt_box {
	    width: 100%;
	    height: 40px;
	    line-height: 40px;
	    position: relative;
	}
	.detail_containt_box:after, .detail_containt_box:before {
	    clear: both;
	    content: ' ';
	    display: block;
	}
	.detail_containt_box .detail_containt_price {
	    color: #ce1419;
	    font-weight: 600;
	    float: left;
	}
	.detail_containt_box .detail_containt_residue {
	    float: right;
	    color: #666;
	}
	.ximg-demo {
  width: 100%;
  height: auto;
  display: block;
}
.ximg-error {
  background-color: #fff;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>
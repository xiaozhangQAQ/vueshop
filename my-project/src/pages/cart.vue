<template>
	<div class="cart-box">
		<!--购物车为空-->
		<div class="empty_carts">
			<div class="">
				<img :src="empty_img" class="empty_carts_img"/>
				<p>购物车空空的，快去购物吧!</p>
				<x-button mini type="primary">去逛逛</x-button>
			</div>			
		</div>
		
		<!--购物车不为空-->
		<div class="has_carts">
			<div class="has_carts_item">
				 <flexbox>
			        <flexbox-item class = 'has_carts_item_header'><div class="flex-demo">o2o罗牛山商城</div></flexbox-item>
			        <div class="has_carts_item_right">
			        	<icon type="delete"></icon>
			        </div>
				 </flexbox>
				 <cartsItem></cartsItem>			
		    </div>			
		</div>
		
	</div>
</template>

<script>
	import { XButton, Flexbox, FlexboxItem, Cell, Group, Icon } from 'vux';
    import cartsItem from '@/components/o2o/cartsItem.vue';
    import tabnav from '@/components/o2o/ShopTabnav.vue';
    
	export default {
	  components: {
	    XButton, 
	    Flexbox, 
	    FlexboxItem,
	    Cell,
	    Group,
	    Icon,
	    cartsItem,
	    tabnav
	  },
	  data(){
	  	return{
	  		empty_img:'./static/images/empty.png'
	  	}
	  }
	}
</script>

<style>
	.empty_carts{
		width: 100%;
	    height: 100%;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    position: absolute;
	    top: -25px;
	    text-align: center;
	    display: none;
	}
	.empty_carts_img{
		width: 4.69rem;
		height: auto;
        margin-bottom: 10px;
	}
	.empty_carts p {
	    margin-bottom: 10px;
	}
	.empty_carts .go_shop {
	    width: 125px;
	}
	
	.has_carts {
	    background-color: #fff;
	    padding: 0 10px;
	}
	.has_carts .has_carts_item {
	    padding: 0;
	    margin-bottom: 0;
	}
	.has_carts .has_carts_item_header {
	    padding: 10px 0;
	}
	.has_carts .has_carts_item_content {
	    color: #333;
	}
	.has_carts .has_carts_item_content .placeholder {
	    margin-left: 15px;
	}
	.has_carts .has_carts_item_right i {
	    color: #6a6a6a;
	    font-size: 18px;
	}
	.has_carts_item .weui-cells{
		margin-top: 0px;
	}
	.has_carts .shop_pro {
    margin-bottom: 0;
}
.shop_pro {
    width: 100%;
    /* background-color: #fff; */
    padding-top: 10px;
    /* margin-bottom: 15px; */
}
.has_carts .shop_pro_item {
    padding: 0px;
}
.shop_pro_leftImg img {
    width: 80px;
    height: 80px;
    margin-top: 5px;
    margin-bottom: 5px;
}
.shop_pro_item_title {
    margin-bottom: 7px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
}
.has_carts .shop_pro_item_title {
    margin-bottom: 28px;
    word-break: break-all;
    padding-right: 23px;
}
.shop_pro_item_price .shop_pro_price_money {
    color: #e30000;
    font-size: 14px;
    margin-bottom: 1px;
    font-weight: 600;
}
.has_carts .has_carts_count {
    position: absolute;
    bottom: 10px;
    right: 5px;
}
.has_carts_count .weui-count {
    /* overflow: hidden; */
    border: 1px solid #e1e1e1;
    height: 22px;
    line-height: 22px;
}
.has_carts_count .has_carts_count_jian {
    border-right: 1px solid #e1e1e1;
    padding: 0px 10px;
    display: inline-block;
}
.weui-count .weui-count__number {
    background-color: transparent;
    font-size: .8rem;
    border: 0;
    width: 1.3rem;
    text-align: center;
    color: #5f646e;
}
.has_carts_count .has_carts_count_add {
    border-left: 1px solid #e1e1e1;
    padding: 0px 10px;
    display: inline-block;
}

</style>
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
</style>
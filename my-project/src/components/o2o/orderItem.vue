<template>
	<div class="order_item">
		<group>
		    <cell-box v-for = 'item in shopList'>
		    	<div class="has_carts_item_left" :data-ischeck = "item.status_chk" @click = "check_item(item)">
				    <icon :type="item.icon_sta"></icon>
				    <!--<input type="checkbox" name="sex" value="male">-->
				</div>
		       <div class="weui-cell__hd shop_pro_leftImg"><img :src="item.shop_imgsrc"></div>
		       <div class="weui-cell__bd">
			      <p class="shop_pro_item_title">{{ item.shop_title }}</p>			     
				  <div class="shop_pro_item_price">							     
				      	<div class="placeholder">
				      		<div class="shop_pro_price_money">￥<span>{{ item.shop_price }}</span></div>
				      	</div>							     							      					     
			      </div>
			      <!--<div class="has_carts_count has_carts_num">
			      	  数量：x<span>1</span>
			      </div>-->
			      <div class="has_carts_count">			      	   
					    <div class="weui-count">
			                <a class="has_carts_count_jian" @click="num_sub(item)">-</a>
			                <input class="weui-count__number" type="number" :value="item.buy_val" readonly>
			                <a class="has_carts_count_add" @click="num_add(item)">+</a>
		                </div>
			      </div>
			   </div>   
		    </cell-box>
		</group>
	</div>
</template>

<script>
</script>

<style>
</style>
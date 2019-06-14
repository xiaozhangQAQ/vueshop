<template>
    <div class="" style="padding-bottom: 50px;">
			<div class="self_header">
				<div class="self_header_main">
				     <div class="self_header_main_img" id="u_img">
				     	
				     </div>
				     <div class="self_header_main_title" id="u_name">超级管理员</div>
				     <div class="self_header_main_other">
				     	<div class="shop_pro_item_price">
					      	  <div class="weui-flex">
							      <div class="weui-flex__item shop_pro_item_price_info">
							      	<div class="placeholder">
							      		<p class="shop_pro_price_money" id="a_remainder">0</p>
							      		<p>个人余额</p>
							      	</div>
							      </div>
							      <div class="weui-flex__item shop_pro_item_price_info">
							      	<div class="placeholder">
							      		<p id="a_incomed">0</p>
							      		<p>已获收益</p>
							      	</div>
							      </div>
							      <div class="weui-flex__item shop_pro_item_price_info">
							      	<div class="placeholder">
							      		<p id="a_incomeing">0</p>
							      		<p>待收收益</p>
							      	</div>
							      </div>
							      <div class="weui-flex__item shop_pro_item_price_info">
							      	<div class="placeholder">
							      		<p id="a_capital">0</p>
							      		<p>已售份数</p>
							      	</div>
							      </div>
							  </div>
					    </div>
				     </div>
			    </div>
			</div>
			
			<div class="self_order">
				<!--<div class="weui-cells">
		          <div class="weui-cell weui-cell_access"  id="more_order">
		            <div class="weui-cell__bd self_order_title">
		              <p>我的订单</p>
		            </div>
		            <div class="weui-cell__ft self_order_more">查看更多订单</div>
		          </div>		         		
		        </div>-->
		        
		        <div class="self_order_main self_order_det">
		        	<div class="weui-grids">
				      <a href="javascript:;" class="weui-grid js_grid">
				        <div class="weui-grid__icon">
				          <img src="../../static/images/obligation.png" alt="">
				        </div>
				        <p class="weui-grid__label">
				          待付款
				        </p>
				      </a>
				      <a href="javascript:;" class="weui-grid js_grid">
				        <div class="weui-grid__icon">
				          <img src="../../static/images/send.png" alt="">
				        </div>
				        <p class="weui-grid__label">
				          待发货
				        </p>
				      </a>
				      <a href="javascript:;" class="weui-grid js_grid">
						 <div class="weui-grid__icon">
				          <img src="../../static/images/eval.png" alt="">
				        </div>
				        <p class="weui-grid__label">
				          待评价
				        </p>
				      </a>
				      
				      <a href="javascript:;" class="weui-grid js_grid">
						<div class="weui-grid__icon">
				          <img src="../../static/images/afterself.png" alt="">
				        </div>
				        <p class="weui-grid__label">
				          售后
				        </p>
				      </a>
				      
				      <a href="javascript:;" class="weui-grid js_grid" id="more_order">
				        <div class="weui-grid__icon">
				          <img src="../../static/images/allorder.png" alt="">
				        </div>
				        <p class="weui-grid__label">
				          更多订单
				        </p>
				      </a>
				    </div>
		        </div>
		        
			</div>
			
			<div class="self_order">
				<div class="weui-cells">
		          <div class="weui-cell weui-cell_access">
		            <div class="weui-cell__bd self_order_title">
		              <p>常用功能</p>
		            </div>
		          </div>		         		
		        </div>
		        
		        <div class="self_order_main self_action">
		        	<div class="weui-grids">
				      <a href="javascript:;" class="weui-grid js_grid" id="u_addrs">
				        <div class="weui-grid__icon" style="width: 20px;">
				          <img src="../../static/images/addr.png" alt="">
				        </div>
				        <p class="weui-grid__label">
				          我的地址
				        </p>
				      </a>
						
				      
				    </div>
		        </div>
		        
			</div>
			
			
		</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.self_header {
    width: 100%;
    height: 100px;
    background-color: #000;
    position: relative;
    margin-bottom: 55px;
}
.self_header_main {
    width: 90%;
    height: 110px;
    position: absolute;
    top: 30%;
    background: url(../../static/images/self_bg.png) no-repeat center center;
    background-size: cover;
    left: 5%;
    border-radius: 5px;
    background-color: #019273;
}
.self_header_main_img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background: no-repeat center center;
    background-size: cover;
    position: absolute;
    top: -7px;
    left: 5%;
}
.self_header_main_title {
    position: absolute;
    left: 24%;
    color: #fff;
    font-size: 16px;
    top: 5px;
}
.self_header_main_other {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
}
.shop_pro_item_price .shop_pro_item_price_info {
    border-right: 1px solid #e1e1e1;
    margin-left: 10px;
}
.shop_pro_item_price p {
    color: #999;
    font-size: 12px;
    margin-bottom: 3px;
}
.self_header_main_other .shop_pro_item_price .shop_pro_price_money, .self_header_main_other .shop_pro_item_price p {
    color: #fff;
}

.self_order {
    background-color: #fff;
}
.self_order_main .weui-grid {
    padding: 10px 10px;
}
.self_order_det .weui-grid {
    width: 20%;
}
.self_order .weui-grid__label {
    font-size: 12px;
}
.self_order {
    background-color: #fff;
}
.self_order_title {
    color: #333;
    font-size: 14px;
}
.self_order_title p {
    position: relative;
    display: inline-block;
}
.self_order_title p:after {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 1px 1px 0 0;
    border-color: #333;
    border-style: solid;
    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
    transform: matrix(.71,.71,-.71,.71,0,0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: -10px;
}
.self_action .weui-grid {
    width: 25%;
}
.self_order_main .weui-grid {
    padding: 10px 10px;
}
.weui-grid:after, .weui-grid:before{
    border: none;
}
</style>



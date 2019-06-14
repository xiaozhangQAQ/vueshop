<template>
	<div class="cartsItem_box">
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
		
		<!--底部结算-->
		<div class="has_carts_bottom" style="bottom: 53px;">
			<flexbox>
				<div class="has_carts_item_left">
					<div class="has_carts_item_left" :ischeckall = 'ischeckall' id="check_all" @click="check_all()">
					    <icon :type="checkall_icon"></icon>
					</div>
				</div>
		      <flexbox-item class='has_carts_item_content'><div class="flex-demo">全选</div></flexbox-item>
                <div class="has_carts_price">
					<p class="has_carts_price_total">合计：￥<span id="priceAll">{{price_val}}</span></p>
					<p class="has_carts_price_jian">已优惠：￥<span>0</span></p>
				</div>
				<div class="has_carts_item_right" style="height: 100%;line-height: 50px;">
				    <div id="to_scOrder" class="has_carts_topay" @click="payon()">去结算（<span id="settleNum">{{settle_val}}</span>）</div>
				</div>
		   </flexbox>						
		</div>
	</div>
</template>

<script>
	import {CellBox,Group, Flexbox, FlexboxItem, Icon, XNumber} from 'vux'
	import {mapState} from 'vuex'
	import floatObj from '../../../static/js/float2.js'
	
	export default {
		components:{
			CellBox,
			Group,
			Flexbox, 
			FlexboxItem,	
			Icon,
			XNumber
		},
		data(){
			return {
				 shopList:[ //商品列表数据
				   {id:"1",status_chk:'ko',icon_sta:"circle",shop_title:'猪肉11KG',shop_imgsrc:'../static/images/zr.png',shop_detail:'自由散养，成就非凡品质',shop_price:"120.01",min:"1",max:"10",buy_val:"1"},
				   {id:"2",status_chk:'ko',icon_sta:"circle",shop_title:'猪排12KG',shop_imgsrc:'../static/images/pg.png',shop_detail:'自由散养，成就非凡品质',shop_price:"130.123",min:"1",max:"12",buy_val:"1"},
				   {id:"3",status_chk:'ko',icon_sta:"circle",shop_title:'鸡肉13KG',shop_imgsrc:'../static/images/jr.png',shop_detail:'自由散养，成就非凡品质',shop_price:"140.34",min:"1",max:"11",buy_val:"1"},
				 ],
				//ok为选中，ko为未选中
				ischeckall:'ko', //全选状态
				checkall_icon:'circle', //全选选中icon
				pro_check_arr:[], //选中操作存放数组
				settle_val:"0", //结算总数
				price_val:"0" //总价格
			}			
		},
		methods:{
			check_item:function(item){ //点击商品
				let self = this;			
				if(item.status_chk == 'ko'){
					var item_obj = {}; //商品存放对象
					item.status_chk = 'ok';
					item.icon_sta = 'success';					
					item_obj.id = item.id;
					item_obj.price = item.shop_price;
					item_obj.num = item.buy_val;
					self.pro_check_arr.push(item_obj);
				}else{
					item.status_chk = 'ko';
					item.icon_sta = 'circle';
					self.removeWithoutCopy(self.pro_check_arr,item.id);
				}
				
				self.is_checkall();
				self.settle();
				self.price();
			},
			num_sub:function(item){ //数量减
				let self = this;
				item.buy_val = parseInt(item.buy_val || "0") - 1;	
				if(item.buy_val<item.min){
					item.buy_val = item.min
				}
				
				self.pro_check_arr.forEach(function(i) {	    			
	    			if(i.id == item.id){
	    				i.num = item.buy_val;
	    			}
            	});
				
				self.settle();
				self.price();
			},
			num_add:function(item){ //数量加
				let self = this;
				item.buy_val = parseInt(item.buy_val || "0") + 1;	
				if(item.buy_val>item.max){
					item.buy_val = item.max
				}
				self.pro_check_arr.forEach(function(i) {	    			
	    			if(i.id == item.id){
	    				i.num = item.buy_val;
	    			}
            	});
				
				self.settle();
				self.price();
			},
			check_all:function(){ //点击全选
				let self = this;
				
				if(self.ischeckall == 'ok'){
					self.ischeckall = 'ko';
					self.checkall_icon = 'circle';
					
					self.shopList.forEach(function(i){
						i.icon_sta = 'circle';
						i.status_chk = 'ko';
					})					
					self.pro_check_arr = [];
				}else{
					self.ischeckall = 'ok';
					self.checkall_icon = 'success';
					self.pro_check_arr = [];
					self.shopList.forEach(function(i){
						var item_obj = {}; //商品存放对象
						i.icon_sta = 'success';
						i.status_chk = 'ok';
						item_obj.id =i.id;
						item_obj.price = i.shop_price;
						item_obj.num = i.buy_val;
						self.pro_check_arr.push(item_obj);
					})
				}
				
				self.settle();
				self.price();
			},
			is_checkall:function(){ //点击商品判断是否全选
				let self = this;
				var pro_item_length = self.shopList.length; //获取商品数量          
//				console.log(pro_item_length+' '+self.pro_check_arr.length)
            	if(pro_item_length == self.pro_check_arr.length){           		
            		 self.ischeckall = 'ok';
            		 self.checkall_icon = 'success';
            	}else{
            		 self.ischeckall = 'ko';
            		 self.checkall_icon = 'circle';
            	}
			},
			removeWithoutCopy:function(arr, item) { //数组中去除重复元素
	    	     for(var i = 0; i < arr.length; i++){  
	    	         if(arr[i].id == item){  	    	         	
	    	             //splice方法会改变数组长度，当减掉一个元素后，后面的元素都会前移，因此需要相应减少i的值  
	    	             arr.splice(i,1);  
	    	             i--;  
	    	         }  
	    	     }  
	    	     return arr;  
	    	},
	    	payon:function(){
	    		this.$router.push({
	    			path:'/addr',
	    			name:'addr'
	    		})
	    	},
	    	settle:function(){ // 结算总数
	    		let self = this;
	    		var settle_num = "0";
	    		self.pro_check_arr.forEach(function(i) {	    			
	    			settle_num = floatObj.add(settle_num,i.num)	 
            	});
	    		self.settle_val = settle_num;
	    	},
	    	price:function(){ //总价格
	    		let self = this;
	    		var price_all = 0,pay=0;          
            	self.pro_check_arr.forEach(function(i) {                     
                    pay = floatObj.multiply(i.price,i.num);
                    if(price_all == 0){
                    	price_all = pay;
                    }else{
                    	price_all =floatObj.add(price_all,pay);
                    }
            		 
            	});
            	self.price_val = price_all;
            	return false;
	    	}
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
	}
	.has_carts_bottom {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    left: 0;
    height: 50px;
    z-index: 10;
}
.has_carts_bottom .weui-flex {
    height: 100%;
}
.has_carts_bottom .has_carts_item_left, .has_carts_bottom .has_carts_item_content {
    line-height: 50px;
    margin-left: 5px;
}
.has_carts_bottom .has_carts_price {
    margin-right: 1rem;
}
.has_carts_topay {
    height: 100%;
    color: #fff;
    border: none;
    background-color: #ff5041;
    padding: 0 18px;
    font-size: 16px;
}
.has_carts_topay {
    height: 100%;
    color: #fff;
    border: none;
    background-color: #ff5041;
    padding: 0 18px;
    font-size: 16px;
}
.has_carts_bottom .has_carts_price_total {
    font-size: 14px;
    color: #333;
}
.has_carts_bottom .has_carts_price_total span {
    font-size: 14px;
    color: red;
    font-weight: 600;
}
.has_carts_bottom .has_carts_price_jian {
    font-size: 14px;
    color: #999;
}
</style>	
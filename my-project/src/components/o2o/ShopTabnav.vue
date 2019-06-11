<template>
	<div class="" id="shop_index">
		<!--<group>
	      <cell is-link title="Simple" link="/component/tabbar-simple"></cell>
	      <cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>
	    </group>-->
        <!--<x-header>aaa</x-header>-->
        
		<tabbar>
	       <tabbar-item v-for = 'item in bottomBar' :link='item.link' :selected='item.isselected'>
	        <span slot="icon" class="tabbar_img" :class="item.iconCls"></span>
	        <span slot="label">{{item.name}}</span>
	      </tabbar-item>
	     
	    </tabbar>
	</div>
</template>

<script>
	import { XHeader,XButton,Tabbar,TabbarItem } from 'vux'
	
	export default {
		components: {
		    XHeader,
		    XButton,
		    TabbarItem,
		    Tabbar
		},
      data(){
      	return {
      		bottomBar: [
				{
					name: '首页',
					iconCls: 'tabbar_img_home',
					link: '/index',
					isselected:true
				},
				{
					name: '认养',
					iconCls: 'tabbar_img_ry',
					link: '/foster',
					isselected:false
				},
				{
					name: '商城',
					iconCls: 'tabbar_img_shop',
					link: '/store',
					isselected:false
				},
				{
					name: '购物车',
					iconCls: 'tabbar_img_car',
					link: '/cart',
					isselected:false
				},
				{
					name: '我的',
					iconCls: 'tabbar_img_self',
					link: '/self',
					isselected:false
				}
			]
      	}
      },
	  mounted(){
	  	   let self = this;
	  	   let currentRoute = self.$route.path; 
	  	    
		   self.bottomBar.forEach(function(i){
		   	  i.isselected = false;
		   	  if(i.link == currentRoute){
		   	  	i.isselected = true;
		   	  }
		   })
		}	  
	}
</script>

<style>
	.weui-tabbar{
		position: fixed !important;
	}
	.tabbar_img{
		background-repeat: no-repeat;
		background-position-x: 4px;
		background-position-y: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: block;
	}
	#shop_index{
		height: 53px;
		position: fixed;
		bottom: 0;
	}
	.tabbar_img.tabbar_img_home{
		background-image: url(../../../static/images/home.png);
	}
	.tabbar_img.tabbar_img_ry{
		background-image: url(../../../static/images/ry.png);
	}
	.tabbar_img.tabbar_img_shop{
		background-image: url(../../../static/images/shop.png);
	}
	.tabbar_img.tabbar_img_car{
		background-image: url(../../../static/images/car.png);
	}
	.tabbar_img.tabbar_img_self{
		background-image: url(../../../static/images/self.png);
	}
    .weui-bar__item_on .tabbar_img{
		/*background: url(img/home.png) no-repeat -41px center;*/
		background-position-x: -40px;
	}
</style>
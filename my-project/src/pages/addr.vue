<template>
	<div class="addr_box">
		<div class="addr_box_content" style="">	
			
			<div class="weui-flex__item" v-for="(item,index) in addrList" :key="index">
		      	<div class="placeholder clear">
		      		<div class="order_addr_name">
		      			收货人：<span>{{item.name}}</span>
		      		</div>
		      		<span class="order_addr_tel">{{item.tel}}</span>
		      	</div>
		      	<div class="order_addr_content">收货地址：<span>{{item.addr}}</span></div>
		      	<div class="addr_handle">
		      		<flexbox>
		      		 	  <div class="" :ischeck = 'item.status_chks' @click="check_item(item)">
						     <icon :type="item.icon_stas"></icon>
						  </div>
					      <flexbox-item><div class="flex-demo">默认地址</div></flexbox-item>
					      <div class="">
							   <span class="addr_edit_icon show_addr" @click="showdialog(item)"> 编辑</span>
							   <span class="addr_delate_icon"> 删除</span>
						  </div>
				     </flexbox>
		      	</div>
		   </div>		   
	    </div>
	    <div class="bottom_tab">
	    	<bottomTab v-on:bottom_show_addr = 'getchildmes'></bottomTab>
	    </div>	 
	    
	    <addrdialog :showToast = 'showToast' v-on:listen_closetoast = 'getchildmes'></addrdialog>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem, Icon} from 'vux'
	import addrdialog from '@/components/o2o/addrAdd'
	import bottomTab from '@/components/o2o/bottomTab'

	export default {
		
	  components: {
	    Flexbox,
	    FlexboxItem,
	    Icon,
	    addrdialog,
	    bottomTab
	  },
	  data(){
	  	return {
	  		addrList:[
	  		   {name:'张三',tel:'13888888888',addr:'海南省海口市秀英区长流镇',status_chks:'ok',icon_stas:"success"},
	  		   {name:'李四',tel:'13888888888',addr:'海南省海口市秀英区长流镇',status_chks:'ko',icon_stas:"circle"},
	  		   {name:'王五',tel:'13888888888',addr:'海南省海口市秀英区长流镇',status_chks:'ko',icon_stas:"circle"}
	  		],
	  		//ok为选中，ko为未选中
			showToast:false
	  	}
	  },
	  mounted(){
	  },
	  methods:{
	  	check_item:function(item){
	  		let self = this;
	  		self.addrList.forEach(function(i){
	  			i.status_chks = 'ko';
	  			i.icon_stas = 'circle';
	  		})
	  		item.status_chks = 'ok';
	  		item.icon_stas = 'success';
	  	},
	  	
	   showdialog:function(item){
	   	   let self = this;
	   	   self.showToast = true;
	   },
	   getchildmes :function(mes){
	   	   let self = this;
	   	   self.showToast = mes;
	   },
	   loadcheck(){
	   	
	   }
	  }
	}
</script>

<style>
.addr_box_content>.weui-flex__item {
    padding: 10px;
    margin-top: 0.8rem;
    background-color: #fff;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
.clear:before, .clear:after {
    content: '';
    clear: both;
    display: block;
}
.order_addr_name {
    float: left;
    color: #333;
}
.order_addr_tel {
    float: right;
    color: #333;
}
.order_addr_content {
    /* height: 45px; */
    color: #999;
    word-break: break-all;
}
.addr_handle {
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding: 10px 0px 0px 0px;
    color: #999;
}
.addr_edit_icon {
    background: url(../../static/images/edit.png) no-repeat center left;
    background-size: 15px 15px;
    padding-left: 20px;
    margin-right: 5px;
}
.addr_delate_icon {
    background: url(../../static/images/delate.png) no-repeat center left;
    background-size: 17px 17px;
    padding-left: 20px;
}
.bottom_tab{
	position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #fff;
    z-index: 99;
    border-top: 1px solid #e5e5e5;
    line-height: 50px;
    text-align: center;
}
</style>
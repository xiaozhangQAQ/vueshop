<template>
	<div class="foster_box">
		<!--<fosterItem></fosterItem>-->
		
	       <!--<tab :line-width=2 active-color='#fc378c' v-model="index">
	        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
	      </tab>	      -->
	      <div class="pro_banner" ref='headerhei'>
	      	<mysearch></mysearch>
	      	 <img :src="imgbanner" style="width: 100%;height: 10.619rem;">
	      </div>
	      
	      <!--<tab>
		      <tab-item v-for="(item, index) in list2" :selected="demo2 === item">{{item}}</tab-item>
		  </tab>
		  <div class="">
		  	  <fosterItem></fosterItem>
		  </div>-->
		  <div>
		       <tab :line-width=2 active-color='#fc378c' v-model="index">
		        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in listbox" @click="demo2 = item" :key="index" :id="index">{{item}}</tab-item>
		      </tab>
		      <swiper v-model="index"  :show-dots="false" style="overflow-y: auto;" @on-index-change='swi_change'>
		        <swiper-item v-for="(item, index) in listbox" :key="index">
		          <div class="tab-swiper vux-center">
		          	<!--mescroll滚动区域的基本结构-->
				    <div class="mescroll" :id='mescrollnum(index)'>			    					    	
				            <div class="data-list" :id="datalistnum(index)" v-if= "index == index_l" v-for="(item_l, index_l) in listbox">			      	   
					      	   	<div v-for="pd in datalistnum1(index_l)">
									<fosterItem :pd_p = 'pd'></fosterItem>
								</div>
				      	    </div>																									
				            <!--<div class="data-list" :id="datalistnum(index)" v-if= "index == 1">			      	   
					      	   	<div v-for="pd in datalistnum1(1)">
									<goodsItem :pd_p = 'pd'></goodsItem>
								</div>
				      	    </div>																			
				            <div class="data-list" :id="datalistnum(index)" v-if= "index == 2">			      	   
					      	   	<div v-for="pd in datalistnum1(2)">
									<goodsItem :pd_p = 'pd'></goodsItem>
								</div>
				      	    </div>																			
				            <div class="data-list" :id="datalistnum(index)" v-if= "index == 3">			      	   
					      	   	<div v-for="pd in datalistnum1(3)">
									<goodsItem :pd_p = 'pd'></goodsItem>
								</div>
				      	    </div>																		
				            <div class="data-list" :id="datalistnum(index)" v-if= "index == 4">			      	   
					      	   	<div v-for="pd in datalistnum1(4)">
									<goodsItem :pd_p = 'pd'></goodsItem>
								</div>
				      	    </div>													-->
				    </div>
		          </div>
		        </swiper-item>
		      </swiper>
		  </div>
		  <!--<tabnav ref='tabnavhei'></tabnav>-->
	</div>
</template>

<script>
	import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
	import fosterItem from '@/components/o2o/fosterItem.vue';
	import tabnav from '@/components/o2o/ShopTabnav.vue';
	import mysearch from '@/components/o2o/search.vue';
	import MeScroll from 'mescroll.js';
    import 'mescroll.js/mescroll.min.css';
	
	const list = () => ['全部', '猪产品', '羊产品', '禽蛋产品', '羊产品'];
	
	export default {
		components:{
			Tab,
		    TabItem,
		    Sticky,
		    Divider,
		    XButton,
		    Swiper,
		    SwiperItem,
		    tabnav,
		    mysearch,
		    fosterItem
		},
		data(){
			return{
				listbox: list(),
				index: 0,
				demo2: '全部',
				imgbanner:'./static/images/banner.png',
				mescroll: null, //mescroll实例对象
                dataobj:{}
			}
		},       
		mounted:function(){
			var self=this;
			var datalistobj = function(){
				var obj ={};
	        	for (var i in self.listbox) {
	        		obj['dataList'+i] = [];
	        	}
	        	return obj;
	        }();
			self.dataobj = Object.assign( {}, self.dataobj, datalistobj)
	        self.mescrollArr=new Array(self.listbox.length);
	    
	        //初始化首页
			self.mescrollArr[0]=self.initMescroll("mescroll-0", "dataList-0");
        
		},
		methods:{
			switchTabItem (index) {
		      console.log('on-before-index-change', index)
		      this.$vux.loading.show({
		        text: 'loading'
		      })
		      setTimeout(() => {
		        this.$vux.loading.hide()
		        this.index01 = index
		      }, 500)
		    },		    
		    swi_change(currentIndex){
		    	var self = this;
		    	self.index = currentIndex;
		    	if(self.mescrollArr[self.index] == null){
		    		self.mescrollArr[self.index]=self.initMescroll("mescroll-"+self.index, "dataList-"+self.index);
		    	}
		    },
		    mescrollnum(indexs){
		    	return 'mescroll-'+indexs;
		    },
		    datalistnum(indexs){
		    	return 'dataList-'+indexs;
		    },
		    datalistnum1(indexs_l){
		    	var str = this.dataobj['dataList'+indexs_l];
		    	return str;
		    },
		    initMescroll(n_id,d_list){
		    	var self = this;
		    	var mescroll = new MeScroll(n_id, { //在vue的mounted生命周期初始化mescroll,确保此处配置的id能够被找到
			      down:{
						auto:false,
						callback: function(mescroll){
			             	self.mescrollArr[self.index].resetUpScroll();
			             },
						
						use:true
					},		
			      up: {
			        callback: this.upCallback,
			        page:{size:5},
			        noMoreSize:1,
			        htmlNodata:'<p class="upwarp-nodata">--  已经到底了  --</p>',
			        empty: {
						icon: require("@/assets/mescroll-empty.png"), //图标,默认nullrequire('@/assets/img/mescroll-totop.png')
                        warpId:d_list,
						tip: "暂无相关数据~", //提示							
					},
			      }
			    });
			    return mescroll;
		    },
		    upCallback(page) {
		    	var self = this;
		    	var dataIndex = self.index;
		    	self.getListDataFromNet(dataIndex, page.num, page.size,function(pageData,allpagecount){				
					//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
					console.log("dataIndex="+dataIndex+", curNavIndex="+self.index+", page.num="+page.num+", page.size="+page.size+", pageData.length="+pageData.length);
					
//					mescrollArr[dataIndex].endByPage(pageData.length,allpagecount);
//设置列表数据
                    for(var i = 0;i< self.listbox.length;i++){                  	
                    	if(i == dataIndex){                       		
                    		if (page.num == 1) self.dataobj['dataList'+dataIndex] = [];                    		
                    	    self.dataobj['dataList'+dataIndex]=self.dataobj['dataList'+dataIndex].concat(pageData);                   	    
                    	}
                    }
					
					self.$nextTick(() => {
			          self.mescrollArr[dataIndex].endByPage(pageData.length,allpagecount);
			       })				
					
				});
		   },
		   getListDataFromNet(curNavIndex,pageNum,pageSize,successCallback){
		   	    var self = this;
		   	    setTimeout(function () {
//			    	self.$http.post('/api/user/scroll/demo',{
//			    		swiperpage:curNavIndex
//			    	})
//			        .then(function(response){
//			        	//请求的列表数据
//				        let arr = response.data.data;				       
//				        //如果是第一页需手动制空列表
//
//                      let allpagecount = 4;
////					    self.dataList = self.dataList.concat(arr);				      
//				        //数据渲染成功后,隐藏下拉刷新的状态
//				        //回调
//		                successCallback(arr,allpagecount);
//			        }).catch((e)=> {
//				        //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
//                      self.mescrollArr[self.index].endErr();
//			        })
			    },0)    
		   }
		}
	}
</script>

<style>
	html,body{
		height: 100%;
	}
	.foster_box .no_margintop .vux-no-group-title{
		margin-top: 0;
	}
	.foster_box .pro_banner .weui-search-bar{
		/*background-color: rgba(0,0,0,0.3);*/
	}
	.foster_box .vux-slider > .vux-swiper{
		overflow: hidden;
	    /*position: relative;*/
	    position: fixed !important;
	    top: 217px;
	    width: 100%;
	    z-index: 100;
	    bottom: 50px;
	    /*overflow-y: scroll !important;*/
	    height: auto !important;
	}
	.foster_box .mescroll {
	    position: fixed;
	    top: 0px;
	    bottom: 0px;
	    height: 100%;
	    overflow-y: auto;
	  }
</style>
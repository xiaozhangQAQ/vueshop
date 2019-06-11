<template>
	<div class="shop_box">
		<mysearch @searchvalch="searchval"></mysearch>
	    <div class="" style="padding-top: 45px;">	    	
	    	
	    <!--è½®æ’­å›¾-->
		<div class="shop_banner">
			<swiper loop auto :list="demo06_list"></swiper>	
		</div>	
		
		<!--æ¨èè®¤å…»-->
       <div class="shop_pro">
       	    <div class="shop_pro_title">
       	    	<h4> æ¨èè®¤å…» <span> RECOMMEND </span></h4>
       	    </div>
       	    <!--<fosterItem :pd_p = 'pd' v-for="n in 3"></fosterItem>-->	           	    	           	    
       </div>
	           	           
	    <!--  ç²¾å“å•†åŸ         -->
	        <div class="shop_pro">
           	    <div class="shop_pro_title">
           	    	<h4> ç²¾å“å•†åŸ <span> BOUTIQUE </span></h4>
           	    </div> 
           	    <div class="">
           	    	<goodsItem></goodsItem>
           	    </div>
           	    
	        </div>
	        
	        
	        <!--  æ–°é—»èµ„è®¯         -->
	        <div class="shop_pro">
           	    <div class="shop_pro_title">
           	    	<h4> æ–°é—»èµ„è®¯ <span> NEWS </span></h4>
           	    </div>
           	    
           	    <group>
				    <cell-box v-for = '(item,index) in newsList'>
				       <div class="weui-cell__hd shop_pro_leftImg shop_pro_item_leftImg"><img :src="item.news_imgsrc"></div>
				       <div class="weui-cell__bd">
					      <p class="shop_pro_item_title">{{ item.news_title }}</p>
					      <p class="shop_pro_item_detail">{{ item.news_detail }}</p>
					      <div class="weui-progress shop_pro_item_time">
							   {{item.news_date}}å¤©å‰
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
				  img: './static/images/banner.png',
				  
				}, {
				  url: 'javascript:',
				  img: './static/images/banner.png',
				  
				}, {
				  url: 'javascript:',
				  img: './static/images/banner.png',
				  
				}, {
				  url: 'javascript:',
				  img: './static/images/banner.png',
				  
				}],
				 newsList:[
				   {news_title:'æ•™ä½ å››æ‹›å¥åº·åƒé¸¡è‚‰',news_imgsrc:'./static/images/news1.png',news_detail:'è‡ªç”±æ•£å…»ï¼Œæˆå°±éå‡¡å“è´¨å•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šå•Šsadfgasd',news_date:1},
				   {news_title:'é¸¡è›‹æ€ä¹ˆåšæœ€è¥å…»',news_imgsrc:'./static/images/news2.png',news_detail:'è‡ªç”±æ•£å…»ï¼Œæˆå°±éå‡¡å“è´¨',news_date:2},
				   {news_title:'é¸¡è›‹æ€ä¹ˆåšå¥½åƒ',news_imgsrc:'./static/images/news3.png',news_detail:'è‡ªç”±æ•£å…»ï¼Œæˆå°±éå‡¡å“è´¨',news_date:3}
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
				
			}
		},
		mounted(){
			var self = this;
//          this.$http.post('/api/user/hpshow')
//	        .then(function(response){
//	        	//è¯·æ±‚çš„åˆ—è¡¨æ•°æ®
//		        let arr = response.data.data;	
//		        self.datashow = arr
//		        console.log(self.datashow)
//	        }).catch((e)=> {
//		        //è”ç½‘å¤±è´¥çš„å›è°ƒ,éšè—ä¸‹æ‹‰åˆ·æ–°å’Œä¸Šæ‹‰åŠ è½½çš„çŠ¶æ€;
//              console.log(e)
//	        })
//          this.$http.get('/api/data')
//	        .then(function(response){
//	        	//è¯·æ±‚çš„åˆ—è¡¨æ•°æ®
//		   
//		        console.log(response)
//	        }).catch((e)=> {
//		        //è”ç½‘å¤±è´¥çš„å›è°ƒ,éšè—ä¸‹æ‹‰åˆ·æ–°å’Œä¸Šæ‹‰åŠ è½½çš„çŠ¶æ€;
//              console.log(e)
//	        })
            this.$http.fetchGet ('/api/data')
		},
//		 watch: {
//		    '$route' (to, from) {
//		 
//		      const toDepth = to.path.split('/').length;
//		      const fromDepth = from.path.split('/').length;
//		      if(toDepth == fromDepth){
//		      	this.transitionName = '';
//		      	return;
//		      }
//		      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
//		      console.log(this.transitionName)
//		    }
//		}
	}
</script>

<style>
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
		position: relative;
	    height: 100%;
	    padding-bottom: 45px;
	    overflow: hidden;
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
	 ğ
¨+àÏ¯Ë-Ìª¼òq-ù¨y•²¢8¿X…OrfPìoQ¿]µ¦£…lU³‰‡%´‹Š˜Ürñ«>ñĞî~×Dhoèœuë5ByÒ ÎÏ1ú “!ÜÎ/µ¯˜£Œc<ÌS¹³äRú~(M E¦]¿Ê™Î˜iyN›è´4Éì›Ûgf€ŠĞUÚ”ïgº­K®%)ş5¬å}›aÓBŞÜóÊ£œ5¾=Ö–¬ó"EÃ E­Ñ0Ìh(×rB•Ç¨Ş A¨æ*º!².Azâ%ˆÏ!ìÉªŠçêtáÅ”Ja8%£„ õ\G]l2äÙQT/xhº%×l_U=ÂLŒÌ È¡Ö¯ÉW‘áG³Æë°W îÑŠ©štÜÈåpš¢ô^N2åÁÇÕjî ÆëeÕöR,=‚’g!@ò ´¯)‡àeÕr±¹õfõy²1˜Âì¾¯¾LæÍ´v¢«GRÄÚ=Ÿ/÷r.mŸç!èE=‡‡V 3¨*•öJ¯rèdIíoğv•m¦pÌÀxóÆ£-' õn%ÖÂß9Ñ‘¾L½í±ıâà«6·rLoĞv)`n©Áœğ»R2§y‰’Õéb2æÿÑÿÚÙ×A»`áÌ“Æ¾"‘Ü>PìÇ“
*[•ÓZdpfttæ@pØDfÆÄ_Œ¬+t5É´Æ)	¯ÅT‹/ƒ5†:`Hœ(É	xOƒe”§›ç1$Ìy’ë9g7…9;ÊÒ”,ºÉ*v³í ÀøÍiŞµ(³7.¾¿TâtLûzDRF‘ÆMŒ”¤²`tµqJGè-
eGßHhWÊñõâŸ²”N"£ÑËT¸ŞĞVŞóS“¢4;–¼»ßvI”~Ëè¡êfKÍ¡óm\D@:w–Ù0Kç¢Ci+7»8Ø®âåÑ<¯wfüR±µQæÔƒ{åJ™i}ÚŒ/Rƒ4¥´¶A<wØ™„àãñ¤x;uó¾iÌ÷çZår—h/…Š(ÅINø-v)5áº³;
éšŒ>€)UlÚküvÆ°Y±«zÌ(øiöVO$â²€—‘f²€–bwk÷Èšé¦HĞˆ*p!ÄIï^ÆÎÁú²ïöƒ¤x5˜¶Ã&d5Ş»äÒ©Œ¾‹ÿRbœXá³-ÎcÙ®ûOğuö²›_#t>.¦Ù ˜.%éìËk‹(sÀ%EA·<ís»ù0†Ík÷Eu
úæQµóâŞZ¥[ğZÚ‚Ê¬?«„/÷(JI†˜¶|,ñ^¨Ñ~âÔBJUÀÒä^@%¦nà|7çüäªEíe96½Óàd,SŞ¼µp‹Ö¬~	ßI®C/ ÙDÊµàØ6y,‚>o·šKQ`IªœSš¢Î*C[MÖo:ÕV	oÏd
¯Mã¸ÄªW³&~ d2<?µqXËÕ¯ÃÑh™{ø9	¾|^2.ü­¨0m$HŠ$Æ¶q(Äv:æºaïx,s±Í˜PN²öm`QÁ 	;İ«bˆÄ?
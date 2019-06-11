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
				      		<div class="shop_pro_price_money">ï¿¥<span>{{ item.shop_price }}</span></div>
				      	</div>							     							      					     
			      </div>
			      <!--<div class="has_carts_count has_carts_num">
			      	  æ•°é‡ï¼šx<span>1</span>
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
		
		<!--åº•éƒ¨ç»“ç®—-->
		<div class="has_carts_bottom" style="bottom: 53px;">
			<flexbox>
				<div class="has_carts_item_left">
					<div class="has_carts_item_left" :ischeckall = 'ischeckall' id="check_all" @click="check_all()">
					    <icon :type="checkall_icon"></icon>
					</div>
				</div>
		      <flexbox-item class='has_carts_item_content'><div class="flex-demo">å…¨é€‰</div></flexbox-item>
                <div class="has_carts_price">
					<p class="has_carts_price_total">åˆè®¡ï¼šï¿¥<span id="priceAll">{{price_val}}</span></p>
					<p class="has_carts_price_jian">å·²ä¼˜æƒ ï¼šï¿¥<span>40</span></p>
				</div>
				<div class="has_carts_item_right" style="height: 100%;line-height: 50px;">
				    <div id="to_scOrder" class="has_carts_topay" @click="payon()">å»ç»“ç®—ï¼ˆ<span id="settleNum">{{settle_val}}</span>ï¼‰</div>
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
				 shopList:[ //å•†å“åˆ—è¡¨æ•°æ®
				   {id:"1",status_chk:'ko',icon_sta:"circle",shop_title:'çŒªè‚‰11KG',shop_imgsrc:'./static/images/zr.png',shop_detail:'è‡ªç”±æ•£å…»ï¼Œæˆå°±éå‡¡å“è´¨',shop_price:"120.01",min:"1",max:"10",buy_val:"1"},
				   {id:"2",status_chk:'ko',icon_sta:"circle",shop_title:'çŒªæ’12KG',shop_imgsrc:'./static/images/pg.png',shop_detail:'è‡ªç”±æ•£å…»ï¼Œæˆå°±éå‡¡å“è´¨',shop_price:"130.123",min:"1",max:"12",buy_val:"1"},
				   {id:"3",status_chk:'ko',icon_sta:"circle",shop_title:'é¸¡è‚‰13KG',shop_imgsrc:'./static/images/jr.png',shop_detail:'è‡ªç”±æ•£å…»ï¼Œæˆå°±éå‡¡å“è´¨',shop_price:"140.34",min:"1",max:"11",buy_val:"1"},
				 ],
				//okä¸ºé€‰ä¸­ï¼Œkoä¸ºæœªé€‰ä¸­
				ischeckall:'ko', //å…¨é€‰çŠ¶æ€
				checkall_icon:'circle', //å…¨é€‰é€‰ä¸­icon
				pro_check_arr:[], //é€‰ä¸­æ“ä½œå­˜æ”¾æ•°ç»„
				settle_val:"0", //ç»“ç®—æ€»æ•°
				price_val:"0" //æ€»ä»·æ ¼
			}			
		},
		methods:{
			check_item:function(item){ //ç‚¹å‡»å•†å“
				let self = this;			
				if(item.status_chk == 'ko'){
					var item_obj = {}; //å•†å“å­˜æ”¾å¯¹è±¡
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
			num_sub:function(item){ //æ•°é‡å‡
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
			num_add:function(item){ //æ•°é‡åŠ 
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
			check_all:function(){ //ç‚¹å‡»å…¨é€‰
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
						var item_obj = {}; //å•†å“å­˜æ”¾å¯¹è±¡
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
			is_checkall:function(){ //ç‚¹å‡»å•†å“åˆ¤æ–­æ˜¯å¦å…¨é€‰
				let self = this;
				var pro_item_length = self.shopList.length; //è·å–å•†å“æ•°é‡          
//				console.log(pro_item_length+' '+self.pro_check_arr.length)
            	if(pro_item_length == self.pro_check_arr.length){           		
            		 self.ischeckall = 'ok';
            		 self.checkall_icon = 'success';
            	}else{
            		 self.ischeckall = 'ko';
            		 self.checkall_icon = 'circle';
            	}
			},
			removeWithoutCopy:function(arr, item) { //æ•°ç»„ä¸­å»é™¤é‡å¤å…ƒç´ 
	    	     for(var i = 0; i < arr.length; i++){  
	    	         if(arr[i].id == item){  	    	         	
	    	             //spliceæ–¹æ³•ä¼šæ”¹å˜æ•°ç»„é•¿åº¦ï¼Œå½“å‡æ‰ä¸€ä¸ªå…ƒç´ åï¼Œåé¢çš„å…ƒç´ éƒ½ä¼šå‰ç§»ï¼Œå› æ­¤éœ€è¦ç›¸åº”å‡å°‘içš„å€¼  
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
	    	settle:function(){ // ç»“ç®—æ€»æ•°
	    		let self = this;
	    		var settle_num = "0";
	    		self.pro_check_arr.forEach(function(i) {	    			
	    			settle_num = floatObj.add(settle_num,i.num)	 
            	});
	    		self.settle_val = settle_num;
	    	},
	    	price:function(){ //æ€»ä»·æ ¼
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

<style>
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
	    Lö
A¢_
’Ó•‡á,‘äêæBn:MO•N
†z†5ú~F÷Äº‹ÌìíF|¤ĞİòBoòÀFŸJèaR¯G£ƒ›~M•x×Ù_„r5–©SW1Â–j=ëiQ¿æç¢<L•7qtÂ^ ¸ƒä"†BÍ¤ê+ºÂ–$/RNåWXe0:I¼4§]D·+Å2pO9¹¢P«zĞ[õæ÷¡áP)šXMÔÊ£Z}eı³ĞİJÃX%<À6ÉĞñÅp¬»g™"Ù¥·¡XÑşP\×N©b ¼yÒ]L»¹ã}jµåÕ0‚¦ÚÆİE_¼§½‰Ô›©U±GÁ[ÄXD¯^ƒGÉëæ8“(”¿U€C!é9Iµ!ªæùÀîôø­f©LGÅ~CubYG'r:õz—óÔÖA=Å\…ZŸc·<¡¾0­¤4µW®ª2PóŸ¤±«yÍ¤ÔúŒo·"ÊÛBsi‡{ºÊÛƒ²ĞíFe*)ö\r•‚Ø¾ªä¯º*Äac¤ØmAvN„lHıŸ)àšn‘¼elßDå&H½È×'Åêğa³Å‰MĞorx¥YcÑuX8eÑ¨?9™´Fˆ½´Ü±Xà'*ªõÉbPÖÿz°ÏD,û²^ƒLÒ`¶sĞ¦Ä~Í#@,•ô?Zs¿h¬[Òœè$}O³¤{L‡Ñ; å#¡•îaXrÒ€jéˆ
Şö—Á±NN$ËºešµÊeM"Øb`•eñ±-ûqäcç]Î-Ñº›ï¾[s€3 ”‡°4·Nııgn0¼2.»¨-;™õÑ?ã¾Ü¶àÉEø³l;qİ™Q[ Wúuë!2©ë}4®È”pD<Ç¾ÍnzÕ9hÅö³3ylÔgËNw7»‡$€…-ë3Ø}&¬f ¤1:ÒåÜİ3Ô<Ò‡ü±w´ÍÖë/$I4J(;Üêb¯UvÿÌ¨4¤·œ—xRßÛëİCÂL¬ó‚Ú3¬Šâ2‰3ÑB\Ê!€ÌÄÍ79\ÁèëÇı#±$ÿšz¼Ï[)¯úä’cˆ]ğMÄL1ª´

ñâ%}™YŠ­÷UFª¡Šçh£zªË'z„FÔi®¤}¨úb}y`¤}¨yâ:ï¼_àhµü¡îrè0‹¸¿ù¦Å€ Õ¨¯õE™w› ×!tJS¬Våk^ÆÊÊÊï®è±RÛàJzƒ^W×¦Êétä„ß©YY[74è>WŞÜ÷D%õWòş z¦ñá>™*0!òæuXûÒ2a›ğA4\Ô#]}&ÇÒ¹,7h?^H£9‹«ˆ¸‰{íZµ‚{ØÖ\Â±¨§5—¥N5÷}À.·ò³»’ÙÎÑ­ÍE¦Œo‰9€íäåPBŸ¹sÆiÕ‰6$§«qP°Iøû¤—‰­ÄUË§.…‰Ÿª#.P¤¸‘–N²©„èÈ1_¬Q‘=Êb=4šüâº`"®Çwî´o&l1:Dg2…İƒxªn(¢"µ¸µæ¹ƒlZßÁİÛGÇ—~Û¯ûaù_Å€Gî¡U¦ZjÉ¸$İtÿè,JòÜ²_’‡§B²>N»®Ù$Š³­º÷¹YòÍqLx7ûøo(¯Q¨şu•Aì3LáÈh¥×¬b9‚î~Í‰q2šLdş^OçgW*`ğ;G
ï¼cMâjkïcÀm"í‡=9fª£oeá©³yä$|s¨A´B.ãı1G×¹²Ä–å#‘kØ¥tvTÏÌ¾>êßèëpF¼fá?Øæev‰Óe}‡+XatŸöıÓ}À8\²(¶¾}ïÊS:šÈšM¼wr¢W`ÛäÎ”Ö–ğØ´)¯ï![˜ÜğÈï`İ:&VøhúÃıÅfÊÅ¦Öñòİ8:móL›ùFašçø¨õØƒ±ğ6ú”±Ûû²‡r.w=fñ¬ş‘é¦(éÇ˜^;Ï-ÒÏ{òŞ‘|e€òY°î¨13È(úWN}Díô>,jpÿ;ß¢S!u»â‰ŠèVªó_mPÊŞµø'¹D%­aÒôÎXÈ±KÈ“cş)¹›ÿ¤Ä¾[í‘Ê‚Q&Ù(,$^iÆ·ZÜI|K&õ˜zßwç÷nımWHdè¥k‰Tõ…Š0 şµS¬2Çõ#ÛrüMyY“<~èñ[œøÏ©áVÍe¬ˆ&Ô ä®
n];Á…xy9šñæwG]Öš¯Ã+Vn\UŞÓ›Ä*¯ßJìœèh…ŠÔ|œQs¥mM|½.  [?BbÖd9Ûi®ßyãOÚiÀYM 6Ç 8zã¿†åj Öä7šW¾’›Z†ÉÅ"ôyP2RzM†#gJXRßÎÁ-z®e³2„qã^éLÌË%Gnv4bŸ·~Ï^ˆTÌ˜OË‘{v•{ıÓPÏÛÛ©¨™Ù(bUşÚ½;¶ˆ®)7³µÃLƒ±$§§f…™NŸa™\<£=ãvt4´ª|OYl[ø–©ºûù*yÕ¼¢0É÷G¨ûøH±Í`L?éİ×G>×ò¤ÈSµ¢Gºû†’,[×2&Vî˜ßş6cÕìÕXÂ%î<:pyòÃJ¼seÉoXM8Zî¸š'¿<yş½ÊhÊtƒmòNZ%°Âˆ(¬Èü’[h2§F8à®Ïõ&!Ze¢·‡ºØìóŞünsİVƒ—»ã—¹¥‚W¡—n)+qïœÜî*)›×ÄFÍ]ÂjÑI—»çNqåÆõåLŞÿşA)©ŸÒ®ÂÓ¾DfdZZÕ/ˆâyéA=î%MØ©47T‰ÇÙà"âÈÀè98½TäûhŒô6„Ÿ;îvù"€7átê)Éïfi1œNÍ»[>9±f$Ü®»r»çÉHÔ5fo÷?>KŒÇ¤ë›Y»(Øw¾Î«î›‡ñÏù½Nœ=l#-GUÛÏ³Œ`ÿªæW
eiófñä•‹›•ç7W´Õtş’ìP
õF„¥"3Ÿ=);q²Ü­…ÿz ¢C½†Í|7íÍËÆŒğ¨¹×šøöMcy?ëİ¨‡4y"‹ğñ¯¥‹zÛ,™z%o£H>|
=EQôğ÷¢2)Ûğfb%}ì¥ş\Æ*¿jJ×SÔD¤dÆŞmä8øÎ«x¿\×ĞnÌ^>‰$Á5ç¶»]ºY¡Èß¼_êesÉ ´ùtñ —ò·‰ĞÂçVÚğ‰å&(Èì>¸ËVeòÜ‚Á_3n68 âEk_Åè¬ëÊ0p–h €ºê…²?zÍŸZ®C”ùrÕb-G´¿E¸çÑNÀú1X¿S™ëQf[™ôÂ„•û!_eYûK\SêÙ´RŒKœ§v•­çµŞœBi±°$2Y;Œˆ¢ûæ:ø-ÿ‚æÚ‰©`Ø#/t~Æ½Ã¼+erûï`jr6×_dÕÁŸ2|]îù÷ñtèñûÆ%ªË7„ŸMFZL ªbó2{åØsÕem‡|aDXT¿Ës’c†`ŸX~õ>x˜‘£h]²ï5Áó©!ññ(ş"¢UdË¥9gcìdO½;Cb(NYí‰™_8—B)ÃÛh°G"&M_—…Öê?™`é·LcÅ‡ùoÉxCVv¿ƒäîÎ±ËB(¨`¾pâöô†ÅAm5ªˆÌ —\ BŒ.÷ü·³ù-ëîuF*;ç×[%AÂ¨“"·ğK ÿšèlf)0‡òŸ”S>}L}ìnÕ^â×2ˆÒ‰ËÆstZÕ`f#×€İ{Zn—Òÿù¢.>¥2ë˜š/“Jq0ĞÛø:˜b?AİNRaeZ¨ôIºzöê¯DÖ«åís<1H<´;|š‹&_q¼…õ‘¶Í'2êóáJR#éƒt8ô:úCWÚv˜œ\n[[jM¨VuÄ;ú†€5è¾Îç& ÈCÜÁ²ø$<«Oã®­¤»_©vzœ+<1[şWNnq‘3-$Gå‰Eé½#îÕ±B5~ˆC4Ô1ca])·–gòA]Z²pxDèÕ‡wü«ÛD¡Jrş¸†2–(ığg1Ğ” fÈø½—<L¿ øƒ+¹Â×râK×mºñ:õlş7®2üíQ¹œ	0ÊFSíÓš3}%ÌëĞôfš[¢Ì{SˆÙÿŞhı_~“,´_zLÀ•SÇPGñ-Ù€]œŸw¶rzƒx‡…R„LŠ m‡NöÁò­Ä`”e4‹ğIáaÉ«PvÊ­)†‹-íÀF°Ü²˜ÉM'nøÎŠh¦Pí«‡–¬¯ÁQ/vzŒ)<‚éîÎ28S±Ë3Iò æ\7 6Õ€Sü³{³Ñ¸2.şgû¶YW{< à¤uéÀ×Ø¬D»)¶øAVÑ ôÙa‹ ¥¦vq©—E§à6›b>¤LIàìsˆÖJ"=Œ3süp¶Ó,Ï3R€_|MÀÃ/¶D5ó ıbK7*<å+òÃ^`øJ¼qWpóDoôŸ!ù]l#a£ğOnK$‹–È±h%¥bştbKxCØœŒ 	5k4—%9İ|äÍo{á^Tñ!Ù¶ŞÄsoïÖQ”§Dg¯ZƒMäbSßäİ²Nh¿œ%²¤R>zB“~C2P
JÓrA§J7ßştWè}«şl”8
oÈ‰P!vw:ÖÂØ†D±»‚Ò¡;úDšÉp!À $>[x÷wë9N6¥U¾ï¢Y9 kô&$ğf@ˆÛ¤r°«ÿ?Ûî–LÓÏ?İ3ËÀø9[7†õˆo©E`\°ºeNgK";ü,ürØ¨$j<~Y”Zuö’ò.kUõu>Ó×mBŒò*ï+¶_¶V”3Õ¨MTj#…‘H-8ıUúõ"ˆz–´×Xm\Èzó€À€å¼áöèÊ° ^h}gÊvóİ\ÄÚé/C^ÖNu«çï«Jªİ51Çæ!Æ-®Í ÿ{·?f—t€uQ_sª¿ƒá:›rïÚ¡DŞ^ŒÎåÿ±±²D¯ûÅ0ÎÇ±ofrÀKÀ¡ùø|X¦‹™É\#ç-I³à7àxşØÖM8b¸I6Â–§±Vàbÿ¡8ÚUV}	3‚2Ä¶–šb.-.{kùq61öQïQØñÓ-ş"¼¹¤¿¼w9ş[™w.LÉÍDû_ROßÛğ¡|Ÿz¹5v$}è\¼XBl¶§xp |‰>ıIóoÉÎ f„¬$gHT ‰xÈ~Ö×ü&l™išåò1ÏHµ6ü¸ W¾ı:1q²q˜Œ·#¡@ª¿÷öR/DÎa]¦‡óó’FÆ¨2¯[øj‡œíºÚ¼0€ØÉ<|mÈÒqXÒ!´#5ù›dL¹Ñ¤Ø®¥ŸõNÆO¥aàØ˜¢„“qK?ƒg
5İW>Åœ:ÿúĞzÄÜÛ6ÆñÄ§³ø_uR5V˜#Äk7P*&gö½„<šVô¨x¸0…ŞjĞêätÏk1C*,Ú”Øe‹(-¶H±aÖlE$=jø§CTqSa9†ıŒúè	×bãïÕ¡ÂÈı#V¿«5Làë¸îŒ;ƒå­—Èç:ŠLdèuE[+ƒp¼Q6ûuÁ ö
ƒé¸íÕ£#§7]AwÂT	Ç=™-í©ùFG¾Ğj9Éö:
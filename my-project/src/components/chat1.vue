<template>
	<div class="">
		<button @click="connS">连接socket</button><button @click="closeS">断开socket</button>状态：{{zt}}<br>{{fromname}}:<input type="text" v-model="iomsg"/><button @click="iosend">发送</button>
		<div class="">
			<p v-for="i in CHAT.msgArr">{{i.fromUser}}:{{i.iomsg}}</p>
		</div>
	</div>
</template>

<script>
	import CHAT from '../chatIM';
	export default {
		data() {
	      return {
	        fromname: '小A',
	        toname:'小B',
	        iomsg:'',
	        isconnS:false,
	        zt:'断开',
	        sendmsg:{},
	        CHAT
	      }
	    },
	    computed:{
	    	
	    },
	    mounted:function(){	   
	    },
	    methods:{
	    	iosend(){
		     	var self = this;
		     	self.sendmsg.toUser = self.toname;
		     	self.sendmsg.fromUser = self.fromname;
		     	self.sendmsg.iomsg = self.iomsg;
		    	CHAT.submit(self.sendmsg); 	
		    },
		    connS(){
		    	var self = this;
		    	CHAT.init(self.fromname);
		    	CHAT.message();
		    	self.zt = '连接';
		    },
		    closeS(){
		    	var self = this;
		    	CHAT.logout();
		    	self.zt = '断开';
		    }
	    }
	}
</script>

<style>
</style>
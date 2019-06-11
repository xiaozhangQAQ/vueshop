<template>
	<div class="addr_dialog">
		<div v-transfer-dom class="dialog_box">
	      <x-dialog v-model="showToast" class="dialog-demo">
	        <div>
	           <group label-width="4.5em" label-margin-right="1em" label-align="justify">
	           	  <cell title="编辑地址" style="font-size: 18px;">
	           	  	<div @click="close_toast">
			           <icon type="cancel"></icon>
			        </div>
	           	  </cell>
	           	  <x-input title = '姓名' placeholder="请输入姓名"></x-input>
	           	  <x-input title = '联系电话' placeholder="请输入联系电话"></x-input>
	           	  <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify" placeholder="请选择地区"></x-address>
	           	  <x-textarea title="详细地址" :rows="2" :max="200" name="detail" placeholder="请输入详细地址" :show-counter="false"></x-textarea>
	           	  
	           	  <x-button type="primary">保存</x-button>
	           </group>
	        </div>	        
	      </x-dialog>
	   </div>
	</div>
</template>

<script>
	import { XDialog,Icon,Group,Cell,XButton,XTextarea, XInput,XAddress, ChinaAddressData,TransferDomDirective as TransferDom  } from 'vux'
	
	export default {
	  directives: {
	      TransferDom
	   },
	  components: {
	    XDialog,
	    Icon,
	    Group,
	    XInput,
	    Cell,
	    XAddress,
	    XTextarea,
	    XButton
	  },
	  props:["showToast"],
	  
	  methods: {
	    doShowToast () {
	      this.$vux.toast.show({
	        text: 'toast'
	      })
	    },
	    close_toast (){
	    	this.childtoast = false;
            this.$emit('listen_closetoast',this.childtoast)
	    }
	  },
	  data () {
	    return {
           addressData: ChinaAddressData,  
           addressValue: [],
	    }
	  }
	  
	}
</script>

<style>
	.dialog_box .weui-dialog{
		top: 35%;
		width: 90%;
	}
	.dialog_box .weui-cells{
		margin-top: 0;
		font-size: 16px;
	}
	.dialog_box button.weui-btn{
		width: 90%;
		margin-bottom: 1rem;
	}
	.vux-popup-dialog{
		z-index: 5001 !important;
	}
</style>
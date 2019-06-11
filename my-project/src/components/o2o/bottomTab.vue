<template>
	<div class="bottom_tab">
		<flexbox :gutter="0">	      
	      <div class="flex-demo bottom_return" @click="goback">返回</div>
	      <flexbox-item><div class="flex-demo add_new_addr" @click="open_toast">添加新地址</div></flexbox-item>
	    </flexbox>
	</div>
</template>

<script>

import { Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
   methods: {	    
	    open_toast (){
	    	this.childtoast = true;
	        this.$emit('bottom_show_addr',this.childtoast)
	    },
	    goback(){
	    	this.$router.go(-1)
	    }
  },
}
</script>

<style>
	.bottom_tab .flex-demo{
		text-align: center;
	}
	.bottom_tab .add_new_addr{
		background-color: #00ae67;
		color: #fff;
		font-size: 16px;
	}
	.bottom_return{
		width: 5.5rem;
	    color: #02ad67;
	    font-size: 16px;
	}
</style>
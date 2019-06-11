<template>
	<div class="totop">
		<div class="" v-if="isshow">
			<img id="totop" :src="totopimg" @click="totop" style="width: 30px;height: 30px;"/>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				totopimg:'./static/images/to_top.png',
				isshow:false
			}
		},
		mounted(){
			var self = this;
			
			window.onscroll = function() {scrollFunction(60)};
			function scrollFunction(sTop) {
			    if (document.body.scrollTop > sTop || document.documentElement.scrollTop > sTop) {
			        self.isshow = true;
			    } else {
			        self.isshow = false;
			    }
			}
		},
		methods:{
			totop(){
				$('html,body').animate({
					scrollTop: '0px' }, 600)
			}
		}
	}
</script>

<style>
	.totop{
		position: fixed;
		bottom: 63px;
		right: 20px;
		z-index: 100;
	}
</style>
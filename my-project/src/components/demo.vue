<template>
	<div class="">
		<!-- 每次点击时，显示的时间都不同 -->
  <button @click="showMethod">methodsNow</button>

  <!-- 每次点击时，显示的时间都相同 -->
  <button @click="showComputed">computedNow</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				message: '我是消息，'
			}
		},
		computed:{
			computedNow: function(){
      return new Date().toLocaleString();
    }
		},
		methods:{
			methodsNow: function(){
      return new Date().toLocaleString();
    },
    showMethod: function() {
         alert(this.methodsNow());
    },
    showComputed: function() {
         alert(this.computedNow);
    }
		}
	}
</script>

<style>
</style>
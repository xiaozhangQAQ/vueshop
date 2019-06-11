<template>
  <div class="home">
    <!--<h1>{{ msg }}</h1>-->
    <!--header-->
    <div class="v-header">
    	<Header></Header>
    </div>
    <div class="">
    	<x-header></x-header>
    </div>
    <!--leftnav-->
    <div class="v-leftNav">
    	<leftMenu></leftMenu>
    </div>
    <!--containt-->
    <div class="content">
        <transition name="el-zoom-in-top">
          <router-view v-show="show"></router-view>
        </transition>
    </div>
  </div>
</template>

<script>

import Header from './common/Header.vue'
import leftMenu from './common/leftMenu.vue'
import {XHeader} from 'vux'

export default {
  name: 'Home',
  data () {
 
      return {
        show: true
      }
  },
  mounted:function(){
  	this.$router.push({path: '/home'})
  },
  components:{
  	Header,leftMenu,XHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
  position: absolute;
  left: 200px;
  top: 70px;
  bottom: 0;
  overflow: scroll;
  width: calc(100% - 210px);
}
.content::-webkit-scrollbar {
  display: none;
}
</style>

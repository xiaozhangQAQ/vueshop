<template>
  <div>
    <!--mescroll滚动区域的基本结构-->
     <div id="mescroll" class="mescroll">
      <ul id="dataList" class="data-list">
			<li v-for="pd in dataList">
				
				<p class="pd-sold">已售{{pd.id}}件</p>
			</li>
		</ul>
    </div>
  </div>
</template>

<script>
//引入mescroll.min.js和mescroll.min.css
import MeScroll from 'mescroll.js'
import 'mescroll.js/mescroll.min.css'

export default {
  name: 'xxxx',
  data() {
    return {
      mescroll: null, //mescroll实例对象
      dataList:[] //列表数据
    }
  },
  mounted: function () {
    //创建MeScroll对象
    this.mescroll = new MeScroll("mescroll", { //在vue的mounted生命周期初始化mescroll,确保此处配置的id能够被找到
      up: {
        callback: this.upCallback
      }
    });
  },
  methods: {
    //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page) {
    	var self = this;
    	setTimeout(function () {
	    	self.$http.post('/api/user/scroll/demo',
	        {
	        	num: page.num, //页码
	            size: page.size //每页长度
	        })
	        .then(function(response){
	        	//请求的列表数据
		        let arr = response.data.data;
		        //如果是第一页需手动制空列表
		        if (page.num == 1) self.dataList = [];
		        //把请求到的数据添加到列表
		        self.dataList = self.dataList.concat(arr);
		        console.log(self.dataList)
		        //数据渲染成功后,隐藏下拉刷新的状态
		        self.$nextTick(() => {
		          self.mescroll.endByPage(self.dataList,4);
		        })
	        }).catch((e)=> {
		        //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
		        self.mescroll.endErr();
	      })
	    },500)    
    }
  }
}
</script>

<style>
  /*通过fixed固定mescroll的高度*/
  .mescroll {
    position: fixed;
    top: 0px;
    bottom: 0px;
    height: auto;
  }
</style>
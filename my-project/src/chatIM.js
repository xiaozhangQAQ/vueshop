import io from 'socket.io-client'
//import Vue from 'vue'
//import Vuex from 'vuex'
//Vue.use(Vuex)

const CHAT={
  socketurl:"http://127.0.0.1:3000",	
  msgArr:[],
  socket:null,
  fromname:'',
  init:function(fromname){
  	var self=this;
    //连接websocket后端服务器
    self.socket = io.connect(self.socketurl,{'force new connection': true})
    self.socket.on('connect', function() {
      console.log('已连接');
      self.fromname = fromname;
      self.socket.emit('addUser',fromname);    
    }); 
    
    self.socket.on('connect_error', function() {
      console.log('连接错误');     
    }); 
  },
  //提交聊天消息内容
  submit:function(obj){
  	var self = this;
    this.socket.emit('sendMsg', obj);    
  },
  //获取信息
  message:function(a){
  	var self=this;
		this.socket.on('getmsg', function(obj) {
	      self.msgArr.push(obj);     
	 })
  },
  //退出，本例只是一个简单的刷新
  logout:function(fromname){
    this.socket.disconnect();
    // location.reload();
//  self.socket.emit('rthisemoveUser',fromname);
console.log(this.fromname+'已下线')
  }
}
export default CHAT
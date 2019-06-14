import axios from 'axios'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
export default function ajaxAsync (url, data = {},type="post") {
    return new Promise(function(resolved,reject){
        let promise;
        if(type === 'get'){//发送GET请求
            //url 参数数据
          let dataStr = '';
          Object.keys(data).forEach(key=>{
              dataStr += key + '=' +data[key] + '&';
          })
          if(dataStr !== ''){
              dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'));
              url = url + '?' + dataStr;
          }
          promise =axios.get(url);
        }else{//发送POST请求
          promise = axios.post(url,data)
        } 

        promise.then(function(response){
        //   成功调用resolve()
          resolved(response.data);
        }).catch(function(error){
        //   失败调用reject()
          reject(error)
        })
    })      
  }

//   异步使用
//   const response = await ajaxAsync();
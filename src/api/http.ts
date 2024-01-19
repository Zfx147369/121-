// 引入axios 
import axios,{AxiosRequestConfig,AxiosInstance} from 'axios'

import { ElLoading  } from 'element-plus';

  class Server {
     instance: AxiosInstance;
     constructor (baseConfig:AxiosRequestConfig){
      this.instance = axios.create(baseConfig);

      // 添加请求拦截和响应拦截
      this.instance.interceptors.request.use((config)=>{
        ElLoading.service({
          fullscreen:true,
          text:'正在加载中...',
          background:"rgba(0,0,0,0.5)"
        })
        // 给请求头添加token
        // 请求： 请求头  请求体  请求行
        let token = localStorage.getItem('token');  
        if(token){
          config.headers.Authorization = token
        }
        return config
      })
      this.instance.interceptors.response.use((res)=>{
        ElLoading.service({
          fullscreen:true,
          text:'正在加载中...',
          background:"rgba(0,0,0,0.5)"
        }).close()
        return res
      })
     }

     get(url:string,params={}){
       return this.instance.get(url,{params})
     }

     post(url:string,data={}){
      return this.instance.post(url,data)
     }
     put(url:string,data={}){
      return this.instance.put(url,data)
     }
     delete(url:string,data={}){
      return this.instance.delete(url,data)
     }
    
     request(config:AxiosRequestConfig){
         return this.instance(config)
     }



  }

   export default new Server({
     baseURL:"https://api-hmzs.itheima.net/api/",
     timeout:5000
   })
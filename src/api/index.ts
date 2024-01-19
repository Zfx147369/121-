import http from "./http"

// 分别导出请求接口
interface Ilogin{
  username:string,
  password:string
}
// 登录接口
export const loginApi = (data:Ilogin)=>http.post("/park/login",data)

//下拉列表  /system/user/dropList
export const systemAPi = ()=>http.get("/system/user/dropList")

//数据列表  /parking/card/list
interface data{
  page:string,
  pageSize:string,
  carNumder?:string,
  personName?:string,
  cardStatus?:string,
}
export const parkingAPi = (data:data)=>http.get("/parking/card/list",data)

//删除   /parking/card/{ids}
export const delApi =(ids:string)=>http.delete(`/parking/card/${ids}`)
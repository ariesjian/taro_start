import Taro, { Component } from '@tarojs/taro'
import { BASE_URL } from '../config/index'
import { getCacheData} from '../utils'

export default class fetch {
  
  static request(method, url, data, contType) {
    let appid,accessToken;
    //登录不带appid&accessToken
    if(url.includes('/wxxcx/login.do')){
      appid = ''
      accessToken = ''
    }else{
      appid = getCacheData('userinfo') ? JSON.parse(getCacheData('userinfo')).appid:''
      accessToken = getCacheData('userinfo') ? JSON.parse(getCacheData('userinfo')).token:''
    }
    let baseurl = BASE_URL 
    let baseProUrl = ''
    let params = {
      url: `${contType === "application/json" ? baseProUrl : baseurl}${url}`,
      data: data,
      method: method,
      header: {
        'content-type':  contType||'application/json',
        'appid':appid,
        'accessToken':accessToken
      },fail:()=>{
      }
    }
    return Taro.request(params)
  }
  static param(a = {}) {
    var b = []
    for (var i in a) {
      b.push(`${i}=${a[i]}`)
    }
    return b.join('&')
  }
  static get(url, data) {
    // if (data) {
    //   url = `${url}?${this.param(data)}`
    // }
    return this.request('GET', url, data)
  }
  static post(url, data) {
    return this.request('POST', url, data,'application/x-www-form-urlencoded')
  }
  static jsonget(url,data) {
    return this.request('GET', url, data, 'application/json')
  }
}


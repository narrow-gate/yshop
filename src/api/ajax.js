/**
 * ajax请求函数模块
 * 返回值: promise对象(异步返回的数据是: response.data)
 */

import axios from 'axios'
export default function ajax (url, data={}, type='GET') {

  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {//获取对象所有的属性名，
        dataStr += key + '=' + data[key] + '&'//key是获取属性名，将数据组装成key=data[key]形式
      })
      if (dataStr !== '') {
        //截取dataStr中位于0和最后一次出现&的位置之间的数据
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}

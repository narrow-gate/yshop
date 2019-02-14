/**
 * 直接更新state的多个方法的对象
 * vuex的mutations模块
 */

import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
   DECREMENT_FOOD_COUNT,
   CLEAR_CART,
   RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default{//包含数据的对象
    [RECEIVE_ADDRESS] (state, {address}) {
        state.address = address
      },
    
      [RECEIVE_CATEGORYS] (state, {categorys}) {
        state.categorys = categorys
      },
    
      [RECEIVE_SHOPS] (state, {shops}) {
        state.shops = shops
      },
      [RECEIVE_USER_INFO] (state, {userInfo}) {
        state.userInfo = userInfo
      },
      [RESET_USER_INFO] (state) {
        state.userInfo = {}
      },
      [RECEIVE_GOODS] (state, {goods}) {
        state.goods = goods
      },
      [RECEIVE_RATINGS] (state, {ratings}) {
        state.ratings = ratings
      },
      [RECEIVE_INFO] (state, {info}) {
        state.info = info
      },
      [INCREMENT_FOOD_COUNT] (state, {food}) {
        if(!food.count){
        //新增属性，没有数据绑定  food.count=1
Vue.set(food,'count',1) //让新增的属性也有数据绑定
state.cartFoods.push(food)//通过一个变量引用，其他变量改变了，这个也会改变???
}
        else{
          food.count++
        }
      }, [DECREMENT_FOOD_COUNT] (state, {food}) {
      if(food.count){
        food.count--
      }
      if(food.count===0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1) //????不懂
      }
      },
      [CLEAR_CART] (state) {
        //清除food中的count
state.cartFoods.forEach(food => food.count=0);
        //移除购物车中的所有购物项
        state.cartFoods=[]
      },
      [RECEIVE_SEARCH_SHOPS] (state,{searchShops}) {
        state.searchShops= searchShops
      },
}
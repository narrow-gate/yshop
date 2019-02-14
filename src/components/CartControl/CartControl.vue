<template>
  <div class="cartcontrol">
      <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
      </transition><!--.stop防止事件冒泡-->
    <div class="cart-count"  v-if="food.count" >{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
    props:{ //属性「一般／函数」，函数少
food:Object
    },
    methods:{
       updateFoodCount(isAdd){
           this.$store.dispatch('updateFoodCount',{isAdd,food:this.food})
       }
    }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>

<template>
    <div id="app">
      <router-view/>
      <FooterGuide  v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>
<script>
import {mapActions} from  'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
//import {reqFoodCategorys} from  './api'
export default {
    mounted(){//要在首页中注册，Action 通过 store.dispatch 方法触发：
this.$store.dispatch('getAddress')
this.$store.dispatch('getUserInfo')
 
 },
     /**
     *
 mounted () {
      // this.$store.dispatch('getAddress')
      this.getAddress()
    },

    methods: {
      ...mapActions(['getAddress'])
    }, */

        components:{
        FooterGuide
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 #app
    width 100%
    height 100%
    background #f5f5f5
</style>

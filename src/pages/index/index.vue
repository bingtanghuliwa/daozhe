<template>
	<div>
		<index-header></index-header>
		<img-swiper></img-swiper>
    <icon-swiper></icon-swiper>
	</div>
</template>

<script>

import IndexHeader from './header.vue'
import ImgSwiper from './imgswiper.vue'
import IconSwiper from './iconswiper.vue'

export default {
  name: 'index',
  data () {
    return {
    }
     
  },
  components:{
  	"index-header": IndexHeader,
  	"img-swiper": ImgSwiper,
    "icon-swiper": IconSwiper
  }
}
</script>

<style scoped>

</style>

<template>
	<div>
		<swiper :options="swiperOption" >
		    <swiper-slide>
		    	icon1
		    </swiper-slide>
		    <swiper-slide>
		    	icon2
		    </swiper-slide>
		    
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data () {
		return {
			swiperOption: {
				direction : 'horizontal',
				autoHeight: true,
				pagination : '.swiper-pagination',
				paginationClickable :true,
				scrollbar:'.swiper-scrollbar',
				observeParents:true
			}
    	}
	},
	components:{
		"swiper": swiper,
		"swiper-slide": swiperSlide
	}
}
</script>

<style scoped>
	@import '~swiper/dist/css/swiper.css';
</style>

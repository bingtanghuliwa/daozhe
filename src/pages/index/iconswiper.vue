<template>
<<<<<<< HEAD
	<div>
		<!-- <swiper :options="swiperOption" >
		    <swiper-slide>
		    	icon1
		    </swiper-slide>
		    <swiper-slide>
		    	icon2
		    </swiper-slide>
		    
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper> -->
	</div>
=======
	<swiper :options="swiperOption" >
		<slot></slot>
	    <swiper-slide>
	    	1
	    </swiper-slide>
	    <swiper-slide>
	    	2
	    </swiper-slide>
	    
	    <div class="swiper-pagination"  slot="pagination"></div>
	
	</swiper>
>>>>>>> origin/master
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
<<<<<<< HEAD
				scrollbar:'.swiper-scrollbar',
=======
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
	
>>>>>>> origin/master
</style>

<template>
	<swiper :options="swiperOption" >
	    <swiper-slide>
	    	<div class="img-container">
	    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1708/2a/f848fc9f80eace02.jpg_640x200_a3238bf3.jpg" />
	    	</div>
	    </swiper-slide>
	    <swiper-slide>
	    	<div class="img-container">
	    		<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1707/90/2ab6fd356529aa02.jpg_640x200_5a7251a0.jpg" />
	    	</div>
	    </swiper-slide>
	    
	    <div class="swiper-pagination"  slot="pagination"></div>
	
	</swiper>
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
	.img-container {
		background: #eee;
		overflow: hidden;
		width: 100%;
		padding-bottom: 31.25%;
		height: 0;
	}
	.swiper-img {
		width:100%;
	}
</style>

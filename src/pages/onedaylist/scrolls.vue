<template>
	<div>
		<index-header></index-header>
		<div v-iscroll class="iscrollCon">
        	<ul>
        		<li>1111111</li>
        		<li>11111111</li>
        		<li>11111111111</li>
        		<li>111111111111</li>
        		<li>11111111</li>
        		<li>1111111111</li>
        		<li>1111111111111111</li>
        		<li>211111111111</li>
        		<li>21111111111</li>
        		<li>21111111111</li>
        		<li>2111111</li>
        		<li>2111111</li>
        		<li>211111111</li>
        		<li>2111111</li>
        		<li>2333</li>
        	</ul>
    	</div>	  	        
	</div>
</template>
<script>
	import IndexHeader from '../index/header.vue'
	import VIscroll from 'viscroll'
	import Vue from 'vue'
	Vue.use(VIscroll, {
	    mouseWheel: true,
	    click: false,
	    preventDefault: true,
	    tap: true,
	    bounce: true,
	    disableTouch: true
	});
	export default {
	  name: 'scrolls',
	data () {
	    return {
	    	iscrollConf: {
                mouseWheel: true,
                vScrollbar: true,
                click: false,
                preventDefault: true,
                tap: true,
                bounce: true,
                disableTouch: true
            }
	    }   
	},

	methods: {

        /**
         * get the instance of Iscroll
         *
         * @param {Object} iscroll A instance of Iscroll
         */
        getIscroll(iscroll) {
            alert(1)
        }
    },

	components:{
	  	"index-header": IndexHeader
	  }
	}
</script>
<style scoped>
.iscrollCon{
	height:1rem;
	overflow: hidden;
}
</style>
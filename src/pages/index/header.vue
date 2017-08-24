<template>
	<header class="header">
		<a class="header-left iconfont">&#xe624;</a>
		<div class="header-title">
			<span class="single-line"><span class="iconfont">&#xe620;</span>输入城市/景点/游玩主题</span>
		</div>
		<div class="header-right">
			<span class="nav-city">北京
				<i class="downarrow"></i>
			</span>
		</div>
	</header>
	
</template>

<script>
export default {
	data () {
		return {

    	}
	}
}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.header {
		position: relative;
	    overflow: hidden;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}
	.header-left {
		float: left;
	    display: block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.header-title {
	    position: relative;
	    height: .6rem;
	    margin: .14rem 1.6rem .14rem .6rem;
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.header-right{
		position: absolute;
		top: 0;
		right: 0;
		line-height: .88rem;
		width: 1.5rem;
		text-align: center;
	}
	.single-line {
		color: #ccc;
	}
</style>

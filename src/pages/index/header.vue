<template>
	<header class="header">
<<<<<<< HEAD
		<a class="header-left iconfont">&#xe624;</a>
		<div class="header-title">
			<span class="single-line"><span class="iconfont">&#xe620;</span>输入城市/景点/游玩主题</span>
		</div>
		<div class="header-right">
			<span class="nav-city">北京
				<i class="downarrow"></i>
=======
		<a class="header-left iconfont">&#xe600;</a>
		<div class="header-title">
			<span class="iconfont icon-search">&#xe60a;</span >
			<span class="single-line">输入城市/景点/游玩主题</span>
		</div>
		<div class="header-right">
			<span class="nav-city">北京<span class="downarrow"></span>
>>>>>>> origin/master
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
<<<<<<< HEAD
	    color: #fff;
	    font-size: .36rem;
=======
	    margin: .02rem 0 0 -0.08rem;
	    margin-top: 0.02rem;
	    color: #fff;
	    font-size: .40rem;
>>>>>>> origin/master
	    text-align: left;
	}
	.header-title {
	    position: relative;
	    height: .6rem;
<<<<<<< HEAD
	    margin: .14rem 1.6rem .14rem .6rem;
=======
	    margin: .14rem 1.32rem .14rem .8rem;
>>>>>>> origin/master
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
<<<<<<< HEAD
=======
	.single-line {
		    display: inline-block;
		    overflow: hidden;
		    position: absolute;
		    left: .3rem;
		    top: 0;
		    width: 3.6rem;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    color: #e4e7ea;
	}
	.icon-search {
		    position: absolute;
		    left: .2rem;
		    color: #e4e7ea;
	}
>>>>>>> origin/master
	.header-right{
		position: absolute;
		top: 0;
		right: 0;
<<<<<<< HEAD
		line-height: .88rem;
		width: 1.5rem;
		text-align: center;
	}
	.single-line {
		color: #ccc;
=======
		margin-right: .04rem;
		line-height: .88rem;
		width: 1.28rem;
		text-align: center;
	}
	.nav-city {
		margin-left: -0.04rem;
	}
	.downarrow {
		position: relative;
		top: -0.05rem;
		left: 0.03rem;
		display: inline-block;
	    width: 0;
	    height: 0;
	    border-left: 0.12rem solid transparent;
	    border-right: 0.12rem solid transparent;
	    border-top: 0.12rem solid #FFFFFF;
>>>>>>> origin/master
	}
</style>

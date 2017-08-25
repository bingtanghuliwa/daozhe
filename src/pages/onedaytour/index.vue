<!-- <template>	
	<pagination :total="total" :page-size="pageSize" :callback="pageChanged" :options="paginationOptions" nav-class="padding-10" ul-class="bg-color-red" li-class="txt-color-blue">
		
	</pagination>
</template>

<script>
import pagination from 'vue-pagination-bootstrap'
export default {

	data () {
	    return {
		    total: 1000,
		    pageSize: 50,
		    paginationOptions: { 
			    offset: 2,
		        previousText: '上一页',
		        nextText: '下一页',
		        alwaysShowPrevNext: true
	      	}
	    }
	},
	methods: {
    	pageChanged (page) {            
    		// console.log(page)
    	}
    },
    components: { 
    	pagination 
    }
}
</script>


<style scoped>

</style>
 -->

 <!-- <template>
  <div v-scroll="loadMore">
    <ul class="news">
      <li class="news__item" v-for="(news, index) in newslist">
        {{index}}-{{news.title}}
      </li>
    </ul>
  </div>
</template>

<style>
  .news__item {
    height: 80px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
</style>

<script>
  export default{
    data(){
      return{
        newslist: [
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'}
        ]
      }
    },
    directives: {
	  scroll: {
	    bind: function (el, binding){
	      window.addEventListener('scroll', ()=> {
	        if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
	          console.log('load data');
	        }
	      })
	    }
	  }
	},
	methods: {
		loadMore() {
			let newAry = [];
				for(let i = 0; i < 10; i++) {
				  	newAry.push({title: 'hello world'})
			}
		this.newslist = [...this.newslist, ...newAry];
		}

	}
	

  }
</script> -->

<template>
  <div id="app">
    <list :page="page"></list>
    <a class="button" @click="next" >GO NEXT<span>CURRENT:{{page}}</span></a>
  </div>
</template>

<script>
import List from './components/List'
// import reqwest from 'reqwest'

export default {
  components: {
    List
  },
  data () {
    return {
      page: 1
    }
  },
  methods: {
    next () {
      this.page++
    }
  }
}
</script>

<style scoped>
/*@import "./static/reset.css";*/
  .button {
    display: block;
    width: 100%;
    background: #212121;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
  }
  .button span {
    margin-left: 2em;
    font-size: .5rem;
    color: #d6d6d6;
  }
</style>



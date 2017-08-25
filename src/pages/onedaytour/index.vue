<template>
	<div>
		<index-scrolls></index-scrolls>
	</div>
</template>

<script>
import Scrolls from '../onedaylist/scrolls.vue'
export default {
  data () {
    return {
      page: 'OnedayTour'
    }
  },
  components:{
  	"index-scrolls":Scrolls
  }
}
</script>


<style scoped>

</style>

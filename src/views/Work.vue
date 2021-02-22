<template>
<div>
  <div v-for="(item, index) in workList" :key="index" class="my-hover col-xl-6 col-lg-8 col-md-8 col-sm-8 mx-auto">
        <b-card-group @click="handleClick(index)" class="mt-5 wrapper">
        <b-card no-body class="" :img-src="require(`../assets/${item.bgImage}`)" alt="Work image" text-variant="transparent" bg-variant="transparent" border-variant="0"> 
          <b-card-text class="my-border text-center py-3 my-text">{{ item.title }}</b-card-text>
          </b-card>
        </b-card-group>
  </div>
</div>

</template>


<script>
import DATA from '@/DATA.js'

export default {
  name: "Work",
  data() {
    return {
      workList: DATA.projects,
    }},
      methods: {
        handleClick(id) {
          this.$router.push(`/work-details/${id}`)
        },
      }
}
</script>


<style lang="scss" scoped> 


.my-hover:hover {
  cursor: pointer;
  opacity: 0.6;
  border-radius: 5px;
  text-decoration: black;
  }

.my-hover{
    position: relative;
  width: 50%;
}

.wrapper{
    display: block;
  width: 100%;
  height: auto;
}

.my-border {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}


</style>
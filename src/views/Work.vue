<template>
  <b-container>
    <b-row>
      <b-col v-for="(item, index) in workList" :key="index" class="col-md-6">
        <b-card-group @click="handleClick(index)" class="card box-shadow">
          <b-card no-body :img-src="require(`../assets/${item.bgImage}`)" alt="Work image">
          <b-card-text class="text-center">{{ item.title }}</b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
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
        }
      }
}
</script>


<style lang="scss" scoped>
.card {
  cursor: pointer;
}

</style>
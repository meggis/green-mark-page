<template>
<b-container class="mt-5 pt-5">
  <b-row align-h="center">
    <b-col class="text-center">
            <h1>(404) Page NotFound</h1>
    </b-col>
  </b-row>
  <b-row align-h="center">
    <b-col class="text-center mt-3">
            <b-spinner label="Loading..." variant="light"></b-spinner>
    </b-col>
  </b-row>
  <b-row align-h="center">
    <b-col class="text-center mt-3">
            <h2>Redirect in {{countDown}}</h2>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: "404",
  data() {
    return {
      timer: 0,
      limit: 5,
      countDown: 5,
      myInterval: null,
    }
  },
  
  mounted() {
    console.log('mounted')
    this.startInterval(),
    this.counting()
  },

  methods: {
    startInterval() {
        this.myInterval = setInterval(() => {
          this.timer += 1

          if (this.timer === this.limit) {
              this.stopInterval(),
              this.redirect()
          }
        }, 1000)
    },
    stopInterval() {
      console.log('ssss')
      clearInterval(this.myInterval)
    },
    redirect() {
      this.$router.push('/')
    },
    counting() {
      if(this.countDown > 0) {
        setInterval(() => {
          this.countDown -= 1
        }, 1000)
      }
    }
  }
};
</script>

<style <style lang="scss">
</style> >
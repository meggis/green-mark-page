<template>
  <div >
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./shared/Footer"
import Header from './shared/Header'

export default {
  components: {
    Footer,
    Header
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>

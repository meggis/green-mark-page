<template>
  <div id="app">
    <nav class="nav justify-content-center sticky-top">        
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/work" class="nav-link">Work</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
    <div class="main-wrapper">
      <router-view class="main-content"/>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./shared/Footer"

export default {
  components: {
    Footer
  },
  data() {
    return {
      title: "asdasdsada"
    }
  }
}
</script>

<style lang="scss">
@import './scss/colors.scss';


.nav {
  padding: 10px;
  background: black;

  a {
    font-size: 1em;
    text-decoration: none;
    background-color: transparent;
    border-bottom: .25rem solid transparent;
    margin: auto 5px;
    cursor: pointer;
    color: #c0c0c0;
   
    &:hover {
     border-bottom-color: $green;
     color:#c0c0c0;
    }
    &:focus {
      border-bottom-color: $green;
      color:#c0c0c0;
    }
  }
}

@media (max-width: 380px) {
  .nav {
    display: block;
  }
}

.main-wrapper {
  background-color: #333333;
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content {
  padding-bottom: 134px;
}

footer {
  position: absolute;
  bottom: 0;
  height: 134px;
  width: 100%;
  // z-index: 100;
  // background-color: #333333;
  // box-shadow: 0px -1px 21px -8px #909090;
}

</style>

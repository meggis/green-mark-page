<template>
  <div class="page-container">
    <Header />
    <div class="content-wrap">
      <router-view />
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./shared/Footer";
import Header from "./shared/Header";

export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style>
.page-container {
  position: relative;
  min-height: 100vh;
}

.content-wrap {
  padding-bottom: 56px;
}

@media (max-width: 768px) {
  .content-wrap {
    padding-bottom: 104px;
  }
} 

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: black;
}
</style>

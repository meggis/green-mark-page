<template>
  <div class="header">
    <b-container>
      <b-navbar class="px-0" toggleable="lg" type="dark" variant="black">
        <b-navbar-brand href="/">
          <img class="logo" src="../assets/logo.png" alt="#">
        </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-link to="/about" class="link">O MNIE</b-link>
          <b-link to="/work" class="link">ZREALIZOWANE PROJEKTY</b-link>
          <b-link to="/offer" class="link">OFERTA</b-link>
          <b-link to="/contact" class="link">KONTAKT</b-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</div>
</template>


<style lang="scss">
@import '../scss/colors.scss';
@import '../scss/fonts.scss';
@import '../scss/shared.scss';


.green {
  color: $green;
  font-weight: bold;
} 

.header {
  background-color: black;
}

.navbar-brand {
  padding: 0px;
  margin: 0px;
}

.logo {
  -webkit-transition: filter 0.2s ease-out;
  -moz-transition: filter 0.2s ease-out;
  -o-transition: filter 0.2s ease-out;
  transition: filter 0.2s ease-out;

  &:hover {
    filter: gray;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
  }
}

.link {
  padding: 0px;
  padding-left: 30px;
  text-decoration: none;
  background-color: transparent;
  margin: auto 0px;
  color: #c0c0c0;
  -webkit-transition: color 0.3s ease-out;
  -moz-transition: color 0.3s ease-out;
  -o-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
  
  &:hover {
    color: $green;
    text-decoration: none;
  }
  
  &:focus {
    color: $green;
  }
}

</style>
<template>
<div>
  <b-container fluid class="p-0">
      <div class="header">
        <b-img class="logo" :src="require('../assets/logo.png')" fluid alt="Responsive image"></b-img>
      </div>
      <div class=" container mt-5">
        <div class="home-class row px-0 justify-content-center">
          <div class="col-md-4 col-sm-8 col-10 myBorder py-4">
              <b-img class="my-img" center :src="require('../assets/check2-circle.svg')" alt="" width="80" height="80"></b-img>
              <h1 class="my-title">> 20 done garden projects</h1>
          </div>
          <div class="col-md-4 col-sm-8 col-10 myBorder py-4">
              <b-img class="my-img" center :src="require('../assets/emoji-smile.svg')" alt="" width="80" height="80"></b-img>
              <h1 class="my-title">100% of happy clients</h1>
          </div>
          <div class="col-md-4 col-sm-8 col-10 myBorder py-4">
              <b-img class="my-img" center :src="require('../assets/tree.svg')" alt="" width="80" height="80"></b-img>
              <h1 class="my-title">> 1 000 planted plants</h1>
          </div>
        </div>

        <div class="container my-3">
          <div class="row justify-content-md-center py-5">
            <div class="col-md-10 text-center" style="color:#c0c0c0">
              <h1 class="welcome">Welcome to my portfolio page </h1>
              <p class="lead py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <b-button class="myBtn" size="lg">My work</b-button>
            </div>
          </div>
        </div>
    </div>
    </b-container>
</div>
</template>

<script>
// @ is an alias to /src


export default {

}
</script>

<style lang="scss">
@import '../scss/colors.scss'; 


.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/main1.jpg');
  height: 100%;
  background-size: cover;
  padding: 80px;
  }

.my-title {
  text-align: center;
  color: rgb(131, 131, 131);
  margin-top: 20px;
  font-weight: lighter;
}
.myBorder {
  border-style: dashed;
  border-width: medium;
  color: gray;}

@media (max-width: 550px) {     
  .home-class .myBorder:not(:first-child) {
    border-top: 0px;
  } 
  .my-title {
    font-size: 1.4rem;}
  .logo {
    width: 40%;
  }
  .my-img {
    width: 6vh;
  }}
@media (min-width: 550px) and (max-width: 767.98px){     
  .home-class .myBorder:not(:first-child) {
    border-top: 0px;
  } 
  .my-title {
    font-size: 1.7rem;}
  .logo {
    width: 40%;
  }
  .my-img {
  width: 6vh;
  }}
  
@media (min-width: 768px) and (max-width: 991.98px){     
  .home-class .myBorder:not(:last-child) {
    border-right: 0px;
  } 
  .my-title {
    font-size: 1.4rem;}
  .logo {
    width: 50%;
  }
  .my-img {
  width: 5vh;
  }}
@media (min-width: 992px) and (max-width: 1199.98px){     
  .home-class .myBorder:not(:last-child) {
    border-right: 0px;
  } 
  .my-title {
    font-size: 1.9rem;}
  .logo {
    width: 40%;
  }
  .my-img {
  width: 6vh;
  }}
@media (min-width: 1200px) {     
  .home-class .myBorder:not(:last-child) {
  border-right: 0px;}
  .my-title {
    font-size: 2.2rem;}
  .logo {
    width: 30%;
  }}


.myBtn {
  color: white;
  }

.myBtn:hover:hover {
  background-color: transparent;
  border-color: $green;
}


</style>

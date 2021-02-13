<template>
  <b-container>
      <b-row class="aboutContainer">
        <b-col class="col-sm-6">
          <b-img center class="my-img" :src="require('../assets/photo.png')"></b-img>
        </b-col>
        <b-col class=" myBorder px-4 py-4 text-center">
          <h1>Some info about me</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <b-button class="myBtn" size="lg">My work</b-button>
        </b-col>
      </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';


.aboutContainer {
  align-items: center;
}

h1 {
  color: $green;
  padding: 10px 0;
}

@media (max-width: 550px) {
  .my-img {
  width: 80%;
}    
}
@media (min-width: 550px) and (max-width: 767.98px){
  .my-img {
  width: 80%;
}     
}
  
@media (min-width: 768px) and (max-width: 991.98px){
  .my-img {
  width: 90%;
}     
}
@media (min-width: 992px) and (max-width: 1199.98px){
  .my-img {
  width: 60%;
}     
}
@media (min-width: 1200px) {    
.my-img {
  width: 60%;
}
}

</style>

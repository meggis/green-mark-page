<template>
  <b-container class="mt-5">
    <b-row>
      <b-col align-h="center" class="text-center pb-3">
        <h1>Hello, I'm Magdalena</h1>
      </b-col>
    </b-row>
      <b-row align-h="center" align-v="center" class="mx-2 about">
        <b-col>
          <b-img center class="col-xl-7 col-lg-7 col-md-10 col-sm-8" :src="require('../assets/photo.png')"></b-img>
        </b-col>
        <b-col class=" my-border py-3 text-center">
          <h2>Some info about me</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <b-button class="myBtn" size="lg">Write to me!</b-button>
        </b-col>
      </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss'; 

@media (max-width: 768px) {
  .about{
    flex-direction: column;
    text-align: center;
  }
  .my-border{
    margin-top: 20px;
  }
}

  .my-border{
    color: rgb(190, 190, 190);
  }
</style>

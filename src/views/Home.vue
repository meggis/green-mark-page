<template>
<div>
  <b-container fluid class="p-0">
    <b-row class="header" align-h="center">
      <b-col>
        <b-img center class="col-xl-3 col-lg-4 col-md-4 col-sm-6" :src="require('../assets/logo.png')" ></b-img>
      </b-col>
    </b-row>
  </b-container>

    <b-container class="mt-5">
      <b-row align-h="center" cols="1" cols-sm="1" cols-md="4" cols-lg="4" cols-xl="4" class="mx-2">
        <b-col class="my-border p-2">
          <b-img center :src="require('../assets/check2-circle.svg')" class="my-img" alt=""></b-img>
          <h2 class="my-title">> 20 done garden projects</h2>
        </b-col>
        <b-col  class="my-border p-2">
          <b-img center :src="require('../assets/emoji-smile.svg')" class="my-img" alt=""></b-img>
          <h2 class="my-title">100% of happy clients</h2>
        </b-col>
        <b-col  class="my-border p-2">
          <b-img center :src="require('../assets/tree.svg')" class="my-img" alt=""></b-img>
          <h2 class="my-title">> 1 000 planted plants</h2>
        </b-col>
      </b-row>

      <b-row class="text-center mt-5">
        <b-col>
          <h1>Welcome to my portfolio page</h1>
        </b-col>
      </b-row>
    
      <b-row align-h="center" class="text-center mt-4 text-light">
        <b-col class="paragraph" col lg="8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</b-col>
      </b-row>

      <b-row align-h="center" class="mt-5">
        <b-button class="myBtn" size="md" @click="handleClick">My work</b-button>
      </b-row>
    </b-container>
    

</div>
</template>

<script>
// @ is an alias to /src


export default {
  methods:{
    handleClick() {
      this.$router.push("../work");
    }
  }
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
  font-weight: bold;
}


.my-img{
  width: 100%;
  max-width: 80px;
  padding: 10px;
}


.myBtn {
  color: white;
  }

.myBtn:hover:hover {
  background-color: transparent;
  border-color: $green;
}


</style>

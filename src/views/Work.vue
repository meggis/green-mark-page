<template>
  <div>
    <div class="background-grey">
      <b-container class="py-5">
        <h3 class="py-5">PRZYKŁADOWE <strong>ARANŻACJE OGRODÓW</strong></h3>
      </b-container>
    </div>
    <div v-for="(item, index) in workList" :key="index" class="mx-auto">
      <b-container class="px-4">
        <b-row class="mb-4">
          <b-col class="hover-work px-0">
            <b-img
              class="image-work img-fluid mx-auto"
              :src="require(`../assets/${item.bgImage}`)"
              alt="Work image"
            ></b-img>
            <div @click="handleClick(index)" class="overlay-work">
              <p class="text-work">{{ item.title }}</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>


<script>
import DATA from "@/DATA.js";

export default {
  name: "Work",
  data() {
    return {
      workList: DATA.projects,
    };
  },
  methods: {
    handleClick(index) {
      this.$router.push(`/work-details/${index}`);
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../scss/colors.scss";

.image-work {
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
}

.overlay-work {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.hover-work:hover .image-work {
  opacity: 0.9;
  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}

.hover-work:hover .overlay-work {
  opacity: 1;
}

.text-work {
  background-color: $green;
  cursor: pointer;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  font-weight: bold;
}
</style>
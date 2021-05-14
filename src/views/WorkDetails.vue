<template>
  <div>
    <div class="background-grey">
      <div v-if="workItem && workItem.photos.length">
        <Carousel :show="show" :slide="slide" :photos="workItem.photos" @hideDupa="hideModal" />
      </div>
      <b-container>
        <b-row align-h="center" align-v="center" class="py-5" v-if="workItem">
          <b-col cols="12" md="5" class="text-center">
            <h1>{{ workItem.title }}</h1>
          </b-col>
          <b-col cols="12" md="6" class="mt-4 text-left">
            <p class="mx-auto">{{ workItem.descript }}</p>
            <h6 class="font-weight-bold">
              Localization: {{ workItem.localization }}
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <div v-if="workItem && workItem.photos.length">
        <b-row class="my-4">
          <b-col v-for="(photo, index) in workItem.photos" :key="index" cols="12" md="6">
            <div @click="clickItem(index)">
              <b-img class="w-100 hover-style mb-2" :src="require(`../assets/${photo}`)"></b-img>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="text-center">
        <b-row>
          <b-col class="mb-5">
            <b-button @click="anotherProjects()"
              >Powrót do projektów</b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { getSpecificItem } from "@/DATA.js";
import Carousel from '../shared/Carousel'

export default {
  name: "WorkDetails",
  components: {
    Carousel
  },
  data() {
    return {
      id: this.$route.params.id,
      workItem: null,
      getSpecificItem: getSpecificItem,
      show: false,
      slide: null
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.workItem = this.getSpecificItem(this.id);
    },
    anotherProjects() {
      this.$router.push("../Work");
    },
    clickItem(index) {
      this.show = true
      this.slide = index
      console.log(this.show)
    },
    hideModal() {
      this.show = false
    },
  },
};
</script>

<style scoped>
.hover-style:hover {
  outline: 1px solid rgb(124, 124, 124);
  cursor: pointer;
}
</style>
<template>
<div>
  <div class="background">
    <b-container>
      <b-row align-v="center" align-h="around" class="py-5" v-if="workItem">
        <b-col class="text-center">
          <h1>{{ workItem.title }}</h1>
        </b-col>
        <b-col class="mt-4 text-left">
          <h2 class="font-weight-bold">Localization: {{ workItem.localization }}</h2>
          <p class="mx-auto">{{ workItem.descript }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <b-container>
    <div>
      <b-row class="my-5">
        <b-col v-for="(photo, index) in workItem.photos" :key="index">
          <b-img class="w-100" :src="require(`../assets/${photo}`)"></b-img>
        </b-col>
      </b-row>
    </div>
    <div class="text-center">
      <b-row>
        <b-col>
          <b-button @click="anotherProjects()" class="myBtn">Go back to another projects</b-button>
        </b-col>
      </b-row>
    </div>
  </b-container>
</div>
</template>

<script>
import { getSpecificItem } from "@/DATA.js";

export default {
  name: "WorkDetails",
  data() {
    return {
      id: this.$route.params.id,
      workItem: null,
      getSpecificItem: getSpecificItem,
      error: false,
    };
  },
  mounted() {
    this.getItem();
  },

  methods: {
    getItem() {
      this.workItem = this.getSpecificItem(this.id);

      if (!this.workItem) {
        this.error = true;
      }
    },
    anotherProjects() {
      this.$router.push("../Work")
    }
  },
};

</script>
<style scoped>

</style>
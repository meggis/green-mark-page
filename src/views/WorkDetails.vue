<template>
  <b-container class="text-center">
        <b-card-group v-if="workItem">
          <b-card no-body bg-variant="transparent" border-variant="0" class="mt-4">
            <b-card-text class="my-border m-0">
              <h1 class="py-4 m-0">{{ workItem.title }}</h1>
              <h2>Localization: {{ workItem.localization }}</h2>
              <p class="col-xl-10 col-lg-8 col-md-8 col-sm-8 mx-auto">{{ workItem.descript }}</p>
            </b-card-text>
              <div v-for="(photo, index) in workItem.photos" :key="index">
                <b-img fluid alt="Responsive image" :src="require(`../assets/${photo}`)"></b-img>
              </div>
            <b-container class="md-4">
            </b-container>
          </b-card>
        </b-card-group>
    <!-- <b-row align-v="center">
      <b-col align-self="center" class="detailsContainer">
        <b-card-group v-if="!workItem && error">
          <b-card class="my">
            <b-card-text class="my-5">
              <h1>404</h1>
              <h4>page not found</h4>
            </b-card-text>
            <div>
              <b-button @click="detailClick()">Go to the front page</b-button>
            </div>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row> -->
  </b-container>
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
    detailClick() {
      this.$router.push("../");
    },
  },
};

</script>
<style scoped>
  .my-border{
    color: rgb(190, 190, 190);
  }
</style>
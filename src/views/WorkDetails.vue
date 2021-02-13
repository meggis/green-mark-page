<template>
  <b-container class="text-center">
    <b-row>
      <b-col>
        <b-card-group v-if="workItem">
          <b-card no-body>
            <b-card-text>{{ workItem.title }}</b-card-text>
            <b-card-text>{{ workItem.localization }}</b-card-text>
            <b-card-text>{{ workItem.photos }}</b-card-text>
            <b-container class="md-4">
              <b-container>
                <b-row class="mdb-lightbox no-margin">
                  <b-col md="4" @click.native="showLightbox(0)">
                    <figure>
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                  </b-col>
                  <b-col md="4" @click.native="showLightbox(1)">
                    <figure>
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                  </b-col>
                  <b-col md="4" @click.native="showLightbox(2)">
                    <figure>
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </figure>
                  </b-col>
                </b-row>
              </b-container>
              <b-lightbox
                :visible="visible"
                :imgs="imgs"
                :index="index"
                @hide="handleHide"
              ></b-lightbox>
            </b-container>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col align-self="center" class="detailsContainer">
        <b-card-group v-if="!workItem && error">
          <b-card class="myyyy">
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
    </b-row>
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
    // pseudocode
    // getItem(id) => assing to this.item
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
    showLightbox(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
<style scoped>
.detailsContainer {
  background: transparent;
}

@media (min-width: 768px) {
  .carousel-multi-item-2 .col-md-3 {
    float: left;
    width: 25%;
    max-width: 100%;
  }
}

.carousel-multi-item-2 .card img {
  border-radius: 2px;
}

figure {
  cursor: pointer;
}
</style>
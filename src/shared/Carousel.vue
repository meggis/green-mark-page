<template>
  <div>
    <b-modal
      v-model="show" 
      @hide="handleOkClick"
      id="modal-center" 
      size="xl" 
    >
      <b-carousel
        id="carousel-1"
        controls
        indicators
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        :value="slide"
      >
        <b-carousel-slide
          v-for="(photo, index) in photos"
          :key="index"
          :img-src="require(`../assets/${photo}`)"
        >
        </b-carousel-slide>
      </b-carousel>
    </b-modal>
  </div>
</template>

<script>
export default {
  name:"carousel",
  props: [ 'show', 'photos', 'slide' ],
  data() {
    return {
      error: false,
    }
  },
  methods: {
    handleOkClick() {
      this.$emit('hideDupa')
    }
  },
}
</script>

<style>
  #modal-center___BV_modal_footer_ {
    display: none;
  }
</style>
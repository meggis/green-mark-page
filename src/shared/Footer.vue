<template>
  <footer class="footer text-center py-3" style="color:grey">
    <div class="container">
      <hr class="md-4 my-3 my-border">
      <b-button @click="handleClick(item.id)">
        {{ newValue }}
      </b-button>
      <p>Inspired by <a style="color:white" href="https://getbootstrap.com/">Bootstrap</a>, by <a style="color:white" href="https://github.com/meggis">Meggis</a>.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Foote",
  props: {
    newValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(id) {
      console.log('Click')
      this.$router.push(`/items?id=${id}`)
    }
  }
}
</script>

<style lang="scss"></style>
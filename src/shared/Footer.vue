<template>
<div>
  <footer class="fixed-bottom">
    <b-container class="footer">
            <b-row align-h="around" class="mt-4 pb-0">
              <p class="p-footer" >
                <b-icon icon="telephone-fill" scale="1.5" class="icon-color mr-2"></b-icon>
                +48 691 192 949</p>
              <p class="p-footer">
                <b-icon icon="envelope-fill" scale="1.5" class="icon-color mr-2"></b-icon>
                magdalena.siekanska@gmail.com</p>
            <p style="color:grey">&copy; 2021 GREEN-MARK Magdalena Siekańska </p>
            </b-row>
    </b-container>
  </footer>
</div>
</template>

<script>
</script>

<style lang="scss">
@import '../scss/colors.scss';


.icon-color {
  color: $green;
}
.icons {
  height: 40px;
}

footer {
  position: absolute;
  left: 0 ; right: 0; bottom: 0; 
  height: 60px;
  background-color: black;
}

.p-footer {
  color: rgb(211, 211, 211);
}
</style>
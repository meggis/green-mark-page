<template>
<div class="footer">
      <b-container>
        <b-row class="my-3">
            <b-col cols="6" md="4">
              <span class="p-footer">
                <b-icon
                  icon="telephone-fill"
                  scale="1.5"
                  class="icon-color mr-2"
                ></b-icon>
                +48 691 192 949
              </span>
            </b-col>
          <b-col cols="12" md="4">
              <span class="p-footer">
                <b-icon
                  icon="envelope-fill"
                  scale="1.5"
                  class="icon-color mr-2"
                ></b-icon>
                ogrody.greenmark@gmail.com
              </span>

          </b-col>
            <b-col cols="12" md="4">
            <span class="span-color">&copy; 2021 GREEN-MARK Magdalena Siekańska</span>
            </b-col>
        </b-row>
      </b-container>

</div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";

.icon-color {
  color: $green;
}

.p-footer {
  color: rgb(211, 211, 211);
}

.span-color {
  color: gray;
}

@media (max-width: 768px) {
  .icon-color {
    height: 10px;
  }
}
</style>
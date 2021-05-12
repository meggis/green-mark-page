<template>
  <div>
    <div class="background-main">
      <b-container>
        <b-row align-v="center">
          <b-col cols="12" md="6">
            <b-img class="w-100" :src="require('../assets/photo.png')"></b-img>
          </b-col>
          <b-col class="mobile-home mb-5" cols="12" md="6">
            <h1 class="col-header">GREEN-MARK</h1>
            <h4 class="font-weight-bold">PROJEKTOWANIE OGRODÓW</h4>
            <p class="heading-text">
              Stwórz ze mną swoją zieloną oazę, bogatą w bujną i urzekającą
              roślinność! Pozwól sobie na relaks i oddaj swój ogród w ręce
              profesjonalisty. Razem zostawmy
              <span class="green">zielony-ślad</span>.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <b-row class="mobile-home-info my-5 py-5" align-h="around" align-v="center">
        <b-col cols="12" md="5" class="text-right">
          <h3>ZA CO <strong>ZAPŁACISZ?</strong></h3>
          <p class="col-p">
            Zobacz jak wygląda standardowa zawartość projektu ogrodu, który dla
            Ciebie wykonam. Każda z pozycji jest dostosowana zarówno do potrzeb
            jak i budżetu zamawiającego. Wszelkie szczegóły ustalimy na pierwszy
            <span class="green">bezpłatnym</span> spotkaniu.
          </p>
        </b-col>
        <b-col cols="12" md="6">
          <b-img
            class="w-100"
            right
            :src="require('../assets/macbook2.png')"
          ></b-img>
        </b-col>
          <b-col class="text-center">
            <b-button size="lg" class="mt-5" @click="exampleClick()"
              >Zawartość projektu</b-button
            >
          </b-col>
        </b-row>
    </b-container>
    <div class="background-grey overflow-auto">
      <b-container>
        <b-row class="mobile-home-info mt-5 py-5" align-h="around" align-v="center">
          <b-col cols="12" md="6">
            <b-img
              class="w-100"
              right
              :src="require('../assets/macbook.png')"
            ></b-img>
          </b-col>
          <b-col cols="12" md="5" class="text-left">
            <h3>CO ZA TO <strong>OTRZYMASZ?</strong></h3>
            <p class="col-p">
              Wszystko zaczyna się od myśli. To one potrafią prowadzić do
              konkretnych uczuć, uczucia do działań, a działania do rezultatów.
              W każdym wypadku, rezultatem współpracy z moją osobą jest
              opracowanie <span class="green">ogrodu marzeń</span>. Zapraszam do
              zapoznania się z przykładowymi realizacjami ogrodów.
            </p>
          </b-col>
            <b-col class="text-center">
              <b-button size="lg" class="my-5" @click="projectsClick()"
                >Zrealizowane projekty</b-button
              >
            </b-col>
          </b-row>
      </b-container>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  methods: {
    exampleClick() {
      this.$router.push("../offer");
    },
    projectsClick() {
      this.$router.push("../work");
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../scss/colors.scss";

.heading-text {
  font-size: 25px;
  font-weight: lighter;
}

.background-main {
  background: linear-gradient(
    180deg,
    rgba(180, 180, 181, 1) 0%,
    rgba(171, 171, 171, 1) 0%,
    rgba(242, 242, 242, 1) 100%
  );
}

.col-header {
  font-size: 3.2rem;
  font-weight: bold;
}

.col-p {
  font-size: 20px;
}

@media (max-width: 768px) {
  .mobile-home {
    text-align: center;
  }
}
</style>

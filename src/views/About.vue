<template>
  <div>
    <div class="background-grey">
      <b-container class="pt-5">
        <b-row class="py-5 text-center">
          <b-col>
            <b-icon
              icon="emoji-heart-eyes-fill"
              scale="3"
              class="rounded-circle item-img"
              variant="black"
            ></b-icon>
            <h3 class="py-4">100 % zadowolonych klientów</h3>
          </b-col>
          <b-col>
            <b-icon
              icon="tree-fill"
              scale="3"
              class="rounded-circle item-img"
              variant="black"
            ></b-icon>
            <h3 class="py-4">> 20 zaprojektowanych ogrodów</h3>
          </b-col>
          <b-col>
            <b-icon
              icon="clock-fill"
              scale="3"
              class="rounded-circle item-img"
              variant="black"
            ></b-icon>
            <h3 class="py-4">> 10 zrealizowanych projektów</h3>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <b-row align-v="center" class="my-5">
        <b-col class="py-4 my-4" cols="12" md="6">
          <b-img fluid :src="require('../assets/koncepcja.png')"></b-img>
        </b-col>
        <b-col cols="12" md="6" class="mobile-view">
          <h3 class="pt-5 text-center">DLACZEGO <strong>JA?</strong></h3>
          <h2 class="pt-2">
            Posiadam doświadczenie, wykształcenie i pełno pomysłów w głowie :-)
            Decydując się na współpracę ze mną, obiecuję stworzyć Twój ogród
            marzeń!
          </h2>
          <div class="py-4">
            <b-col>
              <h2>
                <b-icon
                  icon="check-circle-fill"
                  class="rounded-circle item-img"
                  variant="black"
                ></b-icon>
                funkcjonalność rozwiązań połączona harmonijnym układem roślin
              </h2>
            </b-col>
            <b-col>
              <h2>
                <b-icon
                  icon="check-circle-fill"
                  class="rounded-circle item-img"
                  variant="black"
                ></b-icon>
                uczciwość, treminowość, skuteczność i elastyczność
              </h2>
            </b-col>
            <b-col>
              <h2>
                <b-icon
                  icon="check-circle-fill"
                  class="rounded-circle item-img"
                  variant="black"
                ></b-icon>
                dostosowanie do klienta, zarówno w kontekście stylu ogrodu jak i
                budżetu
              </h2>
            </b-col>
            <b-col>
              <h2>
                <b-icon
                  icon="check-circle-fill"
                  class="rounded-circle item-img"
                  variant="black"
                ></b-icon>
                najwyższa jakość usług projektowych
              </h2>
            </b-col>
            <div class="text-center">
              <b-button class="my-5" size="lg" @click="contactClick()"
                >Skontaktuj się ze mną</b-button
              >
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    contactClick() {
      this.$router.push("./contact");
    },
  },
};
</script>

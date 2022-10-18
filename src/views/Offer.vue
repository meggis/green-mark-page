<template>
  <div>
    <div class="background-grey">
      <b-container class="py-5">
        <b-row class="pt-5">
          <b-col>
            <b-img
              fluid
              center
              :src="require('../assets/logo-project.png')"
              alt="#"
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="pb-5">
          <b-col class="text-center">
            <h3>PROJEKTOWANIE OGRODÓW - <strong>WROCŁAW I OKOLICE</strong></h3>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <b-container class="py-5">
        <b-row align-h="center" class="text-center">
          <div>
            <b-icon
              icon="journal-bookmark-fill"
              class="rounded-circle bg-image p-3"
              variant="light"
            ></b-icon>
            <h4 class="pt-4">01. projekt zagospodarowania ogrodu</h4>
          </div>
        </b-row>
        <b-row class="text-center py-5 mx-auto">
          <p>
            W zabieganych czasach jakich przyszło na żyć, bardzo ważne jest aby dbać
            o swój komfort psychiczny jak i fizyczny. Kto jak kto ale
            rośliny rozumieją to najlepiej! Każdy kto choć trochę obcował z
            naturą, zna towarzyszące temu uczucie błogości, spokoju i
            zrelaksowania. Twój ogród może stać się właśnie taką strefą relaksu!
            Przygotuję dla Ciebie projekt, odzwierciedlający Twoje potrzeby w 100%!
            Obiecuję, że każdy jego rezydent będzie się w nim czuł szczęśliwy i spełniony.

          </p>
        </b-row>
        <b-row>
          <b-col cols="2" align-self="center" class="text-center">
            <b-icon
              icon="arrow-right-circle-fill"
              class="rounded-circle item-img p-1"
              variant="light"
            ></b-icon>
          </b-col>
          <b-col cols="10">
            <h4>Inwentaryzacja</h4>
            <p>
              Jest to podstawa każdej koncepcji, dlatego od niej rozpoczną się wszelkie prace projektowe.
              Mowa tutaj o wykonaniu wymiarów istniejących obiektów które znajdą się na rzucie, inwentaryzacji istniejącej roślinności 
              (jeżeli takowa jest), czy też ocenie terenów sąsiednich w kontekście waloryzacji roślinnej. Zostaną również przeprowadzone
              konsultacje z zamawiającym, aby ustalić główne kryteria projektowe, jak na przykład rodzaje funkcji użytkowych czy styl ogrodu.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" align-self="center" class="text-center">
            <b-icon
              icon="arrow-right-circle-fill"
              class="rounded-circle item-img p-1"
              variant="light"
            ></b-icon>
          </b-col>
          <b-col cols="10">
            <h4 class="pt-4">Inspiracje</h4>
            <p>
              Etap, który jest szkicem projektowym. Przedstawia ogólny podział ogrodu na strefy użytkowe, wraz z rzeczowym opisem pełnionych przez nie funkcji. 
              Dodatkowo, Inwestor otrzymuje plik z inspiracjami czyli zdjęciami przedstawiającymi konkretny zamysł 
              projektowy. Ta część jest bardzo ważna gdyż pomaga określić, na ile zaproponowany wariant wpisuje się w wyobrażenia zamawiającego.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" align-self="center" class="text-center">
            <b-icon
              icon="arrow-right-circle-fill"
              class="rounded-circle item-img p-1"
              variant="light"
            ></b-icon>
          </b-col>
          <b-col cols="10">
            <h4 class="pt-4">Koncepcja</h4>
            <p>
              Koncepcja przedstawia bardziej szczegółową wersję projektową, z uwzględnieniem podziału funkcjonalno-użytkowego oraz propozycji doboru roślin 
              jak i małej architektury. Wedle potrzeb oferuję wykonanie rzutu oraz niezbędnych przekrojów całości koncepcji.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" align-self="center" class="text-center">
            <b-icon
              icon="arrow-right-circle-fill"
              class="rounded-circle item-img p-1"
              variant="light"
            ></b-icon>
          </b-col>
          <b-col cols="10">
            <h4 class="pt-4">Szczegółowe zestawienie projektowe</h4>
            <p>
              Szczegółowe zestawienie obejmuje ilościowy i jakościowy spis roślinności, dobór małej architektury wraz z konkretnymi propozycjami, rodzaje i typy nawierzchni
              dobór oświetlenie wraz z oprawą oraz wykaz pozostałych elementów uwzględnionych w koncpecji jak altany, rodzaje zadaszenia, baseny czy place zabaw.
              Końcowym etapem jest wykonanie wizualizacji projektowych, w formie zdjęć lub wirtualnego spaceru.
            </p>
          </b-col>
        </b-row>
        <b-row class="py-5 text-center">
          <b-col>
            <b-icon
              icon="gear-wide-connected"
              class="rounded-circle bg-image p-2"
              variant="light"
            ></b-icon>
            <h4 class="pt-4">02. kompleksowa realizacja</h4>
          </b-col>
          <b-col class="flower-mobile">
            <b-icon
              icon="flower3"
              class="rounded-circle bg-image"
              variant="light"
            ></b-icon>
            <h4 class="pt-4">03. profesjonalna pielęgnacja</h4>
          </b-col>
        </b-row>
        <b-row class="mb-5 text-center mx-auto">
          <b-col>
          <p>
            Cały proces projektowy powstaje przy współpracy z zaprzyjaźnioną
            firmą wykonawczą, zajmującą się również fachową pielęgnacją ogrodów.
            Wszelkie pomysły dotyczące rozwiązań związanych zarówno z
            roślinnością jak i małą architekturą podlegają sukcesywnym
            konsultacjom. Dzięki temu masz pewność, że realizacja zostanie
            wykonana na najwyższym poziomie.
          </p>
          </b-col>
        </b-row>
          <h4 class="text-center pb-5"><strong>Chętny na spacer? Zobacz przykład!</strong></h4>
        <div class="embed-responsive embed-responsive-4by3">
          <video controls class="embed-responsive-item">
            <source src="../assets/walk.mp4" type="video/mp4">
          </video>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";

.bg-image {
  background-color: rgb(104, 104, 104);
  font-size: 6rem;
}

.item-img {
  font-size: 3em;
  background-color: $green;
}

p {
  font-size: 18px;
}

@media (max-width: 768px) {
  .flower-mobile {
    padding-top: 50px;
  }
}
</style>
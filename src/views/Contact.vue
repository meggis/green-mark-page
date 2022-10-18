
<template>
<div>
  <div class="background-grey">
    <b-container class="py-5 mobile-view">
      <b-col cols="12" align-h="center" class="text-center">
        <h3><strong>SKONTAKTUJ SIĘ</strong> ZE MNĄ</h3>
      </b-col>
        <b-row align-h="center" align-v="center" class="pt-5">
          <b-col cols="12" md="5">
            <h2>
              <b-icon icon="telephone-fill" scale="1" class="icon-color mr-3"></b-icon>
              +48 691 192 949</h2>
              <h2>
                <b-icon icon="envelope-fill" scale="1" class="icon-color mr-3 mt-3"></b-icon>
              ogrody.greenmark@gmail.com</h2>
          </b-col>
          <b-col class="mobile-view-company" cols="12" md="5">
            <h3 class="icon-color">GREEN-MARK</h3>
            <h2>MAGDALENA SIEKAŃSKA</h2>
            <h2 class="pt-4"><strong>ADRES:</strong> ul. Powstańców Śląskich 50/34, 53-333 Wrocław</h2>
            <h2><strong>NIP:</strong> 899-27-21-987</h2>
          </b-col>
        </b-row>
    </b-container>
  </div>
  <b-container class="py-5 my-5">
    <b-col cols="12" class="text-center">
      <h3>WYŚLIJ DO MNIE <strong>WIADOMOŚĆ</strong></h3>
    </b-col>
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <h2 class="mt-4 grey-style">Twoje imię:</h2>
        <b-form>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-form-input
            v-model="label3"

            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
            placeholder="Imię"
          ></b-form-input>
          <h2 class="mt-4 grey-style">Twój email:</h2>
          <b-form>
            <label class="sr-only" for="inline-form-input-name">Name</label>
            <b-form-input
              v-model="label2"
              id="inline-form"
              class="mb-2 mr-sm-2 mb-sm-0 mt-3"
              placeholder="Email"
            ></b-form-input>
          </b-form>
        </b-form>
      </b-col>
      <b-col cols="12" md="6" align-self="stretch" class="mt-4">
        <h2 class="grey-style">Twoja wiadomość:</h2>
        <b-form-textarea
          v-model="label1"
          class="mt-3 textarea"
          id="inline-form"
          bg-variant="transparent"
          placeholder="Treść wiadomości"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <b-form-invalid-feedback id="input-2-live-feedback"
          >Te pole jest obowiązkowe.</b-form-invalid-feedback
        >
        <b-button class="mt-5" v-b-modal.modal-1>Wyślij</b-button>
        <b-button class="ml-2 mt-5" @click="resetForm()">Wyczyść</b-button>

        <b-modal id="modal-1" title="Done!">
          <p>Twoja wiadomość została wysłana!</p>
        </b-modal>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      label1: "",
      label2: "",
      label3: "",
    };
  },
  methods: {
    resetForm() {
      this.label1 = null;
      this.label2 = null;
      this.label3 = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";

.textarea.form-control {
  height: 140px;
}

.grey-style {
  color: rgb(190, 190, 190);
}

@media (max-width: 768px) {
  .mobile-view {
    text-align: center;
  }
  .mobile-view-company {
    padding-top: 40px;
  }
}

.icon-color {
  color: $green;
}

</style>
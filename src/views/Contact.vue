
<template>
<b-container >
    <b-col cols="12" align-h="center" class="text-center">
      <h1>Wyślij do mnie wiadomość</h1>
    </b-col>
    <b-row align-h="center" align-v="center">
      <b-col cols="6">
        <h2 class="mt-4">Twoje imię:</h2>
        <b-form>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-form-input
            v-model="label3"
            id="inline-form"
            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
            placeholder="Imię"
          ></b-form-input>
          <h2 class="mt-4">Twój email:</h2>
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
      <b-col cols="6" align-self="stretch" class="mt-4">
        <h2>Twoja wiadomość:</h2>
        <b-form-textarea
          v-model="label1"
          class="mt-3 textarea"
          id="inline-form"
          bg-variant="transparent"
          placeholder="Treść"
        ></b-form-textarea>
      </b-col>
      </b-row>
      <b-row>
              <b-col>
              <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>

      <b-button v-b-modal.modal-1 variant="light">Submit</b-button>
      <b-button class="ml-2" @click="resetForm()">Reset</b-button>

      <b-modal id="modal-1" title="Done!">
        <p>Submited! Good job :-)</p>
      </b-modal>
      </b-col>
      </b-row>
    
</b-container>
</template>

<script>
export default {
    data() {
      return {
        label1: '',
        label2: '',
        label3: ''
      }
    },
    methods: {
      resetForm() {
        this.label1 = null
        this.label2 = null
        this.label3 = null
      },
      }
    }
</script>

<style>
.textarea.form-control {
  height: 160px;
}

</style>
<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
    absolute
  >
  <v-alert
    :value="alert"
    type="success"
    transition="scale-transition"
  >
    {{ contents }}
  </v-alert>
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
        @click="alert = !alert, contents = link"
      >
        {{ link }}
      </v-btn>

      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >

        &copy;2019 — MIE LAB. All Right Reserved.
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      alert: false,
      contents: "",
      links: [
        'Developer',
        'Address',
        'Tel',
        'Terms',
        'Site Map'
      ]
    })
  }
</script>
<style scope>
.primary.lighten-1 {
    background-color: #343a40 !important;
    border-color: #343a40 !important;
}
.primary.lighten-2 {
    background-color: #3E464D!important;
    border-color: #3E464D!important;
}
.v-alert.v-alert {
    position: absolute;
    background: white;
    border: 1px solid black;
    color: black;
    border-radius: 1em;
    top: -67px;
    left: 10px;
}
</style>

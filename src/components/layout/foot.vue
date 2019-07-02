<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
    absolute
  >
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

        &copy;2019 — <strong>MIE LAB. All Right Reserved.</strong>
        (김도안, 황도연, 배상중, 전성우, 임병연)
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    })
  }
</script>
<style scope>
.primary.lighten-1 {
    background-color: #4480dc!important;
    border-color: #4480dc!important;
}
.primary.lighten-2 {
    background-color: #6599f9!important;
    border-color: #6599f9!important;
}
</style>

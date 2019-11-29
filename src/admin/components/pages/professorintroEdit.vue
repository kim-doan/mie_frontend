<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>


      <!-- Widgets-->
      <v-flex d-flex lg6 sm6 xs12>
        <professorintroEditKR></professorintroEditKR>
      </v-flex>
      <v-flex d-flex lg6 sm6 xs12>
        <professorintroEditEN></professorintroEditEN>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import professorintroEditKR from '../pages/professorintroEditKR'
import professorintroEditEN from '../pages/professorintroEditEN'

export default {
  components: {
    professorintroEditKR,
    professorintroEditEN,
  },
}
</script>

<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- DataTable&TimeLine Starts -->
      <v-flex d-flex lg12 sm6 xs12>
        <labmemberTable/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import labmemberTable from '../labmemberTable'

export default {
  data() {
    return {

    }
  },
  components: {
    labmemberTable,
  },
}
</script>

<style>
</style>

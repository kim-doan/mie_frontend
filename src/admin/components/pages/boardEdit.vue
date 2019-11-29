<template>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <!-- Widgets-->
        <v-flex d-flex lg6 sm6 xs12>
          <category1></category1>
        </v-flex>
        <v-flex d-flex lg6 sm6 xs12>
          <category2></category2>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
import category1 from '../boardtable/category1'
import category2 from '../boardtable/category2'

export default {
  components: {
    category1,
    category2,
  },
}
</script>

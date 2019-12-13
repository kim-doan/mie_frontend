<template>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <!-- Widgets-->
        <v-flex d-flex lg12 sm6 xs12>
          <category1></category1>
        </v-flex>
        <v-flex d-flex lg12 sm6 xs12>
          <category2></category2>
        </v-flex>
        <v-flex d-flex lg12 sm6 xs12>
          <category5></category5>
        </v-flex>
        <v-flex d-flex lg6 sm6 xs12>
          <category3></category3>
        </v-flex>
        <v-flex d-flex lg6 sm6 xs12>
          <category4></category4>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
import category1 from '../boardtable/category1'
import category2 from '../boardtable/category2'
import category3 from '../boardtable/category3'
import category4 from '../boardtable/category4'
import category5 from '../boardtable/category5'

export default {
  components: {
    category1,
    category2,
    category3,
    category4,
    category5,
  },
}
</script>

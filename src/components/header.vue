<template>
  <v-container>
    <v-btn @click="headerSend">헤더 전송</v-btn>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  methods: {
    headerSend () {
      axios.get(`http://35.221.101.135:8080/api/members`)
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }
  }
}
</script>

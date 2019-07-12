<template>
  <div>
  <sublogo></sublogo>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>로그인</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" v-model="form.username" label="아이디" type="text"></v-text-field>
              <v-text-field prepend-icon="lock" v-model="form.password" label="비밀번호" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" @click="signIn">로그인</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
  v-model="sb.act"
>
  {{ sb.msg }}
  <v-btn
    :color="sb.color"
    flat
    @click="sb.act = false"
  >
    닫기
  </v-btn>
</v-snackbar>
  </v-container>
</div>
</template>

<script>
import axios from 'axios'
import sublogo from '../sublogo/sublogo_login';

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      sb: {
          act: false,
          msg: '',
          color: 'warning'
      },
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('LOGIN', this.form)
      .catch(({message}) => this.pop(message))
      // axios.post('http://35.221.101.135:8080/api/members/login', this.form)
      //   .then(r => {
      //     if(r.data.status == "Success") {
      //       this.pop(r.data.message);
      //       localStorage.accessToken = r.data.token;
      //
      //       axios.defaults.headers.common['X-AUTH-TOKEN'] = r.data.token;
      //     } else if(r.data.status == "Fail") {
      //       this.pop(r.data.errorMessage);
      //     }
      //   })
      //   .catch(e => console.error(e.message))
    },
    pop(m, cl) {
      this.sb.act = true
      this.sb.msg = m
      this.sb.color = cl
    },
  },
  components: {
    sublogo,
  }
}
</script>

<style>
.theme--dark.v-toolbar {
    background-color: #343a40 !important;
    color: #fff;
}
.bg-secondary {
    background-color: #343a40 !important;
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: #343a40 !important;
}
.v-btn__content {
  color: #fff;
}
.primary.lighten-1 {
    background-color: #343a40!important;
    border-color: #343a40 !important;
}
</style>

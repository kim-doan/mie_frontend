<template>
  <modal name="modal-login" transition="pop-out" :width="modalWidth" :height="280">
  <div>
      <v-flex>
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
</div>
</modal>
</template>

<script>
import axios from 'axios'

const MODAL_WIDTH = 500

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
      modalWidth : MODAL_WIDTH
    }
  },
  created () {
  this.modalWidth = window.innerWidth < MODAL_WIDTH
    ? MODAL_WIDTH / 2
    : MODAL_WIDTH
  },
  methods: {
    signIn () {
      this.$store.dispatch('LOGIN', this.form)
      .catch(({message}) => this.pop(message))
      this.$modal.hide('modal-login'); // 요청 후 모달 숨기기
    },
    pop(m, cl) {
      this.sb.act = true
      this.sb.msg = m
      this.sb.color = cl
    },
  },
  components: {
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
.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}

.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>

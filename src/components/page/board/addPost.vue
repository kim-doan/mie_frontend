<template>
  <modal name="modal-post" transition="pop-out" :width="modalWidth" :height="500">
  <div>
      <v-flex>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>게시글 작성</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="제목"
                v-model="form.title"
                single-line
                full-width
                hide-details
              ></v-text-field>
               <v-divider></v-divider>
               <v-textarea
                 v-model="form.content"
                 label="내용"
                 counter
                 maxlength="2000"
                 height="210"
                 full-width
                 single-line
               ></v-textarea>
               <v-divider></v-divider>
             </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" @click="addPost">등록</v-btn>
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

const MODAL_WIDTH = 700
const MODAL_HEIGHT = 500

const profileName = localStorage.username

export default {
  components: {
  },
  data () {
    return {
      form: {
        title: '',
        content: '',
        author: profileName
      },
      sb: {
          act: false,
          msg: '',
          color: 'warning'
      },
      modalWidth : MODAL_WIDTH,
      modalHeight : MODAL_HEIGHT,
      myFiles: [],
    }
  },
  created () {
  this.modalWidth = window.innerWidth < MODAL_WIDTH
    ? MODAL_WIDTH / 2
    : MODAL_WIDTH
  },
  methods: {
    handleFilePondInit: function() {
    console.log('FilePond has initialized');
    // FilePond instance methods are available on `this.$refs.pond`
  },
    addPost () {
      axios.post('http://35.200.100.93:8080/api/board/add/id/' + this.$route.query.board, this.form)
      .then(r => {
        if(r.data.success === true) {
          this.$modal.hide('modal-post'); // 요청 후 모달 숨기기
          this.$modal.show('modal-file', { postId: r.data.data.postId }); // 요청 후 첨부파일 모달 띄우기 post 번호 첨부해서

        }
      })
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

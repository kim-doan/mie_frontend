<template>
  <modal name="modal-file" transition="pop-out" :width="modalWidth" height="auto" @before-open="beforeOpen">
  <div>
      <v-flex>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>첨부파일 추가</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <h2><b>게시글 작성 완료!</b></h2>
            <h5>게시글에 첨부파일을 추가하시려면 아래에 파일을 추가해주세요.</h5>
            <v-form style="min-height: 275px; max-height: 250px;">
               <v-divider></v-divider>
               <!--accepted-file-types="image/jpeg, image/png // 특정 확장자만 받고싶을때 프롭으로 추가"-->
               <file-pond
                   name="test"
                   ref="pond"
                   label-idle="파일을 여기에 놓아주세요."
                   v-bind:allow-multiple="true"
                   :server=this.postId
                   v-bind:files="myFiles"
                   v-on:init="handleFilePondInit"/>
               <v-divider></v-divider>
             </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" @click="confirm">완료</v-btn>
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
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const MODAL_WIDTH = 700

const profileName = localStorage.username

export default {
  components: {
    FilePond
  },
  data () {
    return {
      sb: {
          act: false,
          msg: '',
          color: 'warning'
      },
      modalWidth : MODAL_WIDTH,
      myFiles: [],
      postId: '',
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
    beforeOpen(event) {
      this.postId = "http://35.200.100.93:8080/api/aws/board/upload/" + event.params.postId;
    },
    confirm() {
      alert('게시물 작성이 완료되었습니다.')
      this.$modal.hide('modal-file');
      document.location.reload(); // 현재페이지 새로고침
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

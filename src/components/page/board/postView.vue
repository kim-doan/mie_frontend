<template>
  <modal name="modal-view" transition="pop-out" :width="modalWidth" height="auto" :clickToClose="false" @before-open="beforeOpen">
  <div>
      <v-flex>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>게시글 상세</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items>
              <v-btn icon @click="hide">
                <font-awesome-icon icon="times" />
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-textarea
              label="제목"
              :value="this.postData.title"
              no-resize
              rows="1"
              readonly
            ></v-textarea>
            <v-textarea
              name="input-7-1"
              filled
              label="내용"
              no-resize
              rows="10"
              :value="this.postData.content"
              readonly
            ></v-textarea>
            <a style="font-size:12px; color:gray">첨부파일</a>
            <li v-for="file in myFiles" style="list-style:none;">
              <font-awesome-icon icon="file-alt" />
              <a :href="'https://miefileserver.s3.ap-northeast-2.amazonaws.com/' + file" download target="_blank" style="color:black;">{{ file }}</a>
            </li>
            <v-flex>
              <img v-for="content in imgContent" :src="content" style="max-width: 150px; max-height: 150px;">
            </v-flex>
          </v-card-text>
        </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" @click="editPost">수정</v-btn>
            <v-btn color="dark" @click="delPost">삭제</v-btn>
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
import axios from 'axios';

const MODAL_WIDTH = 700

const profileName = localStorage.username

export default {
  components: {
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
      postData: {},
      imgContent: [],
    }
  },
  created () {
  this.modalWidth = window.innerWidth < MODAL_WIDTH
    ? MODAL_WIDTH / 2
    : MODAL_WIDTH
  },
  methods: {
    beforeOpen(event) {
      this.postData = event.params.postData;

      axios.get('http://35.200.100.93:8080/api/aws/board/file/' + this.postData.postId).then(response => {
        var result = response && response.data
        for(var i=1;i<result.length;i++) {
          this.myFiles.splice(i-1, 100, result[i])

          var extention = this.myFiles[i-1].substr(this.myFiles[i-1].length-4)

          if(extention == ".jpg" || extention == ".png" || extention == ".JPG" || extention == ".PNG") {
            this.imgContent.splice(i-1, 1, 'https://miefileserver.s3.ap-northeast-2.amazonaws.com/' + result[i])
          }
        }
      });
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
    hide() {
       this.myFiles = [];
       this.postData = [];
       this.imgContent = [];
      this.$modal.hide('modal-view');
    },
    delPost() {
      axios.delete('http://35.200.100.93:8080/api/board/post/' + this.postData.postId).then(response => { // 게시글 삭제
        var result = response && response.data
        this.$modal.hide('modal-view');
        alert(result.msg)
        document.location.reload(); // 현재페이지 새로고침
      });
    },
    editPost() {
      this.$modal.show('modal-editpost', {postData: this.postData});
      this.hide();
    }
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

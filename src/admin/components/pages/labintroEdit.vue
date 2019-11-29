<template>
  <v-container fluid>
    <h2>한국어 연구실 소개</h2>
    <vue-editor v-model="ko_content.intro"></vue-editor>
    <v-btn @click="saveContent('ko')">저장</v-btn>
    <h2>영문 연구실 소개</h2>
    <vue-editor v-model="en_content.intro"></vue-editor>
    <v-btn @click="saveContent('en')">저장</v-btn>
  </v-container>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from 'axios'

export default {
  components: {
    VueEditor
  },

  data() {
    return {
      ko_content: {
        language: '',
        intro: ''
      },
      en_content: {
        language: '',
        intro : ''
      }
    };
  },

  methods: {
    //연구실 소개 수정 (관리자)
    saveContent: function(lang) {
      if(lang == 'ko') { // 한국어 수정
        this.ko_content.language = 'ko'
        axios.put('http://35.200.100.93:8080/api/intro/update', this.ko_content)
        .then(r => {
          if(r.data.success === true) {
            alert(r.data.msg)
          }
        })
      } else { // 영어 수정
        this.en_content.language = 'en'
        axios.put('http://35.200.100.93:8080/api/intro/update', this.en_content)
        .then(r => {
          if(r.data.success === true) {
            alert(r.data.msg)
          }
        })
      }
    }
  },

  created() {
    const vm = this;

    //한국어 연구실 정보 받아오기
    axios.get('http://35.200.100.93:8080/api/intro/profile/ko').then(response => {
      var result = response && response.data;

      vm.ko_content.intro = result.data.intro;
    });

    //영어 연구실 정보 받아오기
    axios.get('http://35.200.100.93:8080/api/intro/profile/en').then(response => {
      var result = response && response.data;

      vm.en_content.intro = result.data.intro;
    });
},
};
</script>

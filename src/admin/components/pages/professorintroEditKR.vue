<template>
  <div>
      <div class="row">

        <!--<div class="col-md-3 left">
          <img src="../../../assets/jung.jpg"/>
        </div>
      -->
          <div class="col-md-12 right">
            <div class="profileImg">
              <img :src="professor.data.profile_img">
            </div>
            <div id="app">
              <div>
                <h3>프로필 사진 변경</h3>
                <input type="file" name="profileImg" id="profileImg" @change="onFileChange">
                <v-btn slot="activator" color="primary" dark class="mb-2" @click="updateimage()">이미지 저장</v-btn>
              </div>
            </div>
            <v-text-field
              label="이름"
              placeholder="OOO"
              v-model="professor.data.name"
            ></v-text-field>

            <table class="table table-bordered">
              <caption>이표는 tel, e-mail 정보를 제공합니다.</caption>
              <colgroup>
                <col style="width:20%">
                <col style="width:80%;">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">직책</th>
                  <td>
                    <v-text-field
                      placeholder="OOO "
                      v-model="professor.data.position"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Tel</th>
                  <td>
                    <v-text-field
                      placeholder="OOO-OOO-OOO"
                      v-model="professor.data.tel"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <th scope="row">E-mail</th>
                  <td>
                    <v-text-field
                      placeholder="OOO@OOO.OOO"
                      v-model="professor.data.email"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <th scope="row">취미</th>
                  <td>
                    <v-text-field
                      placeholder="OOO"
                      v-model="professor.data.hobby"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <th scope="row">가족</th>
                  <td>
                    <v-text-field
                      placeholder="OOO"
                      v-model="professor.data.family"
                    ></v-text-field>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-btn slot="activator" color="primary" dark class="mb-2" @click="updateProfile()">프로필 저장</v-btn>
          </div>
      </div>
        <historyTable :language='2'></historyTable>
        <activityTable :language='2'></activityTable>
  </div>
</template>
<script>
import axios from 'axios'
import historyTable from '../table/historyTable'
import activityTable from '../table/activityTable'

export default {
  components: {
    historyTable,
    activityTable
  },

  data() {
    return {
      professor: [],
      image: '',
    }
  },
  methods : {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.image = new FormData();
      var reader = new FileReader();
      this.image.append("profileImg", file);
    },
    removeImage: function (e) {
      this.image = '';
    },
    updateProfile () {
        //프로필 수정 1 = 영문 2 = 한국어
        axios.put('http://35.200.100.93:8080/api/intro/professor/update/2', this.professor.data)
        .then(r => {
          if(r.data.success === true) {
            alert("프로필 저장에 " + r.data.msg)
          }
        })
    },
    updateimage () {
        //프로필 수정 1 = 영문 2 = 한국어
        axios.post('http://35.200.100.93:8080/api/intro/professor/update/image/2', this.image, {
          headers: {
            'Content-Type' : 'multipart/form-data'
          }
        })
        .then(r => {
          if(r.data.success === true) {
            this.professor.data.profile_img = r.data.data.profile_img;
            this.image = '';
            alert("이미지 저장에 " + r.data.msg)
          }
        })
    },
},
  created() {
    const vm = this;

    //교수님 정보 받아오기 1 = 영문 2 = 한국어
    axios.get('http://35.200.100.93:8080/api/intro/professor/2').then(response => {
      var result = response && response.data

      vm.professor = result;

    });
  }
}
</script>

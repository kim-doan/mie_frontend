<template>
  <div style="margin-bottom:100px;margin-top: 10px;">
    <hooper :progress="true" :autoPlay="true" :playSpeed="10000">
      <!--<slide>
        <img src="../../assets/bg_main.jpg" alt="bg1"/>
      </slide>-->
      <slide>
        <img src="../../assets/bg_main2.jpg" alt="bg2"/>
      </slide>
      <slide>
        <div>
        <img src="../../assets/bg_main3.jpg" alt="bg3"/>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>

      <!-- MODAL -->
      <modal-login/>
      <modal-register/>
      <modal-view/>

    <div class="container b_menu" style="max-width:1500px; width:100%">
        <div class="row">
            <div class="col-md-9 left_menu">
              <div class="row">
                  <div class="col-md-3 t1">

                      <div class="num1">
                        <div class="t_margin">
                        <h2>연구원</h2>
                        <router-link to="/member/phd">
                          <img src="../../assets/plus_icon.png" alt="plus"/>
                        </router-link>
                        <p>MIE 연구실 구성원</p>
                        </div>
                      </div>
                  </div>
                  <div class="col-md-3 t2">
                      <div class="num2">
                        <div class="t_margin">
                        <h2>연구활동</h2>
                        <img src="../../assets/plus_icon.png" alt="plus"/>
                        <p>논문, 특허, 과제, 소프트웨어</p>
                        </div>
                      </div>
                  </div>
                  <div class="col-md-6 t3">
                    <div class="num3" style="background:#184c8d; color:white;">
                      <div class="t_margin">
                      <h2 style="color:white;">강의자료</h2>
                      <router-link to="/lecturedata/department?board=41">
                        <img src="../../assets/plus_icon2.png" alt="plus"/>
                      </router-link>
                      <img src="../../assets/open-book.png" alt="book" style="position:absolute; top:100px; opacity: 0.8;"/>
                    </div>
                    </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-5 b1">
                    <div class="num4">
                      <div class="t_margin">
                        <h2>공지사항</h2>
                        <router-link to="/community/community?board=91">
                          <img src="../../assets/plus_icon.png" alt="plus"/>
                        </router-link>
                        <div class="item">
                          <li v-for="item in noticePosts_Sort">
                            <a @click="postView(item.postId)">{{item.title}}</a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 b2">
                    <div class="num5">
                      <div class="t_margin">
                        <h2>자료실</h2>
                        <router-link to="/etcdata/etcdata?board=86">
                          <img src="../../assets/plus_icon.png" alt="plus"/>
                        </router-link>
                        <div class="item">
                        <li>
                          <router-link to="/lecturedata/department?board=41">강의자료실</router-link>
                        </li>
                        <li>
                          <router-link to="/seminadata/seminadata?board=81">세미나자료실</router-link>
                        </li>
                        <li>
                          <router-link to="/etcdata/etcdata?board=86">기타자료실</router-link>
                        </li>
                      </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-md-3 right_menu">
              <div class="num6">
                <div class="b_margin">
                  <h2 style="font-size: 20px;">배재대학교 MIE 연구실</h2>
                  <h2>[ Lab.of Multimedia Information Engineering ]</h2>
                  <img src="../../assets/sub_logo.png" alt="plus"/>
                  <p>본 연구실에서는 21세기 고도의 정보화 사회에 필수적 요소 중 하나인 멀티미디어 정보처리에 대한 연구 및 개발을 수행하며 실용적인 서비스를 제공하기 위한 일련의 연구를 수행하고 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div class="container" style="display:none;">
    <div class="row" style="width: 1000px;
    margin: auto; margin-top:20px; margin-bottom:20px;">
        <div class="col-md-6">
            <img src="../../assets/pcu_logo.png" alt="plus" style="width:100px;height:100px;float:left;"/>
            <h2 style="margin-top:30px;margin-left:140px; font-size:28px;">배재대학교</h2>
        </div>
        <div class="col-md-6">
            <img src="../../assets/pcu_logo.png" alt="plus" style="width:100px;height:100px;float:left;"/>
            <h2 style="margin-top:30px;margin-left:140px; font-size:28px;">배재대학교 컴퓨터공학과</h2>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
  } from 'hooper';
import 'hooper/dist/hooper.css';
import ModalLogin from "../page/sign/login"
import ModalRegister from "../page/sign/register"
import ModalView from '../page/board/postView'
import axios from 'axios';
export default {
  name: 'mainPage',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    ModalLogin,
    ModalRegister,
    ModalView,
  },
  data: () => ({
    notice: [],
    temp: [],
    postData: [],
  }),
  mounted() {
    //초기데이터 로딩
    axios.get('http://35.200.100.93:8080/api/board/info/id/' + 91 + '/posts').then(response => {
      var result = response && response.data
      this.temp = result.list;
      for(var i=0;i<5;i++) {
        this.notice.splice(i, 1, this.temp[i]);
      }
    });
  },
  computed: {
    noticePosts_Sort : function() {
      return _.orderBy(this.notice, 'postId', 'desc');
    },
  },
  methods: {
    postView(postId) {
      axios.get('http://35.200.100.93:8080/api/board/post/' + postId).then(response => {
        var result = response && response.data
        this.postData = result.data;

        this.$modal.show('modal-view', {postData: this.postData});
      });
    }
  }
};
</script>

<style>
.t1 a, .t2 a, .t3 a {
  color: unset;
  text-decoration: none;
}
.hooper {
  width: 1500px !important;
  height: 100% !important;
  margin: auto;
}
.breadcrumb {
  margin-bottom: 0px !important;
}

.left_menu {
  float:left;
  height:500px;
}
.right_menu {
  display: block;
  float:right;
  height:500px;
  padding: 10px 10px 10px 10px;
}
@media (min-width: 500px) {
  .right_menu {
    display:none;
  }
}
@media (min-width: 768px) {
  .right_menu {
    display:table;
  }
}
.t_margin {
   margin:20px 20px 20px 20px;
}
.t_margin img{
  position: absolute;
  top: 27px;
  right: 30px;
  cursor: pointer;
}
.t_margin p, .item{
  margin-top: 20px;
}
.t_margin li {
  margin-top: 7px;
  width:100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.t_margin li a{
  color: unset;
}
.t_margin li:hover{
  text-decoration: underline;
  cursor: pointer;
}
.t_margin h2 {
  font-size: 18px;
  color: #184c8d;
  font-weight: 600;
}
.b_margin {
   margin:20px 20px 20px 20px;
}
.b_margin img{
  width:60%;
  margin-left: 55px;
  margin-top: 20px;
}
.b_margin p {
  line-height : 30px;
  margin-top: 20px;
  color:#66666;
}
.b_margin h2 {
  font-size: 18px;
  color: #184c8d;
  font-weight: 600;
}
.t1 {
  height: 250px;
  padding: 10px 10px 10px 10px;
}
.t2 {
  height: 250px;
  padding: 10px 10px 10px 10px;
}
.t3 {
  height: 250px;
  padding: 10px 10px 10px 10px;
}

.b1 {
  height: 250px;
  padding: 10px 10px 10px 10px;
}

.b2 {
  height: 250px;
  padding: 10px 10px 10px 10px;
}

.num1, .num2, .num3, .num4, .num5, .num6 {
   width:100%;
   height:100%;
   border: 1px solid black;
}
</style>

<template>
  <div>
    <sublogo :title="sublogo.title" :bg="sublogo.bg"></sublogo>
    <div class="container resizing">
      <div class="row has-feedback">

        <!-- 左侧列表 -->

        <div class="col-sm-3 left_height norightpadding noleftpadding">
          <sidebar :menus="menus" :title="sidebar.title"></sidebar>
          <div class="ine_sect_left_2 clearfix">
            <div class="fl center col-xs-12 nopadding">
              <!--<div class="items">
                <a href="index.php?s=/sys/index/zaixiankaihu1.html">
                  <i class="iconfont icon-zaixiankaihu"></i>
                  <h3>Account Data Pre-filling</h3>
                </a>
              </div>
              <div class="items">
                <a href="index.php?s=/sys/list/29.html">
                  <i class="iconfont icon-jiaoyipingtai"></i>
                  <h3>Trading Platform</h3>
                </a>
              </div>-->
              <div class="items">
                <a v-on:click="language='korea'">
                  <font-awesome-icon icon="globe" />
                  <h3>한국어</h3>
                </a>
              </div>
              <div class="items">
                <a v-on:click="language='english'">
                  <font-awesome-icon icon="globe" />
                  <h3>English</h3>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div class="col-sm-9">

          <div class="ine_sect_right2" style="height: auto; margin-bottom: 30px;">

            <div class="sect_right_text1">

              <div class="container" style="width:100%">
                <!-- 한국어 -->
                  <div class="row" v-if="language==='korea'">
                      <div class="col-xs-3 left">
                        <table class="table table-bordered profile">
                          <tbody>
                            <tr>
                              <div class="profile_div">
                                <img class="profile_img" :src="professorKR.data.profile_img"/>
                              </div>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="col-md-9 right">
                        <h3>{{professorKR.data.name}} 교수님</h3>

                        <table class="table table-bordered">
                  				<caption>이표는 tel, e-mail 정보를 제공합니다.</caption>
                  				<colgroup>
                  					<col style="width:20%">
                  					<col style="width:80%;">
                  				</colgroup>
                  				<tbody>
                            <tr>
                              <th scope="row">직책</th>
                              <td>{{professorKR.data.position}}</td>
                            </tr>
                  					<tr>
                  						<th scope="row">전화</th>
                  						<td>{{professorKR.data.tel}}</td>
                  					</tr>
                  					<tr>
                  						<th scope="row">이메일</th>
                  						<td>{{professorKR.data.email}}</td>
                  					</tr>
                            <tr>
                              <th scope="row">취미</th>
                              <td>{{professorKR.data.hobby}}</td>
                            </tr>
                            <tr>
                              <th scope="row">가족</th>
                              <td>{{professorKR.data.family}}</td>
                            </tr>
                  				</tbody>
                  			</table>
                      </div>
                  </div>
                  <!-- 영어 -->
                  <div class="row" v-if="language==='english'">
                      <div class="col-md-3 left">
                        <table class="table table-bordered profile">
                          <tbody>
                            <tr>
                              <div class="profile_div">
                                <img class="profile_img" :src="professorEN.data.profile_img"/>
                              </div>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="col-md-9 right">
                        <h3>Professor. {{professorEN.data.name}}</h3>

                        <table class="table table-bordered">
                          <caption>이표는 tel, e-mail 정보를 제공합니다.</caption>
                          <colgroup>
                            <col style="width:20%">
                            <col style="width:80%;">
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">Position</th>
                              <td>{{professorEN.data.position}}</td>
                            </tr>
                            <tr>
                              <th scope="row">Tel</th>
                              <td>{{professorEN.data.tel}}</td>
                            </tr>
                            <tr>
                              <th scope="row">E-mail</th>
                              <td>{{professorEN.data.email}}</td>
                            </tr>
                            <tr>
                              <th scope="row">hobby</th>
                              <td>{{professorEN.data.hobby}}</td>
                            </tr>
                            <tr>
                              <th scope="row">family</th>
                              <td>{{professorEN.data.family}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div>
                  <div class="section"></div>

                  <div class="row">
                    <h3 class="title" v-if="language === 'korea'">주요 약력</h3>
                    <h3 class="title" v-if="language === 'english'">History</h3>
                    <table class="table table-bordered">
                  		<caption>이표는 년도에 따른 주요 학력 정보를 제공합니다.</caption>
                  		<colgroup>
                  			<col style="width:20%">
                  			<col style="width:80%;">
                  		</colgroup>
                      <!-- 한국어 -->
                  		<tbody v-if="language === 'korea'">
                  			<tr v-for="item in historyKR_Sort">
                  				<th scope="row">{{item.history}}</th>
                  				<td>{{item.name}}</td>
                  			</tr>
                  		</tbody>
                      <!-- 영어 -->
                      <tbody v-if="language === 'english'">
                        <tr v-for="item in historyEN_Sort">
                          <th scope="row">{{item.history}}</th>
                          <td>{{item.name}}</td>
                        </tr>
                      </tbody>
                  	</table>
                  </div>

                  <div class="row">
                    <h3 class="title" v-if="language === 'korea'">외부 활동</h3>
                    <h3 class="title" v-if="language === 'english'">Outside Activity</h3>
                    <table class="table table-bordered">
                      <caption>이표는 년도에 따른 주요 학력 정보를 제공합니다.</caption>
                      <colgroup>
                        <col style="width:20%">
                        <col style="width:80%;">
                      </colgroup>
                      <tbody v-if="language === 'korea'">
                        <tr v-for="item in activityKR_Sort">
                          <th scope="row">{{item.activity}}</th>
                          <td>{{item.name}}</td>
                        </tr>
                      </tbody>
                      <tbody v-if="language === 'english'">
                        <tr v-for="item in activityEN_Sort">
                          <th scope="row">{{item.activity}}</th>
                          <td>{{item.name}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>

          </div>

        </div>

        <div class="clearfix">

        </div>

        <div style="color: #111;font-size: 13px;line-height: 25px;margin-top: 40px;">

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import sublogo from '../../layout/sublogo';
  import sidebar from '../../layout/sidebar'

  export default{
    name: 'Prointro',
    components: {
      sublogo,
      sidebar,
    },
    computed: {
      historyKR_Sort : function() {
        return _.orderBy(this.historyKR, 'id', 'esc');
      },
      historyEN_Sort : function() {
        return _.orderBy(this.historyEN, 'id', 'esc');
      },
      activityKR_Sort : function() {
        return _.orderBy(this.activityKR, 'id', 'esc');
      },
      activityEN_Sort : function() {
        return _.orderBy(this.activityEN, 'id', 'esc');
      }
    },
    data: () => ({
      sublogo: {
        title: '교수님 소개',
        bg: require('../../../assets/bg_title.jpg')
      },
      sidebar: {
        title: 'MIE 소개',
      },
      menus: [
      {
        name: '연구실 소개',
        href: '/#/introduce/labintro',
        selected: ''
      },
      {
        name: '교수님 소개',
        href: '/#/introduce/professorintro',
        selected: 'li_hover'
      }
      ],
      language: 'korea',
      professorEN: [],
      professorKR: [],
      historyEN: [{
        id : 0,
        history : '',
        name: '',
        professorId: 0
      }],
      historyKR: [{
        id : 0,
        history : '',
        name: '',
        professorId: 0
      }],
      activityKR: [{
        id : 0,
        activity : '',
        name: '',
        professorId: 0
      }],
      activityEN: [{
        id : 0,
        activity : '',
        name: '',
        professorId: 0
      }],

    }),
    created() {

      const vm = this;
      //교수님 정보 받아오기 1 = 영문 2 = 한국어
      axios.get('http://35.200.100.93:8080/api/intro/professor/1').then(response => {
        var result = response && response.data

        vm.professorEN = result;
      });

      //교수님 정보 받아오기 1 = 영문 2 = 한국어
      axios.get('http://35.200.100.93:8080/api/intro/professor/2').then(response => {
        var result = response && response.data

        vm.professorKR = result;
      });

      //연혁 정보 받아오기
      axios.get('http://35.200.100.93:8080/api/intro/history/1').then(response => {
        var result = response && response.data.list;

        vm.historyEN = result;
      });

      //연혁 정보 받아오기
      axios.get('http://35.200.100.93:8080/api/intro/history/2').then(response => {
        var result = response && response.data.list;

        vm.historyKR = result;
      });

      //외부활동 정보 받아오기
      axios.get('http://35.200.100.93:8080/api/intro/activity/1').then(response => {
        var result = response && response.data.list;

        vm.activityEN = result;
      });

      //외부활동 정보 받아오기
      axios.get('http://35.200.100.93:8080/api/intro/activity/2').then(response => {
        var result = response && response.data.list;

        vm.activityKR = result;
      });
    }
  };
</script>
<style src="../../../assets/css/pageA.css">
</style>

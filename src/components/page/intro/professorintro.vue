<template>
  <div>
    <sublogo :title="sublogo.title" :bg="sublogo.bg"></sublogo>
    <div class="container">
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

              <div class="container">
                  <div class="row">
                      <div class="col-md-3 left">
                        <img src="../../../assets/jung.jpg"/>
                      </div>
                      <div class="col-md-9 right">
                        <h3>정회경 교수님</h3>

                        <table class="table table-bordered">
                  				<caption>이표는 tel, e-mail 정보를 제공합니다.</caption>
                  				<colgroup>
                  					<col style="width:20%">
                  					<col style="width:80%;">
                  				</colgroup>
                  				<tbody>
                  					<tr>
                  						<th scope="row">Tel</th>
                  						<td>053-785-1000</td>
                  					</tr>
                  					<tr>
                  						<th scope="row">E-mail</th>
                  						<td>ykuk@dgist.ac.kr</td>
                  					</tr>
                  				</tbody>
                  			</table>
                      </div>
                  </div>
                  <div class="section"></div>

                  <div class="row">
                    <h3 class="title">주요 약력</h3>
                    <table class="table table-bordered">
                  		<caption>이표는 년도에 따른 주요 학력 정보를 제공합니다.</caption>
                  		<colgroup>
                  			<col style="width:20%">
                  			<col style="width:80%;">
                  		</colgroup>
                  		<tbody>
                  			<tr>
                  				<th scope="row">1978.9 ~ 1981.8</th>
                  				<td>Pennsylvania State University 물리학, 이학박사</td>
                  			</tr>
                  			<tr>
                  				<th scope="row">1975.3 ~ 1977.2	</th>
                  				<td>서울대학교 물리학, 이학석사</td>
                  			</tr>
                  			<tr>
                  				<th scope="row">1971.3 ~ 1975.2	</th>
                  				<td>서울대학교 물리학, 이학사</td>
                  			</tr>
                  			<tr>
                  				<th scope="row">1968.3 ~ 1971.2	</th>
                  				<td>경기고등학교</td>
                  			</tr>
                  			<!--<tr>
                  				<th scope="row">1972</th>
                  				<td>경기고등학교</td>
                  			</tr>-->
                  		</tbody>
                  	</table>
                  </div>

                  <div class="row">
                    <h3 class="title">외부 활동</h3>
                    <table class="table table-bordered">
                      <caption>이표는 년도에 따른 주요 학력 정보를 제공합니다.</caption>
                      <colgroup>
                        <col style="width:20%">
                        <col style="width:80%;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">1978.9 ~ 1981.8</th>
                          <td>Pennsylvania State University 물리학, 이학박사</td>
                        </tr>
                        <tr>
                          <th scope="row">1975.3 ~ 1977.2	</th>
                          <td>서울대학교 물리학, 이학석사</td>
                        </tr>
                        <tr>
                          <th scope="row">1971.3 ~ 1975.2	</th>
                          <td>서울대학교 물리학, 이학사</td>
                        </tr>
                        <tr>
                          <th scope="row">1968.3 ~ 1971.2	</th>
                          <td>경기고등학교</td>
                        </tr>
                        <!--<tr>
                          <th scope="row">1972</th>
                          <td>경기고등학교</td>
                        </tr>-->
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
  import sublogo from '../../layout/sublogo';
  import sidebar from '../../layout/sidebar'


  export default{
    name: 'labintro',
    components: {
      sublogo,
      sidebar,
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
    })
  };
</script>
<style src="../../../assets/css/pageA.css">
</style>

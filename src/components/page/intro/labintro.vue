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

        <div class="ine_sect_right" style="height: auto;">

          <div class="sect_right_text1">

            <div class="h3">
              멀디미디어 정보공학 연구실
              <h4>Lab.of Multimedia Information Engineering.</h4>
            </div>
            <div class="sect_text1_1" v-if="language === 'korea'">
              <p style="color:#FF3636;">본 연구실에서는 21세기 고도의 정보화 사회에 필수적 요소 중 하나인 멀티미디어 정보처리에 대한 전반적인 연구 및 개발 서비스를 제공하기 위한 일련의 연구를 수행 하고 있다.</p>
              <p>이를 통해 미래의 복잡하고 불확실한 기업환경에 대처하고, 미래의 정보화사회에 창조적으로 적응할 수 있는 정보마인드를 갖춘 전문 기술인의 양성과, 지역사회의 정보화와 세계화에 기여 및 봉사하는 고급정보인력을 양성하고 있다.</p>
              <p>21세기 우리에게 다가오고 있는 인터넷 생활환경시대에 요구되는 핵심 정보기술 개발을 목표로 컴퓨터, 소프트웨어 기술개발, 영상정보처리기술, 소프트웨어공학기술, 언어공학기술, 인터넷서비스 기술, 전자상거래 기술, 차세대 디지털컨텐츠 기술 등 원천기술의 확보 및 응용 기술 개발을 위한 노력을 기울이고 있다.</p>
              <p>특히 XML(eXtensible Markup Language)을 기반으로 다양한 연구를 수행하였으며 현재 선진 기술과 경쟁력있는 기술개발에 전력을 쏟을 계획으로 e-Logistics, SVG, XML-Canonical, e-Catalog, MPEG-4(PMP), MPEG-21(REL/RDD) 등의 다양한 연구를 수행하고 있다.</p>
              <p>이와 같은 다양한 연구의 수행으로 기술 축적 및 인재 양성에 노력하고 있으며 신기술 습득으로 인한 국가경쟁력 확보와 정보 세계화에 발 맞추어 나아가고 있다.</p>
            </div>

            <div class="sect_text1_1" v-if="language === 'english'">
              <p style="color:#FF3636;">In this Lab, Now working of research and development about processing Multimedia Information which one of essential element in Information-oriented society of 21 century.</p>
              <p>Trough this, train expert who can cope with complex and uncertain business environment of future, and adapt to information-oriented society.</p>
              <p>Working up to obtain Key Original Technology(Development of Sofrware, Visual & Broadcasting Information Process, Software Engineering, Internet Service, T-Commerce, Next Generation Digital Content)to develop Core Information Technology which requested in the Internet Living Environment Age of future.</p>
              <p>Until now, Various research based on XML are completed. And now working up especially to research about e-Logistics(based on Ubiqultous and RFID), SVG, Digital Library, Web Services(Include Fast Web Services), e-Catalog, Software Technology of Digital Broadcasting, MPEG-2/4/7/21, Semantic Web/Ontology.</p>
              <p>Through these various research, working up to accumulate new technology and train expert engineer.</p>
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
import sublogo from '../../layout/sublogo'
import sidebar from '../../layout/sidebar'

export default {
  name: 'labintro',
  components: {
    sublogo,
    sidebar,
  },
  data: () => ({
    sublogo: {
      title: '연구실 소개',
      bg: require('../../../assets/bg_title.jpg')
    },
    sidebar: {
      title: 'MIE 소개'
    },
    menus: [
    {
      name: '연구실 소개',
      href: '/#/introduce/labintro',
      selected: 'li_hover'
    },
    {
      name: '교수님 소개',
      href: '/#/introduce/professorintro',
      selected: ''
    }
    ],
    language: 'korea',
  }),

};
</script>
<style>
.items:hover {
  box-shadow: 0 200px 0 0 rgba(0,0,0,0.25) inset, 0 -200px 0 0 rgba(0,0,0,0.25) inset;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 0px;
}

.has-feedback {
  position: relative;
}

.norightpadding {
  padding-right: 0 !important;
}

.noleftpadding {
  padding-left: 0 !important;
}

.fl {
  position: relative;
}

.center {
  text-align: center !important;
}

.fl:before {
  height: 100%;
  width: 2px;
  left: 50%;
  transform: translateX(-50%);
}

.fl:before,
.fl:after {
  content: "";
  display: block;
  background-color: #fff;
  position: absolute;
  z-index: 9;
}

.fl .items {
  background: #0067b3;
  float: left;
  width: 50%;
  position: relative;
  transition: .3s;
  height: 150px;
  border: 1px solid white;
}

.fl .items:before {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 0;
  top: auto;
  bottom: 0;
  transition: all .3s ease;
  background-color: #009ae4 !important;
}

.fl .items a svg {
  color: white;
  font-size: 35px;
  margin-bottom: 10px;
}

.fl .items a {
  display: block;
  padding: 45px 0;
  position: relative;
}

.fl .items a h3 {
  font-size: 15px;
  color: #fff;
  font-weight: normal;
  margin-bottom: 0px;
}

.fl .items a i {
  font-size: 40px;
  color: #fff;
}

.fl:after {
  width: 100%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
}

.fl:before {
  height: 100%;
  width: 2px;
  left: 50%;
  transform: translateX(-50%);
}

.fl .items:before {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 0;
  top: auto;
  bottom: 0;
  transition: all .3s ease;
  background-color: #009ae4 !important;
}

.ine_sect_left_3 {
  margin-top: 20px;
  padding-bottom: 20px;
  background: #fff;
}

.ine_sect_left_3 ul {
  background: #f7f7f7;
}

.nobottommargin {
  margin-bottom: 0 !important;
}

.ine_sect_left_3 ul li {
  margin-bottom: 2px;
  background: #fff;
}

.ine_sect_left_3 ul li div {
  display: block;
  padding: 10px 0 10px 10px;
}

.ine_sect_left_3 ul li div .left_3_span_1 {
  display: inline-block;
  width: 20%;
  margin-right: 0;
  float: left;
}

.ine_sect_left_3 ul li div .left_3_span_1 i {
  font-size: 24px;
  padding: 6px 12px;
  background: #0067b3;
  border-radius: 50%;
  color: #fff !important;
}

.ine_sect_left_3 ul li div .left_3_span_2 {
  padding: 0 20px 0 0;
  display: inline-block;
  width: 80%;
}

.ine_sect_left_3 ul li div .left_3_span_2 .h5 {
  color: #0067b3;
  display: block;
  margin-top: 4px;
  margin-bottom: 7px;
}

.ine_sect_left_3 ul li div .left_3_span_2 .h5_text {
  color: #000 !important;
  display: block;
  word-wrap: break-word;
  word-break: break-all;
}

.ine_sect_right {
  border: 1px solid #e9e9e9;
  margin-top: 15px;
  background: #f9f9f9;
}

.ine_sect_right .sect_right_text1 {
  padding: 0 50px 80px 50px;
  margin-top: 60px;
}

.ine_sect_right .sect_right_text1 .h3 {
  color: #0067b3;
  margin-bottom: 40px;
}

.ine_sect_right .sect_right_text1 .h3 h4{
  color: gray;
  margin-bottom: 40px;
}

.sect_text1_1 {
  overflow-x: auto;
}

.sect_text1_1 p{
  color: #444444;
  font-size: 15px;
}

.left_height {
  height:650px;
}
</style>

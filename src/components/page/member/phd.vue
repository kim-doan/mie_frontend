<template>
  <div>
    <sublogo :title="sublogo.title" :bg="sublogo.bg"></sublogo>
    <div class="container resizing">
      <div class="row has-feedback">

<!-- sidebar 영역 -->
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
                  <font-awesome-icon icon="search-plus" />
                  <h3>상세보기</h3>
                </a>
              </div>
              <div class="items">
                <a v-on:click="language='english'">
                  <font-awesome-icon icon="search-minus" />
                  <h3>간략히</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
<!-- 본문 영역 -->
        <div class="col-sm-9">
          <div class="ine_sect_right2" style="height: auto; margin-bottom: 30px;">
            <div class="sect_right_text1">
              <div class="container">
                <magic-grid :maxCols="2" :maxColWidth="900" :anmated="false">
                <card
                  v-for="(post, i) in posts"
                  :key="i"
                  :title="post.title"
                  :body="post.body" />
                </magic-grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sublogo from '../../layout/sublogo';
import sidebar from '../../layout/sidebar';
import card from '../../component/card';
import MagicGrid from '../../magic-grid/magic-grid.vue';

export default {
  components: {
    sublogo,
    sidebar,
    card,
    MagicGrid
  },
  data: () => ({
    sublogo: {
      title: '박사과정',
      bg: require('../../../assets/bg_title2.jpg')
    },
    sidebar: {
      title: '연구실구성원',
    },
    menus: [
    {
      name: '박사과정',
      href: '/#/member/phd',
      selected: 'li_hover'
    },
    {
      name: '석사과정',
      href: '/#/member/phm',
      selected: ''
    },
    {
      name: '졸업생 (석사)',
      href: '/#/member/master',
      selected: ''
    },
    {
      name: '졸업생 (박사)',
      href: '/#/member/doctor',
      selected: ''
    },
    ],
    language: 'korea',
    posts: []
  }),
  mounted () {
  fetch('//jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      this.posts = json.slice(0, 3)
    })
}
}
</script>

<style src="../../../assets/css/pageA.css">
</style>

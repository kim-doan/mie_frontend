<template>
  <div>
    {{this.$route.query.id}}
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
              <div class="items" style="display:none">
                <a v-on:click="language='korea'">
                  <font-awesome-icon icon="search-plus" />
                  <h3>상세보기</h3>
                </a>
              </div>
              <div class="items" style="display:none">
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
              <div class="container" style="width: 100%">
                <v-card>
                  <v-card-title>
                    <v-spacer></v-spacer>
                    <v-text-field
                      v-model="search"
                      append-icon="search"
                      label="검색어"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-card-title>

                <v-data-table
                  class="elevation-1"
                  loading loading-text="로딩 중 기다려주세요."
                  :headers="headers"
                  :items="contents"
                  :search="search"
                  :rows-per-page-items="[10, 25]">
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-center" >{{ props.item.postId }}</td>
                    <td class="text-xs-left" style="width:520px;">{{ props.item.title }}</td>
                    <td class="text-xs-left">{{ props.item.author }}</td>
                    <td class="text-xs-left">{{ props.item.createAt }}</td>
                    <!-- <td class="text-xs-left">{{ props.item.address.city }}</td> -->
                  </template>
                  <template slot="pageText" slot-scope="props">
                    {{ props.pageStart }} - {{ props.pageStop }} / {{ props.itemsLength }}
                  </template>
                  <template slot="no-data">
                    권한이 없거나 데이터가 존재하지 않습니다.
                  </template>
                </v-data-table>
              </v-card>
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
import axios from 'axios'

export default {
  components: {
    sublogo,
    sidebar,
  },
  data: () => ({
    search: '',
    contents: [],
    headers: [
      {
        text: '번호',
        value: 'postId',
        sortable: true
      },
      {
        text: '제목',
        value: 'title',
        sortable: false
      },
      {
        text: '작성자',
        value: 'author',
        sortable: false
      },
      {
        text: '등록일',
        value: 'createAt',
        sortable: false
      }
    ],

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
  methods: {
    li_hover(num) { // li_hover 그리기
      for(var i=0;i<this.menus.length;i++) {
        if(i == num) {
          this.menus[num].selected = "li_hover";
          continue;
        }
        this.menus[i].selected = '';
      }
    },
    postView() {
      alert('dd');
    }
  },
  mounted () {
  fetch('//jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      this.posts = json.slice(0, 3)
    })
  },
  updated() {
    if(this.$route.query.id === '1') {
      this.sublogo.title = "학부";
      this.li_hover(0);
    } else if (this.$route.query.id === '2') {
      this.sublogo.title = "학회 학술지";
      this.li_hover(1);
    } else if (this.$route.query.id === '3') {
      this.sublogo.title = "학위 논문";
      this.li_hover(2);
    } else if (this.$route.query.id === '4') {
      this.sublogo.title = "학술대회논문";
      this.li_hover(3);
    } else if (this.$route.query.id === '5') {
      this.sublogo.title = "연구과제";
      this.li_hover(4);
    } else if (this.$route.query.id === '6') {
      this.sublogo.title = "연구보고서";
      this.li_hover(5);
    } else if (this.$route.query.id === '7') {
      this.sublogo.title = "기사 및 수상경력";
      this.li_hover(6);
    } else if (this.$route.query.id === '8') {
      this.sublogo.title = "특허 및 프로그램등록";
      this.li_hover(7);
    }
  },
  created() {
    const vm = this;

    //교수님 정보 받아오기 1 = 영문 2 = 한국어
    axios.get('http://35.200.100.93:8080/api/board/info/book/posts').then(response => {
      var result = response && response.data

      vm.contents = result.list;
    });

    if(this.$route.query.category === 'research') {
        this.sidebar.title = "연구활동"
        this.menus = [{
          name : 'Book',
          href : '/#/research/board?id=1&category=research',
          selected: ''
        },
        {
          name: 'A thesis',
          href: '/#/research/board?id=2&category=research',
          selected: ''
        },
        {
          name: 'Master Theses',
          href: '/#/research/board?id=3&category=research',
          selected: ''
        },
        {
          name: 'Conference Papers',
          href: '/#/research/board?id=4&category=research',
          selected: ''
        },
        {
          name: 'Research Project',
          href: '/#/research/board?id=5&category=research',
          selected: ''
        },
        {
          name: 'Report',
          href: '/#/research/board?id=6&category=research',
          selected: ''
        },
        {
          name: 'Award',
          href: '/#/research/board?id=7&category=research',
          selected: ''
        },
        {
          name: 'Patents & Program',
          href: '/#/research/board?id=8&category=research',
          selected: ''
        }
      ]
    }
  }
}
</script>

<style src="../../../assets/css/pageA.css">
</style>

<template>
  <div>
    <a style="display:none">{{this.$route.query.board}}</a>
    <sublogo :title="sublogo.title" :bg="sublogo.bg"></sublogo>
    <div class="container resizing">
      <div class="row has-feedback">

<!-- sidebar 영역 -->
        <div class="col-sm-3 left_height norightpadding noleftpadding" @click.prevent="say">
          <sidebar :menus="menus" :title="sidebar.title"></sidebar>
          <div class="ine_sect_left_2 clearfix">
            <div class="fl resize center col-xs-12 nopadding">
              <div class="items" >
                <a v-on:click="language='korea'">
                  <font-awesome-icon icon="pencil-alt" />
                  <h3>게시글 작성</h3>
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
                  class="elevation-1 datatable"
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
      title: '강의자료',
      bg: require('../../../assets/bg_title2.jpg')
    },
    sidebar: {
      title: '학부',
    },
    menus: [],
    language: 'korea',
    posts: [],
    menuLangth: 0,
    count: 0,
  }),
  methods: {
    say(event) {
      //사이드 메뉴에서 버튼을 누를 경우 보드 데이터를 가져오고 해당 보드 정보로 이동
      var href = event.target.getAttribute('href'); // 이벤트를 누른 타겟에서 주소 뽑아냄
      var boardNum = href.indexOf("="); // 서브쿼리 boardId 찾는 과정
      var boardId = href.substr(boardNum+1,);

      axios.get('http://35.200.100.93:8080/api/board/info/id/' + boardId + '/posts').then(response => {
        var result = response && response.data
        this.posts = result.list;
        this.contents = this.posts;
      });
      this.$router.push(event.target.getAttribute('href')) // 해당 주소로 이동
    },
    li_hover(num) { // li_hover 그리기
      for(var i=0;i<this.menus.length;i++) {
        if(i == num) {
          this.$set(this.menus[num], 'selected', 'li_hover')
          continue;
        }
        this.$set(this.menus[i], 'selected', '')
      }
    }
  },

  updated() {
    for(var i=0;i<this.menus.length;i++) {
      if(this.$route.query.board == this.menus[i].boardId) {
        this.li_hover(i);
        break;
      }
    }

  },
  mounted() {
    const vm = this;

    //게시판 정보 가져오기
    axios.get('http://35.200.100.93:8080/api/board/list/1').then(response => {
      var result = response && response.data

      for(var i=0;i<result.length;i++) { // 폼에 맞추기위해 객체 이름 변경
        Object.defineProperty(result[i], "href", Object.getOwnPropertyDescriptor(result[i], "name"));
        delete result[i]["name"];

        Object.defineProperty(result[i], "name", Object.getOwnPropertyDescriptor(result[i], "title"));
        delete result[i]["title"];
      }
      vm.menus = result;
      for(var i=0;i<vm.menus.length;i++) { //사이드 메뉴에 주소 넣기
        vm.menus[i].href = '/lecturedata/department?board=' + vm.menus[i].boardId;
      }
    });

    //초기데이터 로딩
    axios.get('http://35.200.100.93:8080/api/board/info/id/' + this.$route.query.board + '/posts').then(response => {
      var result = response && response.data
      this.posts = result.list;
      this.contents = this.posts;
    });
  },
  created() {
  }
}

</script>

<style src="../../../assets/css/pageA.css">
</style>

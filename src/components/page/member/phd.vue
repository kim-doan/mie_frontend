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
              <div class="container" style="width:100%;">
                <v-card>
                <v-data-table
                  class="elevation-1 datatable"
                  loading loading-text="로딩 중 기다려주세요."
                  :headers="headers"
                  :items="phd"
                  :pagination.sync="pagination"
                  hide-default-header
                  :rows-per-page-items="[3, 5]">
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-center">
                      <div style="margin-bottom:30px;"></div>
                      <card
                        :name="props.item.name"
                        :enname="props.item.enname"
                        :admission="props.item.admission"
                        :email="props.item.email"
                        :field="props.item.field"
                        :workplace="props.item.workplace"
                        :type="props.item.type"
                        :profile_img="props.item.profile_img"
                        :oneword="props.item.oneword"
                        :activities="props.item.activities" />
                      <div style="margin-bottom:30px;"></div>
                    </td>
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
              <!--  <magic-grid :maxCols="2" :maxColWidth="850" :anmated="false">
                <card
                  v-for="(member, i) in phd"
                  :key="i"
                  :name="member.name"
                  :enname="member.enname"
                  :admission="member.admission"
                  :email="member.email"
                  :field="member.field"
                  :workplace="member.workplace"
                  :type="member.type"
                  :profile_img="member.profile_img"
                  :oneword="member.oneword"
                  :activities="member.activities" />
                </magic-grid>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
    pagination: {
      sortBy: 'id',
      descending: true
    },
    headers: [
      {
        text: '',
        value: 'id',
        sortable: false,
      },
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
    phd: []
  }),
  mounted () {
    //초기데이터 로딩
    axios.get('http://35.200.100.93:8080/api/labmember/info/phd').then(response => {
      var result = response && response.data
      this.phd = result.list;
    });
  }
}
</script>

<style src="../../../assets/css/pageA.css">
</style>

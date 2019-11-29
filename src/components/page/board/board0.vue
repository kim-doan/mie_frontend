<template>
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
    :items="this.contents"
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
</template>

<script>
import axios from 'axios'

export default {
  components: {
  },
  data: () => ({
    search: '',
    contents: [],
    props: {
      contents: [],
    },
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
  }),
  created() {
    const vm = this;


  }
}
</script>

<style src="../../../assets/css/pageA.css">
</style>

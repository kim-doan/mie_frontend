<template>
  <div>
  <v-dialog v-model="dialog" max-width="700px">
<!--  <v-btn slot="activator" color="primary" dark class="mb-2">회원추가</v-btn> -->
  <v-card>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm6 md6>
            <v-text-field v-model="editedItem.name" label="이름"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-select
              v-validate="'required'"
              :items="categoryItems"
              v-model="tempItem.category"
              :error-messages="errors.collect('select')"
              label="카테고리"
              data-vv-name="select"
              required
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click.native="close">취소</v-btn>
      <v-btn color="blue darken-1" flat @click.native="save">저장</v-btn>
    </v-card-actions>
  </v-card>
      <v-btn slot="activator" color="primary" dark class="mb-2">강의자료 / 대학원 게시판 추가</v-btn>
</v-dialog>
<v-card>
  <v-card-title>
    <b>강의자료 / 대학원</b>
  </v-card-title>
<v-data-table
  class="elevation-1"
  loading loading-text="로딩 중 기다려주세요."
  :headers="headers"
  :items="category"
  :rows-per-page-items="[10, 25]">
  <template slot="items" slot-scope="props">
    <td class="text-xs-center" >{{ props.item.boardId }}</td>
    <td class="text-xs-left">{{ props.item.name }}</td>
    <td class="text-xs-left">{{ props.item.modifiedAt }}</td>
    <td class="text-xs-left">
      <v-btn icon class="mx-0" @click="editItem(props.item)">
        <v-icon color="teal">edit</v-icon>
      </v-btn>
      <v-btn icon class="mx-0" @click="deleteItem(props.item)">
        <v-icon color="pink">delete</v-icon>
      </v-btn>
    </td>
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
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    dialog: false,
    editedIndex: -1,
    editedItem: {
      boardId: null,
      name: '',
      category: null
    },
    defaultItem: {
      name: '',
      category: null
    },
    tempItem: {
      boardId: null,
      name: '',
      category: null
    },
    headers: [
      {
        text: '번호',
        value: 'boardId',
        sortable: true
      },
      {
        text: '이름',
        value: 'title',
        sortable: false
      },
      {
        text: '수정일',
        value: 'modifiedAt',
        sortable: false
      },
      {
        text: '액션',
        value: 'actions',
        align: 'left',
        sortable: false
      }
    ],
    categoryItems: [
      '강의자료 / 학부',
      '강의자료 / 대학원',
      '세미나자료',
      '기타자료실',
      '커뮤니티'
    ],
    category: [],
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '게시판 추가' : '게시판 정보 수정'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  methods: {
    editItem (item) {
      this.editedIndex = this.category.indexOf(item)
      //tempitem을 쓰는 이유 : 서버에 폼 전송시 정형화된 틀에 맞추기 위함
      this.tempItem.boardId = this.editedIndex + 1;
      this.tempItem.name = item.name;
      this.editedItem = Object.assign({}, this.tempItem)

      this.dialog = true
    },

    deleteItem (item) {
      const index = this.category.indexOf(item)
      const categoryName = this.category[index].name

      //게시판 삭제 시키기
      confirm('해당 게시판을 정말로 삭제시키시겠습니까?') && this.category.splice(index, 1)
      && axios.delete('http://35.200.100.93:8080/api/board/delete/' + categoryName)
      .then(r => {
              if (r.data.success === true) {
                alert(r.data.msg);
              }
            })
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if(this.tempItem.category == '강의자료 / 학부') {
        this.editedItem.category = 1;
      } else if (this.tempItem.category == '강의자료 / 대학원') {
        this.editedItem.category = 2;
      } else if (this.tempItem.category == '세미나자료') {
        this.editedItem.category = 3;
      } else if (this.tempItem.category == '기타자료실') {
        this.editedItem.category = 4;
      } else if (this.tempItem.category == '커뮤니티') {
        this.editedItem.category = 5;
      }
      if (this.editedIndex > -1) {
        Object.assign(this.category[this.editedIndex], this.editedItem) // ui상에서 변경
        //게시판 정보 수정하기

        axios.put('http://35.200.100.93:8080/api/board/update', this.editedItem)
        .then(r => {
          if(r.data.success === true) {
            alert(r.data.msg)
          }
        })
      } else {
        this.category.push(this.editedItem) // ui상 테이블에 추가
        console.log(this.editedItem)
        //게시판 추가하기
        axios.post('http://35.200.100.93:8080/api/board/add/', this.editedItem)
        .then(r => {
          if(r.data.success === true) {
            alert(r.data.msg)
          }
        })
      }
      this.close()
    }
  },

  created() {
    const vm = this;

    //카테고리 게시판 GET
    axios.get('http://35.200.100.93:8080/api/board/list/2').then(response => {
      var result = response && response.data;

      vm.category = result;
    });
  },
}
</script>

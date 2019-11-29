<template>
  <div>
  <v-dialog v-model="dialog" max-width="700px">
  <v-card>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="editedItem.history" label="연혁"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="editedItem.name" label="이름"></v-text-field>
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
          <v-btn slot="activator" color="primary" dark class="mb-2">약력추가</v-btn>
</v-dialog>
  <v-data-table
    class="table"
    :headers="headers"
    :items="historys"
    :rows-per-page-items="[10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.history }}</td>
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">
        <v-btn icon class="mx-0" @click="editItem(props.item)">
          <v-icon color="teal">edit</v-icon>
        </v-btn>
        <v-btn icon class="mx-0" @click="deleteItem(props.item)">
          <v-icon color="pink">delete</v-icon>
        </v-btn>
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
</div>
</template>
<script>
import axios from 'axios'

export default {
  props: {
    language: Number,
  },
  data: () => ({
      dialog: false,
      editedIndex: -1,
      editedItem: {
        history: '',
        name: '',
      },
      defaultItem: {
        history: '',
        name: '',
      },
      tempItem: {
        history: '',
        name: '',
      },
      historys: [],
      headers: [
        {
          text: '연혁',
          value: 'history',
          align: 'left',
          sortable: true
        },
        {
          text: '데이터',
          value: 'name',
          align: 'left',
          sortable: true
        },
        {
          text: '액션',
          value: 'actions',
          align: 'left',
          sortable: false
        }
      ]
    }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '연혁정보 추가' : '연혁정보 수정'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  methods: {
    editItem (item) {
      this.editedIndex = this.historys.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.historys.indexOf(item)
      const historyNo = this.historys[index].id
      //회원 탈퇴 시키기
      confirm('해당 연혁을 삭제하시겠습니까?') && this.historys.splice(index, 1)
      && axios.delete('http://35.200.100.93:8080/api/intro/history/' + historyNo)
      .then(r => {
              if (r.data.status == 'Success') {
                alert(r.data.message);
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
      if (this.editedIndex > -1) {
        Object.assign(this.historys[this.editedIndex], this.editedItem) // ui상에서 변경
        //연혁 수정하기
        axios.put('http://35.200.100.93:8080/api/intro/history/update/' + this.language, this.editedItem)
        .then(r => {
          if(r.data.status === "Success") {
            alert(r.data.message)
          }
        })
      } else {
        this.historys.push(this.editedItem) // ui상 테이블에 추가
        //연혁 추가하기
        axios.post('http://35.200.100.93:8080/api/intro/history/add/' + this.language, this.editedItem)
        .then(r => {
          if(r.data.status === "Success") {
            alert(r.data.message)
          }
        })
      }
      this.close()
    }
  },

  created() {
    const vm = this;

    //연혁 정보 받아오기
    axios.get('http://35.200.100.93:8080/api/intro/history/' + this.language).then(response => {
      var result = response && response.data.list;

      vm.historys = result;
    });
  }
}
</script>

<style>
  .table {
    border-radius: 3px;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
  .table thead th {
    vertical-align: middle;
  }
  .table td, .table th {
    padding: .75rem;
    vertical-align: middle;
    border-top: none;
  }
</style>

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
            <v-text-field v-model="editedItem.activity" label="외부활동"></v-text-field>
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
          <v-btn slot="activator" color="primary" dark class="mb-2">외부활동 추가</v-btn>
</v-dialog>
  <v-data-table
    class="table"
    :headers="headers"
    :items="activitys"
    :rows-per-page-items="[10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.activity }}</td>
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
        activity: '',
        name: '',
      },
      defaultItem: {
        activity: '',
        name: '',
      },
      tempItem: {
        activity: '',
        name: '',
      },
      activitys: [],
      headers: [
        {
          text: '연혁',
          value: 'activity',
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
      return this.editedIndex === -1 ? '외부활동 추가' : '외부활동 수정'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  methods: {
    editItem (item) {
      this.editedIndex = this.activitys.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.activitys.indexOf(item)
      const activityNo = this.activitys[index].id
      //회원 탈퇴 시키기
      confirm('해당 외부활동을 삭제하시겠습니까?') && this.activitys.splice(index, 1)
      && axios.delete('http://35.200.100.93:8080/api/intro/activity/' + activityNo)
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
        Object.assign(this.activitys[this.editedIndex], this.editedItem) // ui상에서 변경
        //외부활동 수정하기
        axios.put('http://35.200.100.93:8080/api/intro/activity/update/' + this.language, this.editedItem)
        .then(r => {
          if(r.data.status === "Success") {
            alert(r.data.message)
          }
        })
      } else {
        this.activitys.push(this.editedItem) // ui상 테이블에 추가
        //외부활동 추가하기
        axios.post('http://35.200.100.93:8080/api/intro/activity/add/' + this.language, this.editedItem)
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

    //외부활동 정보 받아오기
    axios.get('http://35.200.100.93:8080/api/intro/activity/' + this.language).then(response => {
      var result = response && response.data.list;

      vm.activitys = result;
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

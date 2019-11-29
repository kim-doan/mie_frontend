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
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="editedItem.username" label="아이디"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="editedItem.name" label="이름"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="editedItem.email" label="이메일"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="editedItem.phone" label="휴대폰"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md5>
            <v-select
              v-validate="'required'"
              :items="typeItems"
              v-model="editedItem.type"
              :error-messages="errors.collect('select')"
              label="소속"
              data-vv-name="select"
              required
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-select
              v-validate="'required'"
              :items="rolesItems"
              v-model="editedItem.roles[0]"
              :error-messages="errors.collect('select')"
              label="권한"
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
</v-dialog>
  <v-data-table
    class="table"
    :headers="headers"
    :items="users"
    :rows-per-page-items="[10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">
        <v-avatar size="42">
          <img :src="randomAvatar()" alt="avatar">
        </v-avatar>
      </td>
      <td class="text-xs-left">{{ props.item.username }}</td>
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.phone }}</td>
      <td class="text-xs-left">{{ props.item.type }}</td>
      <td class="text-xs-left">{{ props.item.roles[0] }}</td>
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
      Lignes {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
    </template>
    <template slot="no-data">
      권한이 없거나 데이터가 존재하지 않습니다.
    </template>
  </v-data-table>
</div>
</template>

<script>
import axios from 'axios'
const avatars = [
  'https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
  'https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
  'https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
  'https://avataaars.io/?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
  'https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
  'https://avataaars.io/?'
];
export default {
  data: () => ({
      dialog: false,
      editedIndex: -1,
      editedItem: {
        username: '',
        name: '',
        email: '',
        phone: '',
        type: '',
        roles: ['']
      },
      defaultItem: {
        username: '',
        name: '',
        email: '',
        phone: '',
        type: '',
        roles: ['']
      },
      tempItem: {
        id: 0,
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        type: '',
        roles: ['']
      },
      rolesItems: [
        'ROLE_USER',
        'ROLE_ADMIN'
      ],
      typeItems: [
        '학부생',
        '대학원생(석사)',
        '대학원생(박사)',
        '졸업생(석사)',
        '졸업생(박사)',
        '지도교수',
        '교수'
      ],
      users: [],
      headers: [
        {
          value: 'Avatar',
          align: 'left',
          sortable: false
        },
        {
          text: '아이디',
          value: 'Username',
          align: 'left',
          sortable: true
        },
        {
          text: '이름',
          value: 'Name',
          align: 'left',
          sortable: true
        },
        {
          text: '이메일',
          value: 'Email',
          align: 'left',
          sortable: true
        },
        {
          text: '휴대폰',
          value: 'Phone',
          align: 'left',
          sortable: true
        },
        {
          text: '소속',
          value: 'type',
          align: 'left',
          sortable: true
        },
        {
          text: '권한',
          value: 'roles',
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
      return this.editedIndex === -1 ? '회원정보 추가' : '회원정보 수정'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  methods: {
    randomAvatar () {
      return avatars[Math.floor(Math.random() * avatars.length)];
    },
    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      //tempitem을 쓰는 이유 : 서버에 폼 전송시 정형화된 틀에 맞추기 위함
      this.tempItem.id = item.id;
      this.tempItem.username = item.username;
      this.tempItem.password = item.password;
      this.tempItem.name = item.name;
      this.tempItem.email = item.email;
      this.tempItem.phone = item.phone;
      this.tempItem.type = item.type;
      this.tempItem.roles = item.roles;
      this.editedItem = Object.assign({}, this.tempItem)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.users.indexOf(item)
      const userNo = this.users[index].id
      //회원 탈퇴 시키기
      confirm('해당 회원을 정말로 탈퇴시키시겠습니까?') && this.users.splice(index, 1)
      && axios.delete('http://35.200.100.93:8080/api/members/' + userNo)
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
        Object.assign(this.users[this.editedIndex], this.editedItem) // ui상에서 변경
        //회원 정보 수정하기
        axios.put('http://35.200.100.93:8080/api/members/update', this.editedItem)
        .then(r => {
          if(r.data.success === true) {
            alert(r.data.msg)
          }
        })
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    }
  },

  created() {
    const vm = this;

    //회원 정보 받아오기
    axios.get('http://35.200.100.93:8080/api/members').then(response => {
      var result = response && response.data;

      vm.users = result;
    });
  },
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

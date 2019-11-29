import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex);

export const store = new Vuex.Store( {
  state: {
    accessToken: null,
    token: localStorage.getItem('accessToken'),
    profile: {
      id : '',
      username : '',
      name : '',
      phone : '',
      type : '',
      email: '',
      roles: ''
    }
  },
  actions: {
    LOGIN ({commit}, form) {
      return axios.post('http://35.200.100.93:8080/api/members/login', form)
      .then(({data}) => {
        if(data.status == "Success") {
        commit('LOGIN', data)
        commit('getToken')
        axios.defaults.headers.common['X-AUTH-TOKEN'] = data.token;
        router.push('/')
        //회원정보
        store.dispatch('PROFILE', form.username)
      } else if(data.status == "Fail") {
        alert(data.errorMessage);
      }
      })
    },
    LOGOUT ({commit}) {
      //HTTP 요청 헤더값 제거
      axios.defaults.headers.common['X-AUTH-TOKEN'] = undefined
      commit('LOGOUT')
    },
    PROFILE({commit}, username) {
      axios.get('http://35.200.100.93:8080/api/members/profile/' + username)
      .then(({data}) => {
        commit('PROFILE', data)
      })
    },
  },
  mutations: {
    LOGIN (state, {token}) {
      state.accessToken = token
      //토큰을 로컬 스토리지에 저장
      localStorage.accessToken = token;
    },
    PROFILE (state, {id, username, email, name, phone, type, roles}) {
      state.profile.id = id;
      state.profile.username = username;
      state.profile.email = email;
      state.profile.name = name;
      state.profile.phone = phone;
      state.profile.type = type;
      state.profile.roles = roles;

      localStorage.username = username;
      localStorage.roles = roles;
    },
    LOGOUT (state) {
      //토큰 정보 삭제
      state.accessToken = null
      state.token = null
      delete localStorage.accessToken
      delete localStorage.username
      delete localStorage.roles
    },
    //토큰 저장
    getToken(state) {
      state.token = localStorage.getItem('accessToken')
    },
    //토큰 삭제
    delToken(state) {
      localStorage.removeItem('accessToken')
      state.token = null
    }
  }
});

const enhanceAccessToeken = () => {
  const {accessToken} = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['X-AUTH-TOKEN'] = accessToken;
}

const reloadProfile = () => {
  const {username} = localStorage
  if(!username) return
  store.dispatch('PROFILE', username)
}
enhanceAccessToeken()
reloadProfile()

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import { store } from '@/store'
import test from '@/components/test'
import index from '@/components/page/index'
import mainPage from '@/components/page/mainPage'
import login from '@/components/page/sign/login'
import register from '@/components/page/sign/register'
import labintro from '@/components/page/intro/labintro'
import professorintro from '@/components/page/intro/professorintro'
import phd from '@/components/page/member/phd'
import phm from '@/components/page/member/phm'
import doctor from '@/components/page/member/doctor'
import master from '@/components/page/member/master'
import board from '@/components/page/board/board'
import department from '@/components/page/lecturedata/department'
import graduate from '@/components/page/lecturedata/graduate'

import header from '@/components/header'

import admin from '@/admin/components/admin'
import dashboard from '@/admin/components/pages/dashboard'
import labintroEdit from '@/admin/components/pages/labintroEdit'
import professorintroEdit from '@/admin/components/pages/professorintroEdit'
import boardEdit from '@/admin/components/pages/boardEdit'
Vue.use(Router)

const requireAuth = () => (to, from, next) => {
  // 귀찮아서 일단 localstroate로 구현함 나중에 보안 추가해야함
  if(store.state.token !== null && localStorage.roles === 'ROLE_ADMIN') {
    return next();
  }
  alert('해당 페이지에 권한이 없습니다.\n[관리자 계정으로 로그인해주세요.]')
  next('/')
}

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/',
          name: mainPage,
          component: mainPage,
          meta: {
            title: '배재대학교 - MIE 연구실',
            breadcrumb: [{
              text: 'Welcome',
              bref: '/',
            }],
          }
        }
      ]
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/research',
      component: index,
      children: [
        {
          path: 'board',
          component: board,
        }
      ]
    },
    {
      path: '/member',
      component: index,
      children: [
        {
          path: 'register',
          component: register,
          meta: {
            title: '회원관리 - 회원가입',
            breadcrumb: [{
              text: '회원관리 - 회원가입',
              bref: '/register'
            }]
          }
        },
        {
          path : 'phd',
          component: phd,
          meta: {
            title: '회원관리 - 박사과정',
            breadcrumb: [{
              text: '회원관리 - 박사과정',
              bref: '/phd'
            }]
          }
        },
        {
          path : 'phm',
          component: phm,
          meta: {
            title: '회원관리 - 석사과정',
            breadcrumb: [{
              text: '회원관리 - 석사과정',
              bref: '/phm'
            }]
          }
        },
        {
          path : 'doctor',
          component: doctor,
          meta: {
            title: '회원관리 - 졸업생(박사)',
            breadcrumb: [{
              text: '회원관리 - 졸업생(박사)',
              bref: '/doctor'
            }]
          }
        },
        {
          path : 'master',
          component: master,
          meta: {
            title: '회원관리 - 졸업생(석사)',
            breadcrumb: [{
              text: '회원관리 - 졸업생(석사)',
              bref: '/master'
            }]
          }
        },
      ]
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: index,
      children: [{
        path: 'labintro',
        component: labintro
      },
      {
        path: 'professorintro',
        component: professorintro
      }
    ]
    },
    {
      path: '/lecturedata',
      name: 'lacturedata',
      component: index,
      children: [{
        path: 'department',
        component: department
      },
      {
        path: 'graduate',
        component: graduate
      }
    ]
  },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      beforeEnter: requireAuth(),
      children: [
        {
          path: 'dashboard',
          component: dashboard,
        },
        {
          path: 'labintroEdit',
          component: labintroEdit,
        },
        {
          path: 'professorintroEdit',
          component: professorintroEdit,
        },
        {
          path: 'boardEdit',
          component: boardEdit,
        }
      ]
    }
  ]
})

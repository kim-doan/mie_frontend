import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test'
import index from '@/components/page/index'
import intro from '@/components/page/intro'
import login from '@/components/page/login'
import labintro from '@/components/page/labintro'
import professorintro from '@/components/page/professorintro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: intro,
          component: intro,
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
      path: '/member',
      name: 'member',
      component: index,
      children: [
        {
          path: 'login',
          name: login,
          component: login,
          meta: {
            title: '회원관리 - 로그인',
            breadcrumb: [{
              text: '회원관리 - 로그인',
              bref: '/login'
            }],
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
        name: labintro,
        component: labintro
      },
      {
        path: 'professorintro',
        name: professorintro,
        component: professorintro
      }
    ]
    },
  ]
})

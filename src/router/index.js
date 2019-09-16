import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test'
import index from '@/components/page/index'
import main from '@/components/page/main'
import login from '@/components/page/sign/login'
import register from '@/components/page/sign/register'
import labintro from '@/components/page/intro/labintro'
import professorintro from '@/components/page/intro/professorintro'
import phd from '@/components/page/member/phd'
import phm from '@/components/page/member/phm'
import doctor from '@/components/page/member/doctor'
import master from '@/components/page/member/master'
import header from '@/components/header'

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
          name: main,
          component: main,
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
      path: '/member',
      name: 'member',
      component: index,
      children: [
        {
          path: 'register',
          name: register,
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
          name : phd,
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
          name : phm,
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
          name : doctor,
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
          name : master,
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

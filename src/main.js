// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import '@babel/polyfill'
import 'custom-event-polyfill'
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import VModal from 'vue-js-modal'
import VueLodash from 'vue-lodash'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import { store } from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTimes, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//admin page total components
import { setupComponents } from '@/admin/config/setup-components';

library.add(faGlobe)
library.add(faSearchPlus)
library.add(faSearchMinus)
library.add(faPencilAlt)
library.add(faTimes)
library.add(faFileAlt)
const options = { name: 'lodash' }

Vue.use(VueLodash, options) // options is optional
Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(VModal)

setupComponents(Vue);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

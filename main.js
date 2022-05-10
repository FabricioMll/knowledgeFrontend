import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!!!!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkZhYnLDrWNpbyBNZWxsbyIsImVtYWlsIjoiZmFicmljaW9AbG9jYWxob3N0LmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTIxOTAzODgsImV4cCI6MTY1MjQ0OTU4OH0.n5wfvN0tgmJvEPYyNS96Fj_UbtAeUGw26U5DvqQbxcs'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
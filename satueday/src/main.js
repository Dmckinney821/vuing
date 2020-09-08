import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://last-for-today.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'sjdf';
axios.defaults.headers.get['Accepts'] = 'application/json';


const resInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor')
  
  return config
})

const reqInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor')
  return res
})



axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

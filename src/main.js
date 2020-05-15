// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// var Main = {
//   data() {
//     return {
//       tableData: [{
//         date: '2016-05-03',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1518 弄'
//       }, {
//         date: '2016-05-02',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1518 弄'
//       }, {
//         date: '2016-05-04',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1518 弄'
//       }, {
//         date: '2016-05-01',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1518 弄'
//       }, {
//         date: '2016-05-08',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1518 弄'
//       }, {
//         date: '2016-05-06',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1518 弄'
//       }, {
//         date: '2016-05-07',
//         name: '王小虎',
//         address: '上海市普陀区金沙江路 1518 弄'
//       }]
//     }
//   }
// }
// var Ctor = Vue.extend(Main)
// new Ctor().$mount('#table_cont')

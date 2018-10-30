import Vue from 'vue'
import Router from 'vue-router'
import user_yuyue from '@/page/user/user_yuyue'
Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'user_yuyue',
            component: user_yuyue
    }
  ]
})

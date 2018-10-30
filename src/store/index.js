import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store({
    state: {
        is_deng_box: false,
        id_der: "", //0登录 1.绑定  2忘记密码 3.重置密码
        is_paixu:false
    }
})

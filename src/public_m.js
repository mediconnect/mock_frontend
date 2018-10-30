import router from './router'
export default {
    install(Vue, options) {

        Vue.prototype.ge_t = function (url, cn, xy) {
            this.$http.get(url + cn, {
                params: {}
            }).then((response) => {
                xy(response.data)
            }, (response) => {

            });
        }


        Vue.prototype.post = function (url, cn, xy) {
            console.log(cn);
            this.$http.post(url, cn).then((response) => {

                xy(response.data.data)

            }, (response) => {

            });
        }



        Vue.prototype.hf = function (url, cu) { //路由跳转

            router.push({
                path: "/" + url
            })


        }





    }

}

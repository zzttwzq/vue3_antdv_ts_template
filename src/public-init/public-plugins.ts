// 公共样式
// import '@/theme/index.less'

// moment 样式
import 'moment/locale/zh-cn'

// 配置路由
import router from '@/router'

// 配置ant-design-vue
import 'ant-design-vue/dist/antd.css';
import antd from 'ant-design-vue';

// 配置vuex 
import vuex from "@/store/index"

// 多语言
import i18n from '@/i18n/index'

// axios 网络请求

const PublicPlugins = {
    install: function(Vue) {
        Vue.use(router);
        Vue.use(antd);
        Vue.use(vuex);
        Vue.use(i18n);
    }
}
export default PublicPlugins
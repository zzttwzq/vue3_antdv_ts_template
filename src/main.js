import { createApp } from 'vue'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'; // or 'antd/dist/antd.less'
import antd from 'ant-design-vue';

// 配置vuex
import vuex from "@/store/index"

// 配置vuerouter

// 配置全局导入

// 请求axios

createApp(App)
    .use(antd)
    .use(vuex)
    .mount('#app')
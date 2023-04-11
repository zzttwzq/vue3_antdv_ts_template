import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

// import mock from '../mock/'

import 'ant-design-vue/dist/antd.css'; // or 'antd/dist/antd.less'
import antd from 'ant-design-vue';

// 配置vuex
import vuex from "@/store/index"

// 配置vuerouter
import router from '@/router/index'

// 配置全局导入

// 请求axios
// import axios from 'axios'
import FastTable from 'antdv-fast-table';
var app = createApp(App)
    .use(antd)
    .use(vuex)
    .use(router)
    .use(i18n)
    .use(FastTable)
    .mount('#app')

app.productionTip = false;
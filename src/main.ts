import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 配置ant-design-vue
import 'ant-design-vue/dist/antd.css';
import antd from 'ant-design-vue';
import FastTable from 'antdv-fast-table';

// 配置vuex
import vuex from "@/store/index"

// 多语言
import i18n from './i18n'

createApp(App)
.use(antd)
.use(router)
.use(vuex)
.use(i18n)
.use(FastTable)
.mount('#app')

//// 全局组件
import FastTable from 'antdv-fast-table';

const PublicComponents = {
    install: function(Vue) {
        Vue.use(FastTable);
    }
}
export default PublicComponents
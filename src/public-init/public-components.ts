//// 全局组件
// import AvatarList from '@/components/tool/AvatarList'
// import StandardTable from "@/components/table/StandardTable";

// import SimpleSearchView from "@/components/simple-search-view/index";
// import SearchView from "@/components/search-view/index";
// import CustomFormItem from "@/components/custom-form-item/index";
// import CustomFormList from "@/components/custom-form-list/index";
import FastTable from 'antdv-fast-table';

const PublicComponents = {
    install: function(Vue) {
        // Vue.component('AvatarList', AvatarList);
        // Vue.component('StandardTable', StandardTable);

        // Vue.component('SimpleSearchView', SimpleSearchView);
        // Vue.component('SearchView', SearchView);
        // Vue.component('CustomFormList', CustomFormList);
        // Vue.component('CustomFormItem', CustomFormItem);
        Vue.component('FastTable', FastTable);
    }
}
export default PublicComponents
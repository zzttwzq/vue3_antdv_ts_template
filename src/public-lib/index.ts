/// 公共组件
import PublicComponents from '@/public-lib/public-components'

// /// 功能工具类
// import PublicUtils from '@/public-injector/public-utils'

// /// 公共服务
// import PublicServices from '@/public-injector/public-services'

/// 第三方插件
import Plugins from '@/public-lib/public-plugins'

const PublicInjector = {
    install: function(Vue) {
        Vue.use(PublicComponents);
        // Vue.use(PublicUtils);
        // Vue.use(PublicServices);
        Vue.use(Plugins);
    }
}
export default PublicInjector
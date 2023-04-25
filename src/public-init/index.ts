/// 公共组件
import PublicComponents from '@/public-init/public-components'

/// 第三方插件
import Plugins from '@/public-init/public-plugins'

/// 初始化
// import PublicInitial from '@/public-init/public-init'

const PublicInit = {
    install: function(Vue) {
        Vue.use(PublicComponents);
        Vue.use(Plugins);
        // Vue.use(PublicInitial);
    }
}

export default PublicInit
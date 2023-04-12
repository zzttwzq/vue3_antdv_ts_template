/// 公共组件
import PublicComponents from '@/public-init/public-components'

/// 第三方插件
import Plugins from '@/public-init/public-plugins'

const PublicInit = {
    install: function(Vue) {
        Vue.use(PublicComponents);
        Vue.use(Plugins);
    }
}

export default PublicInit
import { permissionRoutes } from "@/router/permission_routers";
import { useStore } from "vuex";

const PublicInit = {
    install: function(Vue) {
        
        // 初始化路由
        const store = useStore();
        store.commit("routes/setRoutes", permissionRoutes);
    }
}
export default PublicInit;
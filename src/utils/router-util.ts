import { RouteRecordRaw, useRoute, useRouter } from "vue-router";

export function getRouters() {
    const router = useRouter();
    return router.getRoutes();
}
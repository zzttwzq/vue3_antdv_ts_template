import { useRouter } from "vue-router";

export function getCurrentRouters() {
    const router = useRouter();
    return router.getRoutes();
}

export function convertRouter(data) {
    return data;
}

export function filterRoutes(data) {
    return data;
}

export function getRouterList() {
    return [];
}

export const asyncRoutes = [];
export const constantRoutes = [];

// export function get
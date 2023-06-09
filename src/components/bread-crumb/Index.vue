<!--
 * @Description: 面包屑组件
 * @Author: ZY
 * @Date: 2020-12-22 11:02:14
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-28 16:28:40
-->
<template>
  <a-breadcrumb class="app-breadcrumb" separator-class="a-icon-arrow-right">
    <transition-group name="breadcrumb">
      <a-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span
          v-if="item.redirect === 'noredirect' || index === breadcrumbs.length - 1"
          class="no-redirect"
          >{{ t("" + item.meta.title) }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ t("" + item.meta.title) }}</a>
      </a-breadcrumb-item>
    </transition-group>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from "vue";
import { useRoute, RouteLocationMatched } from "vue-router";
import { compile } from "path-to-regexp";
import { useI18n } from "vue-i18n";
import router from "@/router";

export default defineComponent({
  setup() {
    const currentRoute = useRoute();
    const pathCompile = (path: string) => {
      const { params } = currentRoute;
      const toPath = compile(path);
      return toPath(params);
    };

    const { t } = useI18n();
    const state = reactive({
      breadcrumbs: [] as Array<RouteLocationMatched>,
      getBreadcrumb: () => {
        let matched = currentRoute.matched.filter((item) => item.meta && item.meta.title);
        const frist = matched[0];
        if (!state.isDashboard(frist)) {
          matched = [{ path: "/", meta: { title: "" } } as any].concat(matched);
        }
        state.breadcrumbs = matched.filter((item) => {
          return item.meta && item.meta.title && item.meta.breadcrumb !== false;
        });
      },
      isDashboard(route: RouteLocationMatched) {
        const name = route && route.name;
        if (!name) {
          return false;
        }
        return (
          name.toString().trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
        );
      },
      handleLink(item: any) {
        const { redirect, path } = item;
        router.push(path);
      },
    });

    watch(
      () => currentRoute.path,
      (path) => {
        if (path.startsWith("/redirect/")) {
          return;
        }
        state.getBreadcrumb();
      }
    );

    onBeforeMount(() => {
      state.getBreadcrumb();
    });

    return {
      t,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.a-breadcrumb__inner,
.a-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>

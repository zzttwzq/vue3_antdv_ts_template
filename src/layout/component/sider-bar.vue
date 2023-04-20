<template>
  <div>
    <a-layout>
      <!-- <a-layout-sider v-if="roles.length" class="web-side" theme="light" :width="240"> -->
      <SidebarLogo v-if="showLogo" :collapse="isCollapse" />
      <a-menu
        class="menu"
        mode="inline"
        theme="light"
        :openKeys="openKeys"
        :selected-keys="menuActive"
        @select="select"
      >
        <template v-for="route in routerList">
          <template v-if="route.children && route.children.length">
            <a-sub-menu
              class="nav-item"
              :menus="route"
              :parent-path="route.path"
              :key="route.path"
              :title="route.meta.title"
            >
              <template :key="route2.path" v-for="route2 in route.children">
                <router-link :to="route2.path">
                  <a-menu-item :key="route2.path">
                    <span style="color: #333">{{ route2.meta.title }}</span>
                  </a-menu-item>
                </router-link>
              </template>
            </a-sub-menu>
          </template>
          <template v-else>
            <router-link :key="route.path" :to="route.path">
              <a-menu-item :key="route.path">
                <span style="color: #333">{{ route.meta.title }}</span>
              </a-menu-item>
            </router-link>
          </template>
        </template>
      </a-menu>
      <!-- </a-layout-sider> -->
    </a-layout>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { getCurrentRouters } from "@/utils/router-util";
import { useStore } from "vuex";
import { mapState, mapMutations, mapGetters } from "vuex";
import { permissionRoutes } from "@/router/permission_routers";
import SidebarLogo from "./sider-bar-logo.vue";

export default defineComponent({
  components: {
    SidebarLogo,
  },
  setup() {
    const store = useStore();

    // const routes = computed(() => {
    //   return store.state.routes.routes;
    // });

    // 数据和事件
    let dataMap = reactive({
      showLogo: true,
      isCollapse: false,
      roles: ["1"],
      openKeys: ["/ttt"],
      menuActive: ["dashboard"],
      activeName: "directly",
      handleClick: () => {
        console.log("im being click");
      },
      select: ({ item, key, selectedKeys }) => {
        dataMap.menuActive = [key];
      },
    });

    const routerList = computed(() => {
      console.log("changerouters: ", store.state.routes.routes);
      return store.state.routes.routes;
    });

    return { routerList, ...toRefs(dataMap) };
  },
});
</script>

<style lang="less" scoped>
.menu {
  // background: #fff;
}

.nav-item {
  // background: #fff;
  // color: aqua;
}

.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: none;
}
</style>

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
import { useStore } from "vuex";
import { permissionRoutes } from "@/router/permission_routers";
import SidebarLogo from "./sider-bar-logo.vue";

export default defineComponent({
  components: {
    SidebarLogo,
  },
  setup() {
    const store = useStore();
    const defaultMenu = "dashboard";
    store.commit("routes/setRoutes", permissionRoutes);
    store.commit("routes/setCurrent", defaultMenu);
    store.commit("routes/setHistoryItem", defaultMenu);

    // 数据和事件
    let dataMap = reactive({
      showLogo: true,
      isCollapse: false,
      roles: ["1"],
      openKeys: ["/ttt"],
      activeName: "directly",
      handleClick: () => {
        console.log("im being click");
      },
      select: ({ item, key, selectedKeys }) => {
        console.log(">>>change item", item);
        store.commit("routes/setCurrent", key);
        store.commit("routes/setHistoryItem", key);
        // dataMap.menuActive = [key];
      },
    });

    const menuActive = computed(() => {
      let s = [store.state.routes.current];
      console.log('??? seleted', s);
      return s;
    });

    const routerList = computed(() => {
      console.log("changerouters: ", store.state.routes.routes);
      return store.state.routes.routes;
    });

    return { menuActive, routerList, ...toRefs(dataMap) };
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

/deep/ .ant-menu-item::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-right: 3px solid red !important;
  transform: scaleY(0.0001);
  opacity: 0;
  transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
    opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  content: "";
}
</style>

<template>
  <div>
    <a-layout>
      <a-layout-sider v-if="roles.length" class="web-side" theme="light" :width="240">
        <a-menu
          class="menu"
          mode="inline"
          theme="light"
          v-model:openKeys="openKeys"
          :selected-keys="menuActive"
        >
          <template v-for="route in filterRoutes">
            <template v-if="route.children && route.children.length">
              <app-sub-menu
                class="nav-item"
                :menus="route"
                :parent-path="route.path"
                :key="route.path"
              />
            </template>
            <template v-else>
              <router-link
                :key="route.path"
                :to="route.path"
                custom
                v-slot="{ navigate }"
              >
                <a-menu-item>
                  <p @click.stop="navigate">{{ route.meta.title }}</p>
                </a-menu-item>
              </router-link>
            </template>
          </template>
        </a-menu>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { getRouters } from "@/utils/router-util";

export default defineComponent({
  setup() {
    // 数据和事件
    const dataMap = reactive({
      roles: ["1"],
      openKeys: [],
      menuActive: [],
      filterRoutes: getRouters(),
      activeName: "directly",
      handleClick: () => {
        console.log("im being click");
      },
    });

    console.log("sider...");

    return { ...toRefs(dataMap) };
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
</style>

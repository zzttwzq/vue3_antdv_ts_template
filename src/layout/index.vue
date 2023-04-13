<template>
  <a-layout class="app-container">
    <SiderBar class="sidebar-container" />
    <div class="main-container">
      <NavBar />
      <TabBar />
      <AppManager />
    </div>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import SiderBar from "./component/sider-bar.vue";
import AppManager from "./component/app-manager.vue";
import NavBar from "./component/nav-bar.vue";
import TabBar from "./component/tab-bar.vue";

export default defineComponent({
  components: {
    SiderBar,
    AppManager,
    NavBar,
    TabBar,
  },
  setup() {
    // 数据和事件
    const dataMap = reactive({
      activeName: "directly",
      handleClick: () => {
        console.log("im being click");
      },
    });

    //
    onBeforeMount(() => {
      console.log("layout im onBeforeMount");
    });

    return { ...toRefs(dataMap) };
  },
});
</script>
<style lang="less" scoped>
@sideBarWidth: 260px;

.sidebar-container {
  transition: width 0.28s;
  width: @sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: #f0f2f5 !important;
}

.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: @sideBarWidth;
  position: relative;
}
</style>

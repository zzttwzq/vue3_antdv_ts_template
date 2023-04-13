<template>
  <div class="container">
    <a-layout>
      <router-view></router-view>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import { RouteRecordRaw } from "vue-router";

export default defineComponent({
  setup() {
    // 数据和事件
    const dataMap = reactive({
      routers: [],
      activeName: "directly",
      handleClick: () => {
        console.log("im being click");
      },
    });

    console.log("appmanager...");

    return { ...toRefs(dataMap) };
  },
});
</script>

<style lang="less" scoped>
.app-container {
  display: flex;
  flex-direction: row;
}
</style>

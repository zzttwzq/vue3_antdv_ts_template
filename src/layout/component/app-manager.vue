<template>
  <div class="container">
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

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

    const cachedViews = () => {
      return [];
    };
    const key = () => {
      return "";
    };

    console.log("appmanager...");

    return {
      cachedViews,
      key,
      ...toRefs(dataMap),
    };
  },
});
</script>

<style lang="less" scoped>
.app-container {
  display: flex;
  flex-direction: row;
}

.app-main{
  width: 100%;
  height: 100%;
  background: #fff;
  padding-left: 20px;
  padding-top: 20px;
}
</style>

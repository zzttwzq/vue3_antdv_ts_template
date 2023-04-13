<template>
  <div class="container"></div>
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

    console.log("sider...");

    return { ...toRefs(dataMap) };
  },
});
</script>

<style lang="less" scoped>
.container {
  width: 100px;
  height: 20px;
  background: red;
}
</style>

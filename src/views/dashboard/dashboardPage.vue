<template>
  <div @click="handleClick" class="app-container">dashboardPage {{ $t("test") }}</div>
</template>

<script>
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";

export default defineComponent({
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
      console.log("dashboardPage im onBeforeMount");
    })

    return { ...toRefs(dataMap) };
  },
});
</script>

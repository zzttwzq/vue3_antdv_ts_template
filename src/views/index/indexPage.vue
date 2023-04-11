<template>
  <div @click="handleClick" class="app-container">indexPage {{ $t("test") }}</div>
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
      console.log("indexPage im onBeforeMount");
    })

    return { ...toRefs(dataMap) };
  },
});
</script>

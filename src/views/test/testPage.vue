<template>
  <div @click="handleClick" class="container">testPage {{ $t("test") }}</div>
</template>

<script lang="ts">
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
        console.log("testPage im onBeforeMount");
      })

      return { ...toRefs(dataMap) };
    },
  });
</script>

<style lang="less" scoped>
  .container {}
</style>
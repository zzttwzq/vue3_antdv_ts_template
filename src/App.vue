<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    // 数据和事件
    const dataMap = reactive({});

    console.log(">>> ", process.env.NODE_ENV);

    //
    onBeforeMount(() => {
      console.log("appPage im onBeforeMount");
    });

    return { ...toRefs(dataMap) };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

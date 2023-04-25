<template>
  <div class="container">
    <a-tabs
      v-model:activeKey="activeKey"
      hide-add
      type="editable-card"
      @tabClick="tabClick"
      @edit="onEdit"
    >
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.key"
        :tab="pane.title"
        :closable="pane.closable"
      >
        {{ pane.content }}
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    // 数据和事件
    const dataMap = reactive({
      onEdit: (e) => {
        console.log(">>> eee", e);
        let h = store.state.routes.history;
        let current = store.state.routes.current;

        let index = 0;
        let obj = h.find((i) => {
          index++;
          return i.key == e;
        });

        h.splice(index - 1, 1);

        if (current == obj.key && h.length > 0) {
          store.commit("routes/setCurrent", h[h.length - 1].key);
        }
        if (current == obj.key && h.length == 0) {
          const defaultMenu = "dashboard";
          store.commit("routes/setCurrent", defaultMenu);
          store.commit("routes/setHistoryItem", defaultMenu);
        }
      },
      tabClick: (e) => {
        store.commit("routes/setCurrent", e);
        router.push(e);
      },
    });

    const activeKey = computed(() => {
      return store.state.routes.current;
    });
    const panes = computed(() => {
      return store.state.routes.history;
    });

    return { activeKey, panes, ...toRefs(dataMap) };
  },
});
</script>

<style lang="less" scoped>
.container {
  padding-top: 20px;
  width: 100%;
  // background: red;
}
</style>

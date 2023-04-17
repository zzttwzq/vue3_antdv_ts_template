<template>
  <div @click="handleClick" class="app-container">
    <FastTable
      title="字段管理"
      :columns="columns"
      :searchList="searchList"
      :formList="formList"
      :listRequest="listRequest"
      :addRequest="addRequest"
      :editRequest="editRequest"
      :editDetailRequest="editDetailRequest"
      :deleteRequest="deleteRequest"
      :handelListData="handelListData"
      :handelWillEdit="handelWillEdit"
      :handelWillAdd="handelWillAdd"
      :handelModifyData="handelModifyData"
      :handelAddResult="handelAddResult"
      :handelEditResult="handelEditResult"
      :handelDeleteResult="handelDeleteResult"
      
    >
      <template v-slot:buttons="data">
        <a @click="yesRelevance(data.record)"> 账号关联 </a>
      </template>
    </FastTable>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    // 数据和事件
    const dataMap = reactive({
      activeName: "directly",
      columns: [
        {
          title: "字段名称",
          key: "nameCn",
          dataIndex: "nameCn",
        },
      ],
      searchList: [],
      formList: [
        {
          name: "字段名称",
          type: "text", // text, number, numberRange, select, date, datetime, dateRange
          decorator: [
            "nameCn",
            {
              rules: [{ required: true, message: "请输入字段名称" }],
            },
          ],
        },
      ],
      listRequest: async () => {
        console.log(">>> listRequest");

        // sleep(1);

        return { data: [{nameCn: 'asdf'}] };
      },
      addRequest: () => {
        console.log(">>> addRequest");
      },
      editRequest: () => {
        console.log(">>> editRequest");
      },
      editDetailRequest: () => {
        console.log(">>> editDetailRequest");
      },
      deleteRequest: () => {
        console.log(">>> deleteRequest");
      },
      handelListData: () => {
        console.log(">>> handelListData");
      },
      handelWillEdit: () => {
        console.log(">>> handelWillEdit");
      },
      handelWillAdd: () => {
        console.log(">>> handelWillAdd");
      },
      handelModifyData: () => {
        console.log("im being click");
      },
      handelAddResult: () => {
        console.log("im being click");
      },
      handelEditResult: () => {
        console.log("im being click");
      },
      handelDeleteResult: () => {
        console.log("im being click");
      },
    });

    //
    onBeforeMount(() => {
      console.log("tablePage im onBeforeMount");
    });

    return { ...toRefs(dataMap) };
  },
});
</script>

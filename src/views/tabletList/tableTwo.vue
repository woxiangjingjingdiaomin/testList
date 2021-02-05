<template>
  <div>
    <a-table
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :columns="columns"
      :data-source="dataSource"
    />
  </div>
</template>
<script>
import { tableDataOne } from "./modules/tabletOne.js";

const columns = [
  {
    title: "序号",
    width: 150,
    customRender: (text, record, index) => index + 1,
  },
  {
    title: "点位",
    dataIndex: "alias",
    width: 150,
  },
  {
    title: "二维码",
    dataIndex: "",
    width: 150,
  },
  {
    title: "监控对象",
    dataIndex: "hostsAlias",
    width: 150,
  },
  {
    title: "监控实体",
    dataIndex: "metricsAlias",
    width: 150,
  },
  {
    title: "检查项",
    dataIndex: "detailsAlias",
    width: 150,
  },
  {
    title: "检查结果",
    dataIndex: "nameSeven",
    width: 150,
  },
  {
    title: "告警级别",
    dataIndex: "",
    width: 150,
  },
  {
    title: "操作",
    dataIndex: "",
    width: 150,
  },
];

const dataSource = [];
export default {
  data() {
    return {
      dataSource,
      columns,
      selectedRowKeys: [],
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  mounted() {
    this.setTableOne();
    this.renderList();
  },
  methods: {
    setTableOne() {
      const { content } = tableDataOne;

      this.tabPanes = content.map((item) => {
        return {
          alias: item.alias,
          id: item.zoneId,
        };
      });
    },

    renderList() {
      const { content } = tableDataOne;
      const arrListCount = [];
      content[0].checkpoints.forEach((checkpoin) => {
        checkpoin.hosts.forEach((hostsList) => {
          hostsList.endpoints.forEach((metricsList) => {
            metricsList.metrics.forEach((details) => {
              arrListCount.push({
                alias: checkpoin.alias,
                checkpointId: checkpoin.checkpointId,
                children: [
                  {
                    hostsAlias: hostsList.alias,
                    hostsId: hostsList.hostId,
                    metricsAlias:
                      metricsList.alias === "" ? "暂无数据" : metricsList.alias,
                    metricsId: metricsList.endpointId,
                    detailsAlias: details.alias,
                    detailsId: details.endpointId,
                  },
                ],
              });
            });
          });
        });
      });
      this.dataSource = arrListCount;
    },

    onSelectChange(selectedRowKeys, selectedRows) {
      console.log("selectedRowKeys changed: ", selectedRows);
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>

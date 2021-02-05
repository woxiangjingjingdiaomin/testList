<template>
  <div>
    <a-tabs @change="callback">
      <a-tab-pane v-for="{ alias, id } in tabPanes" :key="id" :tab="alias">
        <a-table :columns="columns" :data-source="dataSource" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { tableDataOne } from "./modules/tabletOne.js";
export default {
  data() {
    return {
      tabPanes: null,
      dataSource: [],
      columns: Object.freeze([
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
      ]),
    };
  },

  mounted() {
    this.setTableOne();
    this.renderList();
  },

  methods: {
    callback(key) {
      console.log(key);
    },
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
      //   console.log("11", content[0]);

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

      console.log("a", arrListCount);
      this.dataSource = arrListCount;
    },
  },
};
</script>

<style >
</style>
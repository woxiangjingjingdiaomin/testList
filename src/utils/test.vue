<template>
  <!-- :pagination="false" -->
  <div>
    <a-table :columns="columns" :data-source="dataLIstone" bordered>
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
    </a-table>
  </div>
</template>

<script>
import { dataLIst } from "../utils/huash";
export default {
  data() {
    return {
      dataLIstone: [],
      columns: [],
    };
  },
  mounted() {
    this.getdataLIst();
  },
  computed: {
    colSpanMap: function () {
      return this.getColSpanByKeys(this.dataLIstone);
    },
  },
  methods: {
    getdataLIst() {
      let temp = dataLIst;
      const tempList = this.setForLoop(temp);
      // this.dataLIstone = tempList.slice(0, 3);
      this.dataLIstone = tempList;
      console.log(this.dataLIstone);
    },

    setForLoop(zone) {
      const checkpointsList = [];
      zone.content[0].checkpoints.forEach((checkpointId) => {
        checkpointId.hosts.forEach((hostId) => {
          hostId.endpoints.forEach((endpointId) => {
            endpointId.metrics.forEach((foodVal) => {
              checkpointsList.push({
                checkpointId: checkpointId.checkpointId,
                hostId: hostId.hostId,
                endpointId: endpointId.endpointId,
                answerId: foodVal.answerId,
                metricId: foodVal.metricId,
              });
            });
          });
        });
      });

      return checkpointsList;
    },

    getColSpanByKeys(dataSource) {
      const colSpanMap = new Map();
      if (dataSource.length > 0) {
        Object.keys(dataSource[0]).forEach((key) => {
          colSpanMap.set(key, this.getColSpan(dataSource, key));
        });
      }

      return colSpanMap;
    },

    getColSpan(data, key) {
      const colSpan = [1];
      for (let i = 1, j = 2; i < data.length; i++, j++) {
        const prev = data[i - 1][key];
        const curr = data[i][key];

        if (prev == curr) {
          colSpan[i - 1] = 0;
        } else {
          j = 1;
        }
        colSpan.push(j);
      }

      for (let i = colSpan.length - 1, j = colSpan.length - 1; i >= 0; i--) {
        if (colSpan[i - 1] != 0) {
          [colSpan[j], colSpan[i]] = [colSpan[i], colSpan[j]];
          if (i != 0) {
            j = i - 1;
          }
        }
      }

      return colSpan;
    },
  },

  created() {
    this.columns = [
      {
        title: "序号",
        width: 150,
        dataIndex: "id",
        customRender: (text, record, index) => index + 1,
      },
      {
        title: "点位",
        dataIndex: "checkpointId",
        width: 200,
        customRender: (text, record, index) => {
          const colSpanList = this.colSpanMap.get("checkpointId");
          return {
            children: text,
            attrs: { rowSpan: colSpanList[index] },
          };
        },
      },
      {
        title: "二维码",
        dataIndex: "",
        width: 150,
        // customRender: (text, record) => <a-button type="link">下载</a-button>,
      },
      {
        title: "监控对象",
        dataIndex: "hostId",
        width: 150,
        customRender: (text, record, index) => {
          const colSpanList = this.colSpanMap.get("hostId");
          return {
            children: text,
            attrs: { rowSpan: colSpanList[index] },
          };
        },
      },
      {
        title: "监控实体",
        dataIndex: "endpointId",
        width: 150,
        customRender: (text, record, index) => {
          const colSpanList = this.colSpanMap.get("endpointId");
          return {
            children: text,
            attrs: { rowSpan: colSpanList[index] },
          };
        },
      },
      {
        title: "检查项",
        dataIndex: "metricId",
        width: 150,
        customRender: (text, record, index) => {
          const colSpanList = this.colSpanMap.get("metricId");
          return {
            children: text,
            attrs: { rowSpan: colSpanList[index] },
          };
        },
      },
    ];
  },
};
</script>

<style lang="scss" scoped>
</style>
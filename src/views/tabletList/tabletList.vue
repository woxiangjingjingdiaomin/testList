<template>
  <div>
    <a-table :columns="columns" :data-source="dataSourceList">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
  </div>
</template>

<script>
import { dataListOne } from "./modules/data.js";
export default {
  created() {
    this.columns = [
      {
        title: "checkpointAlias",
        dataIndex: "checkpointAlias",
        key: "checkpointAlias",
        width: 280,
        customRender: (text, record) => {
          const colSpanList = this.findTarget(record, "checkpointAlias");
          console.log("text", colSpanList);
          return {
            children: colSpanList,
          };
        },
      },
      {
        title: "hostAlias",
        dataIndex: "hostAlias",
        key: "hostAlias",
        width: 280,
      },
      {
        title: "metricAlias",
        dataIndex: "metricAlias",
        key: "metricAlias",
        width: 280,
      },
    ];
  },

  data() {
    return {
      dataSourceList: [],
      columns: [],
    };
  },

  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      const dataSource = dataListOne.data.t_patrol_task_status[0].content;

      console.log("11", dataSource);
      this.dataSourceList = dataSource;

      // const checkpointAlias = this.findTarget(dataSource, "checkpointAlias");
      // const hostAlias = this.findTarget(dataSource, "hostAlias");
      // const metricAlias = this.findTarget(dataSource, "metricAlias");

      // let abc = [];

      // abc.push({
      //   checkpointAlias: checkpointAlias,
      //   hostAlias: hostAlias,
      //   metricAlias: metricAlias,
      // });

      // this.dataSourceList = abc;
      // console.log("11", abc);
    },

    findTarget(collection, target, result = []) {
      if (collection instanceof Array) {
        collection.forEach((item) => {
          if (item instanceof Object) {
            this.findTarget(item, target, result);
          }
        });
      } else {
        for (var key in collection) {
          if (key === target) {
            result.push(collection[key]);
          } else {
            if (collection[key] instanceof Object) {
              this.findTarget(collection[key], target, result);
            }
          }
        }
      }
      return result;
    },
  },
};
</script>

<style >
</style>
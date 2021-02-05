<template>
  <div>
    <button @click="page(0)">1</button>
    <button @click="page(1)">2</button>
    <button @click="page(2)">3</button>
    <div class="tabletitle">
      <div class="textcheck"></div>
      <div class="titleHeader">点位</div>
      <div class="titleHeader">二维码</div>
      <div class="titleHeader">监控对象</div>
      <div class="titleHeader">监控实体</div>
      <div class="titleHeader">检查项</div>
      <div class="titleHeader">操作</div>
    </div>
    <div
      class="flex"
      v-for="{ checkpointId, alias: checkpointAlias, hosts } in divcheckpoints"
      :key="checkpointId"
    >
      <div class="textcheck">
        <a-checkbox
          @change="onChange(true, checkpointId, checkpointAlias)"
        ></a-checkbox>
      </div>
      <div class="text">
        <span>{{ checkpointAlias }}</span>
      </div>

      <div class="textClick">
        <span @click="info(checkpointAlias)">下载</span>
      </div>

      <div class="flex-1">
        <div
          class="flex"
          v-for="{ hostId, alias: hostAlias, endpoints } in hosts"
          :key="hostId"
        >
          <div class="text">{{ hostAlias }}</div>
          <div class="flex-2">
            <div
              class="flex"
              v-for="{ endpointId, alias: endpointAlias, metrics } in endpoints"
              :key="endpointId"
            >
              <div class="text">
                <span>{{ endpointAlias }}</span>
              </div>
              <div class="flex-1">
                <div
                  class="flex"
                  v-for="{ metricId, alias: metricAlias } in metrics"
                  :key="metricId"
                >
                  <div class="text">
                    <span>{{ metricAlias }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="textClick">
            <span class="cledit" @click="info(hostAlias)">编辑</span>
            <span @click="info(hostAlias)">删除</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tableDataOne } from "./modules/tabletOne.js";
export default {
  data() {
    return {
      divcheckpoints: [],
    };
  },
  mounted() {
    this.getListTable();
  },
  methods: {
    getListTable() {
      const { content } = tableDataOne;
      this.divcheckpoints = content[0].checkpoints;
      console.log("azhe", this.divcheckpoints);
    },
    info(alias) {
      console.log(`当前操作元素：${alias}`);
    },
    page(num) {
      this.divcheckpoints = tableDataOne.content[0].checkpoints.slice(
        num,
        num + 10
      );
    },
    onChange(e, el, ar) {
      //
      console.log(`checked333== = ${e}`);
      console.log(`checked333 = ${el}`);
      console.log(`checked333 = ${ar}`);
    },
  },
};
</script>

<style>
.flex {
  display: flex;
  width: 100%;
  flex-direction: row;
}
.textcheck {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: 1px solid grey;
}
.text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  border: 1px solid grey;
}
.textClick {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  border: 1px solid grey;
  cursor: pointer;
  color: rgb(37, 99, 192);
}
.flex-1 {
  flex: 1;
}
.cledit {
  margin-right: 6px;
}

.tabletitle {
  display: flex;
}
.titleHeader {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  border: 1px solid grey;
  height: 40px;
  background-color: #ccc;
}
</style>
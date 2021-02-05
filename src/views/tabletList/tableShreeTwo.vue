<template>
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane
        v-for="(item, index) in dataListTitle"
        :key="index"
        :tab="item.alias"
      >
        <div class="box">
          <div class="tabletitle">
            <div class="titleHeader">点位</div>
            <div class="titleHeader">二维码</div>
            <div class="titleHeader">监控对象</div>
            <div class="titleHeader">监控实体</div>
            <div class="titleHeader">检查项</div>
            <div class="titleHeader">操作</div>
          </div>
          <div>
            <div
              class="tableCount"
              v-for="{
                checkpointId,
                alias: checkpointAlias,
                hosts,
              } in divcheckpoints"
              :key="checkpointId"
            >
              <div class="countDiv1">
                <span>{{ checkpointAlias }}</span>
              </div>
              <div class="countDiv1">
                <span>下载</span>
              </div>

              <div class="countDiv2">
                <div
                  class="countDiv3"
                  v-for="(
                    { hostId, alias: hostAlias, endpoints }, index
                  ) in hosts"
                  :key="hostId"
                >
                  <div class="countDiv3-div">{{ hostAlias }}</div>
                  <div class="countDiv4">
                    <div
                      class="countDiv5"
                      v-for="{
                        endpointId,
                        alias: endpointAlias,
                        metrics,
                      } in endpoints"
                      :key="endpointId"
                    >
                      <div class="countDiv5-div">
                        <span>{{ endpointAlias }}</span>
                      </div>
                      <div class="countDiv5-div">
                        <div
                          class="countDiv5Div-metricId"
                          v-for="{ metricId, alias: metricAlias } in metrics"
                          :key="metricId"
                        >
                          <div>
                            <span>{{ metricAlias }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="textClick">
                    <span class="cledit" @click="info(hostAlias)">编辑</span>
                    <span @click="() => hosts.splice(index, 1)">删除</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { tableDataOne } from "./modules/tabletOne.js";
export default {
  data() {
    return {
      dataListTitle: [],
      divcheckpoints: [],
    };
  },
  mounted() {
    this.getListTable();
  },
  methods: {
    getListTable() {
      const { content } = tableDataOne;
      this.dataListTitle = content;
      this.divcheckpoints = content[0].checkpoints;
    },
    callback(key) {
      console.log(key);
    },
  },
};
</script>

<style>
.box {
  width: 100%;
  border: 0.4px solid gray;
}
.tabletitle {
  display: flex;
  width: 100%;
}
.titleHeader {
  display: flex;
  flex: auto;
  width: 100%;
  height: 40px;
  background-color: #ccc;
  line-height: 40px;
  justify-content: center;
  border: 1px solid grey;
}

.tableCount {
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid grey;
  text-align: center;
}
.countDiv1 {
  display: flex;
  flex-direction: row;
  width: 16.7%;
  justify-content: center;
  border-right: 1px solid gray;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.countDiv2 {
  flex: 1;
}
.countDiv3 {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
}
.countDiv4 {
  flex: 1;
}
.countDiv5 {
  display: flex;
  flex-direction: row;
}
.textClick {
  width: 25%;
  color: rgb(37, 99, 192);
  cursor: pointer;
}
.countDiv3-div {
  width: 25%;
  border-right: 1px solid gray;
  align-items: center;
  justify-content: center;
  display: flex;

  /* border-bottom: 1px solid gray; */
}

.countDiv5-div {
  width: 50%;
  border-right: 1px solid gray;
  align-items: center;
  justify-content: center;
}
.countDiv5Div-metricId {
  border-bottom: 1px solid gray;
}

.cledit {
  margin-right: 6px;
}
</style>
<template>
  <div>
    <div class="itemsg">
      <button class="itemsgList" @click="addShareLink">点击添加</button>
      <el-input
        v-model.trim="data.link"
        placeholder="输入内容"
        size="mini"
        clearable
      />
    </div>

    <!-- 动态添加参数 -->
    <div class="divTwo" v-for="(item, index) in shareParams" :key="index">
      <div class="delStyle" @click="removeParam(index)">点击删除</div>
      <div>
        <div>
          <el-input
            v-model.trim="todoObj[item.value]"
            placeholder="输入内容"
            size="mini"
            clearable
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        link: "",
      },
      index: 0,
      shareParams: [],
      todoObj: {},
    };
  },
  methods: {
    // 添加分享链接参数
    addShareLink() {
      this.index += 1;
      this.shareParams.push({
        id: this.index,
        value: `link===${this.index}`,
      });
    },
    // 删除分享参数
    removeParam(index) {
      this.shareParams.splice(index, 1);
    },
  },
};
</script>

<style>
.itemsg {
  width: 400px;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
}
.itemsgList {
  width: 100px;
  margin-right: 10px;
}

.delStyle {
  width: 80px;
  height: 40px;
  border: 1px solid #ccc;
  line-height: 40px;
  margin-bottom: 6px;
  padding: 0 4px 0 4px;
  text-align: center;
  background-color: antiquewhite;
}

.divTwo {
  width: 600px;
  margin-top: 50px;
  margin-left: 40px;
}
</style>
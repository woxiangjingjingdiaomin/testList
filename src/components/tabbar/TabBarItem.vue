<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot></slot>
    <slot></slot>
    <!-- 
    <div class="tab-bar-item">
      <img src="../../assets/img/首页.png" alt="" />
        
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/类目 品类 分类 类别.2.png" alt="" />
      <div>分类</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/购物车空.png" alt="" />
      <div>购物车</div>
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/我的.png" alt="" />
      <div>我的</div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  computed: {
    // isActive() {
    // },
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      // console.log(this.path);
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
<template>
  <div>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="Note">
        <a-input
          v-decorator="[
            'note',
            { rules: [{ required: true, message: 'Please input your note!' }] },
          ]"
        />
      </a-form-item>
    </a-form>

    <div>===============</div>
    <button @click="addShareLink">添加表格</button>
    <div v-for="(todo, index) in shareParams" :key="index">
      <a-form
        :form="form"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSubmit"
      >
        <a-form-item label="Note">
          <a-input
            v-decorator="[
              'note' + index,
              {
                rules: [{ required: true, message: 'Please input your note!' }],
              },
            ]"
          />
        </a-form-item>
      </a-form>

      <div @click="removeParam(index)">移除表格</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      indexOne: 0,
      shareParams: [],
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },

    addShareLink() {
      this.indexOne += 1;
      this.shareParams.push({
        id: this.indexOne,
      });
    },
    // 删除分享参数
    removeParam(index) {
      console.log("zhelis", index);

      this.shareParams.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="这里是名字">
        <a-input
          v-decorator="[
            'modalEndpointId',
            { rules: [{ required: true, message: '请输入内容' }] },
          ]"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit"> Submit </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      console.log("11", this.form);
      console.log("22", this.$form.createForm(this));
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>

<style>
</style>
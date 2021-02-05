<template>
  <div>
    <div>
      <div class="modelPoint">巡更点位: {{ xgModelPoint }}</div>
      <a-form
        :form="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        @submit="handleSubmit"
      >
        <a-form-item label="监控对象">
          <a-input
            v-decorator="[
              'modalEndpointId',
              { rules: [{ required: true, message: '请输入监控对象' }] },
            ]"
          />
        </a-form-item>
      </a-form>
    </div>

    <div class="tablesStyle" :key="index">
      <a-form
        :form="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        @submit="handleSubmitAdd"
      >
        <a-form-item label="监控实体" style="margin-bottom: 0">
          <a-input
            v-decorator="[
              'modelMetrics',
              { rules: [{ required: true, message: '监控实体不能为空' }] },
            ]"
          />
        </a-form-item>

        <a-form-item label="检查项" style="margin-bottom: 0">
          <a-select
            v-decorator="[
              'modalCheck',
              {
                rules: [{ required: true, message: '检查项不能为空' }],
              },
            ]"
            placeholder="请输入检查项"
          >
            <a-select-option value="value1">运行状态</a-select-option>
            <a-select-option value="value2">有无状态</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="检查值" style="margin-bottom: 0">
          <a-form-item
            :style="{
              display: 'inline-block',
              width: '100px',
              marginBottom: 0,
            }"
          >
            <a-select
              v-decorator="[
                'modalCheckValue',
                {
                  rules: [{ required: true, message: '检查值不能为空' }],
                },
              ]"
              placeholder="检查值不能为空"
            >
              <a-select-option value="male">运行状态</a-select-option>
              <a-select-option value="female">有无状态</a-select-option>
            </a-select>
          </a-form-item>
          <span
            :style="{
              display: 'inline-block',
              width: '30px',
              textAlign: 'center',
            }"
          >
            或值
          </span>
          <a-form-item
            :style="{
              display: 'inline-block',
              width: '100px',
              marginBottom: 0,
            }"
          >
            <a-select
              v-decorator="[
                'modalCheckId',
                {
                  rules: [{ required: true, message: '检查值不能为空' }],
                },
              ]"
              placeholder="请输入检查值"
            >
              <a-select-option value="male">运行状态</a-select-option>
              <a-select-option value="female">有无状态</a-select-option>
            </a-select>
          </a-form-item>
        </a-form-item>

        <a-form-item label="则需异常告警" style="margin-bottom: 0">
          <a-form-item
            :style="{
              display: 'inline-block',
              width: '100px',
              marginBottom: 0,
            }"
          >
            <a-select
              v-decorator="[
                'modalWarning',
                {
                  rules: [{ required: true, message: '检查值不能为空' }],
                },
              ]"
              placeholder="请输入检查值"
            >
              <a-select-option value="value3">运行状态</a-select-option>
              <a-select-option value="value4">有无状态</a-select-option>
            </a-select>
          </a-form-item>
          <span
            :style="{
              display: 'inline-block',
              width: '30px',
              textAlign: 'center',
            }"
          >
            -
          </span>
          <a-form-item
            :style="{
              display: 'inline-block',
              width: '100px',
              marginBottom: 0,
            }"
          >
            <a-select
              v-decorator="[
                'modalAbnormal',
                {
                  rules: [{ required: true, message: '检查值不能为空' }],
                },
              ]"
              placeholder="请输入检查值"
            >
              <a-select-option value="male">运行状态</a-select-option>
              <a-select-option value="female">有无状态</a-select-option>
            </a-select>
          </a-form-item>
        </a-form-item>

        <a-form-item label="告警级别" style="margin-bottom: 0">
          <a-select
            v-decorator="[
              'modalWarningLevel',
              {
                rules: [{ required: true, message: '检查值不能为空' }],
              },
            ]"
            placeholder="请输入检查值"
          >
            <a-select-option value="value6">运行状态</a-select-option>
            <a-select-option value="value7">有无状态</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </div>

    <div class="tablesStyle" v-for="(todo, index) in shareParams" :key="index">
      <a-form
        :form="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        @submit="handleSubmitAdd"
      >
        <a-form-item label="监控实体" style="margin-bottom: 0">
          <a-input
            v-decorator="[
              'modelMetrics' + index,
              { rules: [{ required: true, message: '监控实体不能为空' }] },
            ]"
          />
        </a-form-item>

        <a-form-item label="检查项" style="margin-bottom: 0">
          <a-select
            v-decorator="[
              'modalCheck' + index,
              {
                rules: [{ required: true, message: '检查项不能为空' }],
              },
            ]"
            placeholder="请输入检查项"
          >
            <a-select-option value="value1">运行状态</a-select-option>
            <a-select-option value="value2">有无状态</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="检查值" style="margin-bottom: 0">
          <a-form-item
            :style="{
              display: 'inline-block',
              width: '100px',
              marginBottom: 0,
            }"
          >
            <a-select
              v-decorator="[
                'modalCheckValue' + index,
                {
                  rules: [{ required: true, message: '检查值不能为空' }],
                },
              ]"
              placeholder="检查值不能为空"
            >
              <a-select-option value="male">运行状态</a-select-option>
              <a-select-option value="female">有无状态</a-select-option>
            </a-select>
          </a-form-item>
          <span
            :style="{
              display: 'inline-block',
              width: '30px',
              textAlign: 'center',
            }"
          >
            或值
          </span>
          <a-form-item
            :style="{
              display: 'inline-block',
              width: '100px',
              marginBottom: 0,
            }"
          >
            <a-select
              v-decorator="[
                'modalCheckId' + index,
                {
                  rules: [{ required: true, message: '检查值不能为空' }],
                },
              ]"
              placeholder="请输入检查值"
            >
              <a-select-option value="male">运行状态</a-select-option>
              <a-select-option value="female">有无状态</a-select-option>
            </a-select>
          </a-form-item>
        </a-form-item>

        <a-form-item label="则需异常告警" style="margin-bottom: 0">
          <a-form-item
            :style="{
              display: 'inline-block',
              width: '100px',
              marginBottom: 0,
            }"
          >
            <a-select
              v-decorator="[
                'modalWarning' + index,
                {
                  rules: [{ required: true, message: '检查值不能为空' }],
                },
              ]"
              placeholder="请输入检查值"
            >
              <a-select-option value="value3">运行状态</a-select-option>
              <a-select-option value="value4">有无状态</a-select-option>
            </a-select>
          </a-form-item>
          <span
            :style="{
              display: 'inline-block',
              width: '30px',
              textAlign: 'center',
            }"
          >
            -
          </span>
          <a-form-item
            :style="{
              display: 'inline-block',
              width: '100px',
              marginBottom: 0,
            }"
          >
            <a-select
              v-decorator="[
                'modalAbnormal' + index,
                {
                  rules: [{ required: true, message: '检查值不能为空' }],
                },
              ]"
              placeholder="请输入检查值"
            >
              <a-select-option value="value3">运行状态</a-select-option>
              <a-select-option value="value4">有无状态</a-select-option>
            </a-select>
          </a-form-item>
        </a-form-item>

        <a-form-item label="告警级别" style="margin-bottom: 0">
          <a-select
            v-decorator="[
              'modalWarningLevel' + index,
              {
                rules: [{ required: true, message: '检查值不能为空' }],
              },
            ]"
            placeholder="请输入检查值"
          >
            <a-select-option value="value6">运行状态</a-select-option>
            <a-select-option value="value7">有无状态</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" @click="removeParam(index)"> 删除 </a-button>
        </a-form-item>
      </a-form>
    </div>

    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" @click="addShareTable"> 添加 </a-button>
    </a-form-item>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
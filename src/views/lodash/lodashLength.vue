<template>
  <div>jqk</div>
</template>

<script>
import _ from "lodash";
export default {
  methods: {
    getTestList() {
      //   console.log(_.compact([0, 2, false, 4, "", 5]));
      var arr = [1];
      var other = _.concat(arr, 3, [4]);
      console.log(other);
    },
  },
  mounted() {
    this.getTestList();
  },
};
</script>

<style>
</style>
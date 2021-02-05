<template>
  <div>jqk</div>
</template>

<script>
import _ from "lodash";
export default {
  methods: {
    getTestList() {
      let objects = [
        {
          x: 1,
          y: 2,
        },
        {
          x: 2,
          y: 1,
        },
        {
          x: 3,
          y: 4,
        },
      ];

      let other = _.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual);
      console.log(other);

      //   console.log(_.compact([0, 2, false, 4, "", 5]));
      // var arr = [1];
      // var other = _.concat(arr, [3, 4]);
      // console.log(other);
      // let arr = [3, 2, 1];
      // let other = _.difference(arr, [3, 1]);
      // console.log(other);
    },
  },
  mounted() {
    this.getTestList();
  },
};
</script>

<style>
</style>
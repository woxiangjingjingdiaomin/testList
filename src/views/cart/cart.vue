<template>
  <div>gouwuche</div>
</template>

<script>
import pigoss from "../../components/tempLis/pigoss.js";
export default {
  mounted() {
    this.getPigoss();
  },
  methods: {
    getPigoss() {
      const getList = [];
      let newArr = pigoss;
      newArr.forEach((childGroup) => {
        childGroup.child_group.forEach((alias) => {
          getList.push(childGroup.alias, alias.alias);
        });
      });

      console.log(getList);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
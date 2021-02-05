<template>
  <div>
    <div>
      {{ $store.state.counter }}
      <button @click="addition">增加</button>
      <button @click="subtraction">减少</button>
      <br />
      {{ $store.getters.PowerCounter }}
      <br />
      {{ $store.getters.huq20 }}
      <br />
      {{ $store.getters.huq20length }} 
      <br />
      {{ $store.getters.moreAa(20) }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    addition() {
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style>
</style>
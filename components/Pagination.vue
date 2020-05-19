<template>
  <div class="pagination">
    <div
      v-on:click="prev"
    ><</div>
    <div
      v-on:click="next"
    >></div>
  </div>
</template>

<script>
  export default {
    methods: {
      next: function () {
        this.$store.commit('setPage', 1);
      },
      prev: function () {
        this.$store.commit('setPage', -1);
      },
    }
  }
</script>

<style lang="scss">
  .pagination {
    display: flex;

    div {
      cursor: pointer;
      font-size: 25px;
      margin: 20px;
    }
  }
</style>
<template>
  <div class="filters">
    <input
      type="number"
      class="input__onpage"
      placeholder="Count of cards"
      v-model="setOnPage"
      min="1"
      max="20"
    >
    <br>
    <span class="error_message">{{error}}</span>

    <label>
      <input type="radio" v-model="setGender" value="">any
    </label>
    <br>
    <label>
      <input type="radio" v-model="setGender" value="male">male
    </label>
    <br>
    <label>
      <input type="radio" v-model="setGender" value="female">female
    </label>

  </div>
</template>

<script>
export default {

  watch: {
    setOnPage(onPageCount) {
      if (onPageCount == '') {
        this.error = 'Type valid value!'
      } else {
        this.error = ''
      }
      this.$store.commit('setOnPage', onPageCount);
    },
    setGender(gender) {
      this.$store.commit('setGender', gender);
    },
  },
  mounted () {
    this.$store.watch(
      ()=>{
       return this.$store.state.onPage;
      },
      (newValue)=>{
        this.setOnPage = newValue;
      },
      {
        deep:true
      }
    );
  },
  data () {
    return {
      setOnPage: 1,
      setGender: '',
      error: ''
    }
  }
}
</script>

<style lang="scss">
.filters {
  margin: 20px 0;
}
.input__onpage {

}
.error_message {
  color: red;
}
</style>
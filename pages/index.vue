<template>
  <div class="container">

    <Filters />

    <Card
      v-for="person in persons"
      v-bind:person="person"
    />

    <div
      class="load__more"
      v-on:click="loadMore"
    >
      Load More
    </div>
    <Pagination />

  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import Filters from '~/components/Filters.vue'
import Pagination from '~/components/Pagination.vue'
const axios = require('axios').default;

export default {
  components: {
    Card,
    Filters,
    Pagination
  },
  data () {
    return {
      persons: {}
    }
  },
  methods: {
    loadMore: function () {
      this.$store.commit('addToOnPage', 10);
    }
  },
  mounted () {
    axios.get('https://randomuser.me/api/', {
      params: {
        results: this.$store.state.onPage,
        gender: this.$store.state.getGender,
        page: this.$store.state.page
      }
    })
      .then((response) => {
        this.persons = response.data.results;
      });

    this.$store.watch(
      ()=>{
        return this.$store.state.onPage;
      },
      (newValue)=>{
          axios.get('https://randomuser.me/api/', {
            params: {
              results: newValue,
              gender: this.$store.state.getGender,
              page: this.$store.state.page
            }
          })
            .then((response) => {
              this.persons = response.data.results;
            });
      },
      {
        deep:true
      }

    );
    this.$store.watch(
      ()=>{
        return this.$store.state.getGender;
      },
      (newValue)=>{
        axios.get('https://randomuser.me/api/', {
          params: {
            results: this.$store.state.onPage,
            gender: newValue,
            page: this.$store.state.page
          }
        })
          .then((response) => {
            this.persons = response.data.results;
          });
        },
        {
          deep:true
        }
    );
    this.$store.watch(
      ()=>{
          return this.$store.state.page;
      },
      (newValue)=>{
        axios.get('https://randomuser.me/api/', {
          params: {
            results: this.$store.state.onPage,
            gender: this.$store.state.getGender,
            page: newValue
          }
        })
          .then((response) => {
            this.persons = response.data.results;
          });
      },
      {
        deep:true
      }
    );
  }
}
</script>

<style lang="scss">
.horizontal_center {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.load__more {
  cursor: pointer;
}
</style>

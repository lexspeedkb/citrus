<template>
  <div class="card" v-on:click="cardClick">
    <div class="details">
      <div class="user_photo horizontal_center">
        <img :src="person.picture.large" alt="" class="horizontal_center">
      </div>
      <p class="user_title">{{title}}</p>
      <p class="user_value">{{value}}</p>
    </div>

    <ul class="values_list horizontal_center">
      <li v-bind:class="{ active: selectedName === true }" @mouseover="selectName"  data-label="name"></li>
      <li v-bind:class="{ active: selectedEmail === true }" @mouseover="selectEmail" data-label="email"></li>
      <li v-bind:class="{ active: selectedDate === true }" @mouseover="selectDate"  data-label="birthday"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {

    },
    methods: {
      cardClick: function () {
        alert("My email is " + this.$props.person.email + "\nGender is " + this.$props.person.gender + "\nAge is " + this.$props.person.dob.age);
      },
      selectName: function () {
          this.selectedName = true;
          this.selectedEmail = false;
          this.selectedDate = false;

          this.title = this.dataName.title;
          this.value = this.dataName.value;
      },
      selectEmail: function () {
          this.selectedName = false;
          this.selectedEmail = true;
          this.selectedDate = false;

          this.title = this.dataEmail.title;
          this.value = this.dataEmail.value;
      },
      selectDate: function () {
          this.selectedName = false;
          this.selectedEmail = false;
          this.selectedDate = true;

          this.title = this.dataDate.title;
          this.value = this.dataDate.value;
      }
    },
    data () {
      return {
        selectedName: true,
        selectedEmail: false,
        selectedDate: false,
        dataName: {
          'title': 'Hi, My name is',
          'value': this.$props.person.name.first + ' ' + this.$props.person.name.last
        },
        dataEmail: {
          'title': 'My email address is',
          'value': this.$props.person.email
        },
        dataDate: {
          'title': 'My birthday is',
          'value': this.$props.person.dob.date
        },
        title: 'Hi, My name is',
        value: this.$props.person.name.first + ' ' + this.$props.person.name.last
      }
    },
    props: {
      person: {
          type: Object,
          required: true
      }
    }
  }
</script>


<style lang="scss">
  .card {
    margin: 20px;
    position: relative;
    padding: 20px 0;
    width: 100%;
    max-width: 750px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 0 1px rgba(0,0,0,.5);
    overflow: hidden;
    text-align: center;
    z-index: 5;

    .details {
      .user_photo {
        position: relative;
        background: #fff;
        padding: 5px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 30px;
        border: 1px solid rgba(0,0,0,.25);

        img {
          width: 100%;
          border-radius: 50%;
        }
      }

      .user_title {
        color: #999;
        font-size: 18px;
        margin: 0;
      }

      .user_value {
        color: #2c2e31;
        font-size: 38px;
        margin: 5px;
        text-transform: capitalize;
      }
    }

    .values_list {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      float: left;

      li {
        cursor: pointer;
        display: block;
        width: 40px;
        height: 48px;
        float: left;
        margin: 20px;
        background-image: url(https://randomuser.me/img/card_icons.png);
        background-size: 378px;
        background-position-y: -48px;
        transition: all .25s ease-out;

        &[data-label=name] {
          background-position: 0 -48px;
        }
        &[data-label=email] {
          background-position: -68px -48px;
        }
        &[data-label=birthday] {
          background-position: -135px -48px;
        }

        &.active[data-label=name] {
          background-position: 0 -96px;
        }
        &.active[data-label=email] {
          background-position: -68px -96px;
        }
        &.active[data-label=birthday] {
          background-position: -135px -96px;
        }
      }
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 130px;
      top: 0;
      background: #f9f9f9;
      border-bottom: 1px solid rgba(0,0,0,.15);
      z-index: -1;
    }

    .values_list {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
</style>

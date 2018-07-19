<template>
  <div id="app">
    <div class="app-wrapper">
        <button class="reload-btn" @click="loading()">
          <i class="fas fa-redo"></i>
        </button>
      <!-- <transition name="swichWeatherContainer" mode="out in"> -->
        <router-view></router-view>
      <!-- </transition> -->
      <div class="date-switches">
 <!--        <router-link 
          v-for="route in this.$router.routes" 
          :key="route"
          :to="route.path"
          class="date-switchers_btn"
          v-html="button"
        >
          <i class="far fa-circle">g</i>
        </router-link> -->
        <router-link class="date-switchers_btn"
          v-html="button" to="/">1</router-link>
        <router-link class="date-switchers_btn"
          v-html="button" to="/threeDays">2</router-link>
        <router-link class="date-switchers_btn"
          v-html="button" to="/">3</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import {WEATHER_DATA} from './service/request.js'
import { PARSE_WEATHER_DATA } from './service/parse.js'

export default {
  name: 'app',
  data() {
    return {
      button : `<i class="far fa-circle"></i>`
    }
  },
  components: {},
  computed: {
    innerActiveTeg () {
      if (classNAme == "router-link-active") {
        return this.button = '<i class="fas fa-circle"></i>'
      }
    }
  },
  methods: {
    getWeather(){
      WEATHER_DATA.get('baseURL')
        .then( res  => {
          this.changeWeather(PARSE_WEATHER_DATA( res ))
        })
        .catch( e => {
          console.log( e )
        })
    },
    changeWeather(someAttr){
      this.$store.dispatch("changeWeatherData", someAttr)
    },
  },
  created: function() {
    this.getWeather()
  }
}
</script>

<style>
body {
  background-color: pink;
}
* {
  box-sizing: border-box;
}
ul {
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-wrapper {
  position: relative;
  max-width: 500px;
}
  .reload-btn {
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    padding: 17px;
    border: none;
    background-color: transparent;
  }
  .reload-btn:focus {
    outline: none;
    outline-offset: 0;
    -webkit-animation: loader 1.5s linear 3;
    animation: loader 1.5s linear 3;
  }
    @-webkit-keyframes loader {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes loader {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    .fas {
      font-weight: 600;
    }
    .fa-redo {
      font-size: 22px;
      color: #d5dbdc;
    }
.date-switches {
  padding: 20px 0 15px;
  background-color: #272727;
  border-radius: 0 0 15px 15px;
}
.date-switchers_btn {
  position: relative;
  z-index: 100;
  padding: 5px;
  border: none;
  font-size: 8px;
  color: #ffffff;
  background-color: transparent;
  }
.swichWeatherContainer-enter-active, .swichWeatherContainer-leave-active {
  transition: opacity .5s;
}
.swichWeatherContainer-enter, .swichWeatherContainer-leave-to {
  opacity: 0;
}
</style>

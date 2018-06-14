<template>
  <div id="app">
    <weather-page></weather-page>
  </div>
</template>

<script>

import WeatherPage from './components/WeatherPage'
import DateSwitches from './components/DateSwitches.vue'
import Indicators from './components/Indicators.vue'
import MainContent from './components/MainContent'

export default {
  name: 'app',
  components: {
    "weather-page": WeatherPage
  }
}
</script>

<style>
#app {
  width: 800px;
  height: 1000px;
  padding: 50px;
  background-color: #feff2c73;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

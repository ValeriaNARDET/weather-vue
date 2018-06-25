<template>
	<div class="container">
			<main-content></main-content>
			<indicators></indicators>
	</div>
</template>

<script>

import MainContent from './MainContent.vue'
import Indicators from './Indicators.vue'
import {WEATHER_DATA} from '../service/request.js'
import { PARSE_WEATHER_DATA } from '../service/parse.js'

export default {
	name: 'Container',
	components: {
		"main-content": MainContent,
		"indicators": Indicators,
	},
	data () {
		return {}
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

<style scoped>
	.weather-page {
		position: absolute;
		margin: auto;
		border-radius: 15px;
		background-color: #fff;
	}
</style>


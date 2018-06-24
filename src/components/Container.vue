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

	export default {
		name: 'Container',
		components: {
			"main-content": MainContent,
			"indicators": Indicators,
		},
		data () {
			return {}
		},
  		created: function() {
  			WEATHER_DATA.get('baseURL')
  				.then( res  => {
  					console.log( res )
  				})
  				.catch( e => {
  					console.log( e )
  				})
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
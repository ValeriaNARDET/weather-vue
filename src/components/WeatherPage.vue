<template>
	<div class="weather-page">
		<main-content></main-content>

		<indicators></indicators>

		<date-switches></date-switches>
	</div>
</template>

<script>

import MainContent from './MainContent.vue'
import Indicators from './Indicators.vue'
import DateSwitches from './DateSwitches.vue'

	export default {
		name: 'WeatherPage',
		components: {
			"main-content": MainContent,
			"indicators": Indicators,
			"date-switches": DateSwitches,
		},
		data () {
			return {}
		},
		methods: {}
	}
</script>

<style scoped>
	.weather-page {
		position: absolute;
		right: 50px;
		margin: auto;
		border-radius: 15px;
		background-color: #fff;
	}
</style>

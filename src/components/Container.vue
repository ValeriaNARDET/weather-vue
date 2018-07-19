<template>
	<div class="container">
			<main-content></main-content>
			<indicators></indicators>
	</div>
</template>

<script>

import MainContent from './MainContent.vue'
import Indicators from './Indicators.vue'

export default {
	name: 'Container',
	components: {
		"main-content": MainContent,
		"indicators": Indicators,
	},
	data () {
		return {}
	}
  }
</script>

<style scoped>
</style>

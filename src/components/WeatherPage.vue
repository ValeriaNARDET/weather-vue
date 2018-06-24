<template>
	<div class="weather-page">
		<component
		   v-bind:is="currentTab.component"
		   class="tab"
		></component>
		<!-- <container></container> -->
		<!-- <date-switches></date-switches> -->
		<div class="date-switches">
			<button
				class="date-switches__btn"
				v-for="tab in tabs"
				v-bind:key="tab.name"
				v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
				v-html="tab.html"
				v-on:click="currentTab = tab"
				@click="alert('edde')"
			></button>
		</div>
	</div>
</template>

<script>

import Container from './Container.vue'
import DateSwitches from './DateSwitches.vue'

var tabs = [
  {
    component: Container,
    	html: `<i class="fas fa-circle"></i>`
    	,
    props: {
    	name: 'Day'
    }
  },
  {
    component: Container,
    	html: `<i class="far fa-circle"></i>`
    	,
    props: {
    	name: 'NextDay'
    }
  },
  {
    component: Container,
    	html: `<i class="far fa-circle"></i>`
    	,
    props: {
    	name: 'AfterNextDay'
    }
  }
]

	export default {
		name: 'WeatherPage',
		components: {
			"container": Container,
			"date-switches": DateSwitches,
		},
		data () {
			return {
				tabs: tabs,
    			currentTab: tabs[0]
			}
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
		.date-switches {
		  padding-bottom: 15px;
		  background-color: #272727;
		  border-radius: 0 0 15px 15px;
		}
		  .date-switches__btn {
		    padding: 5px;
		    border: none;
		    font-size: 8px;
		    color: #ffffff3b;
		    background-color: transparent;
		  }
		  .date-switches__btn:focus {
		    outline: none;
		    outline-offset: 0;
		  }
</style>

import Vue from "vue"
import Vuex from "vuex"

Vue.use (Vuex)

export const store = new Vuex.Store({
	state: {
		temperature: '79',//&#176;	
		description: "Cloudy Skies",
		area: "Sicklerville, New Jersey",
		dateMonth: "may",
		dateDay: "21",
		mph: '2mph',
		humidity: "33%",
		cloudiness: '83%'
	},
	getters: {},
	actions: {},
	mutations: {}
})
import Vue from "vue"
import Vuex from "vuex"

Vue.use (Vuex)

export const store = new Vuex.Store({
	state: {
		temperatureT: '79',//  &#176; - html symbol
		description: "Cloudy Skies",
		area: "Sicklerville, New Jersey",
		dateMonth: "may",
		dateDay: "21",
		mph: '2mph',
		humidity: "33%",
		cloudiness: '83%'
	},
	getters: {
	    temperature: state => {
	      return state.temperatureT + '°';
	    },
		currentDate: (state, getters) => {
			var date = new Date();
			var mm = date.getMonth() + 1;
			console.log(mm)
		  	return getters.currentDate.mm;
		}
	},
	actions: {},
	mutations: {}
})
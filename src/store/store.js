import Vue from "vue"
import Vuex from "vuex"

Vue.use (Vuex)

export const store = new Vuex.Store({
	state: {
		temperatureT: '23',
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
		  	return getters.currentDate.mm;
		}
	},
	actions: {
    	changeWeatherData: (context, someAttr) => {
    		context.commit('WeatherChanged', someAttr)
    	}
    },
	mutations: {
    	WeatherChanged: (state, someAttr) => {
    		console.log("Data changed in mutations")
    		for ( var field in someAttr ) {
    			// console.log( field )
    			if(field === 'dateMonth' || field === 'dateDay'){
    				console.log( field )
    			}else{
    				state[field] = someAttr[field]    				
    			}
    		}
    	}
    }
})
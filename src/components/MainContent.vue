<template>
	<div class="wrapper">
		<transition name="slide-fade">
    
  		</transition>
		<button class="reload-btn" v-if="loading">
			<clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
			<!-- <i class="fas fa-redo"></i> -->
		</button>
		<img class="weather-status-img" :src="src" height="109" width="109" alt="rain">
		<div class="content">
			<p class="content__temperature" v-text='temperature'>79&#176;</p>
			<div class="content__status">
				<p class="content__sky-status" v-html='description'></p>
				<input
					class="content__city"
					type="text"
					name="location"
					@keyup.enter="takeValue()"
					:placeholder="area">
			</div>
			<div class="content__date">
				<p class="content__forecast-dat" v-text='currentMonth'></p>
				<slot></slot>
				<p class="content__forecast-dat" v-text='currentDate'></p>
			</div>
		</div>
	</div>
</template>

<script>
  import {WEATHER_DATA} from '../service/request.js'
  import ClipLoader from './clipLoader.vue'

  export default {
  name: 'MainContent',
  data () {
    return {
      src: '',
      loading: false,
      color: 'grey',
      size: '18px'
    }
  },
  components: {
  	ClipLoader
  },
  methods: {
  	loading() {
      this.getWeather()
  	},
  	takeValue(event) {
        console.log(event.target.value)
    },
    getWeather(){
      WEATHER_DATA.get('baseURL')
        .then( res  => {
          this.src = res.data.current.condition.icon
        })
        .catch( e => {
          console.log( e )
        })
    },
    start() {
    	this.loading = true
    },
    finish() {
    	this.loading = false
    }
  },
  computed: {
    temperature() {
      return this.$store.getters.temperature
    },
    description() {
      return this.$store.state.description
    },
    area() {
      return this.$store.state.area
    },
    dateMonth() {
      return this.$store.state.dateMonth
    },
    dateDay() {
      return this.$store.state.dateDay
    },
    currentMonth: function () {
    	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var date = new Date();
		var mm = months[date.getMonth()];
		console.log(mm)
		return mm;
	},
    currentDate: function () {
		var date = new Date();
		var dd = date.getDate();
		console.log(dd)
		return dd;
	}
  },
  created(){
    this.getWeather()
  }
}
</script>

<style scoped>
.wrapper {
	position: relative;
	margin-bottom: 18px;
}
	.reload-btn {
		position: absolute;
		top: 0;
		right: 0;
		padding: 17px;
		border: none;
		background-color: transparent;
	}
	.reload-btn:focus {
		outline: none;
		outline-offset: 0;
		-webkit-animation: loader-1 1.5s linear 3;
		animation: loader-1 1.5s linear 3;
	}
		.fas {
			font-weight: 600;
		}
		.fa-redo {
			font-size: 22px;
			color: #d5dbdc;
		}
	.weather-status-img {
		margin: 50px auto;
	}
	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
	}
		.content__temperature {
			margin: 10px 20px;
			font-size: 48px;
			font-family: 'ProximaNova-Light', 'Proxima Nova', Arial, sans-serif;
			line-height: 1;
			font-weight: 300;
			color: #8d9369;
		}
		.content__status {
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-start;
			padding-right: 15px;
		}
			.content__sky-status {
				margin: 5px 0;
				font-size: 24px;
				font-family: 'SourceSansPro-Light', 'Source Sans Pro', sans-serif;
				font-weight: 300;
				color: #bac2c6;
			}
			.content__city {
				border: none;
				margin: 0  0 18px;
				font-size: 16px;
				font-family: 'SourceSansPro-Semibold', 'Source Sans Pro', sans-serif;
				font-weight: 600;
				color: #a2a9ad;
				background-color: transparent;
			}
				.content__city:focus {
					outline-offset: 0;
					outline: none;
				}
				.content__city::-webkit-input-placeholder {
					margin: 0  0 20px;
					font-size: 16px;
					font-family: 'SourceSansPro-Semibold', 'Source Sans Pro', sans-serif;
					font-weight: 600;
					color: #a2a9ad;
				}
				.content__city::-moz-placeholder {
					margin: 0  0 20px;
					font-size: 16px;
					font-family: 'SourceSansPro-Semibold', 'Source Sans Pro', sans-serif;
					font-weight: 600;
					color: #a2a9ad;
				}
				.content__city:-ms-input-placeholder {
					margin: 0  0 20px;
					font-size: 16px;
					font-family: 'SourceSansPro-Semibold', 'Source Sans Pro', sans-serif;
					font-weight: 600;
					color: #a2a9ad;
				}
				.content__city:-moz-placeholder {
					margin: 0  0 20px;
					font-size: 16px;
					font-family: 'SourceSansPro-Semibold', 'Source Sans Pro', sans-serif;
					font-weight: 600;
					color: #a2a9ad;
				}
		.content__date {
			right: 0;
			bottom: 0;
			top: 0;
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			flex-direction: column;
			justify-content: center;
			-ms-align-items: center;
			align-items: center;
			padding: 0 16px;
			text-transform: uppercase;
			font-size: 14px;
			font-family: 'OpenSans-Bold', 'Open Sans', sans-serif;
			font-weight: 700;
			color: #fff;
			background-color: #54bae6;
		}
			.content__forecast-dat {
				margin: 3px auto;
			}

@-webkit-keyframes loader-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loader-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

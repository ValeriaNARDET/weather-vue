<template>
	<div class="wrapper">
		<img class="weather-status-img" :src="src" height="64	" width="64" alt="rain">
		<div class="content">
			<p class="content__temperature" v-text='temperature'></p>
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
				<p class="content__forecast-date">{{currentMonth}}</p>
				<p class="content__forecast-date">{{currentDate}}</p>
			</div>
		</div>
	</div>
</template>

<script>
  import {WEATHER_DATA} from '../service/request.js'

  export default {
  name: 'MainContent',
  data () {
    return {
      src: ''
    }
  },
  methods: {
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
		console.log(date)
		var mm = months[date.getMonth()];
		return mm;
	},
    currentDate: function () {
		var date = new Date();
		var dd = date.getDate();
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
	border-radius: 15px 15px 0 0;
	padding-bottom: 18px;
	background-color: #fff;
}
	.weather-status-img {
		margin: 66px auto;
	}
	.content {
		position: relative;
		display: flex;
		justify-content: space-between;
	}
		.content__temperature {
			margin: 10px 20px;
			font-size: 38px;
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
			.content__forecast-date {
				margin: 3px auto;
			}
</style>

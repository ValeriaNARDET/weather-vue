<template>
	<div class="three-days">
		<div class="three-days__item">
			<div class="content-date">
				<p class="content__forecast-date">{{currentMonth}}</p>
				<p class="content__forecast-date">{{currentDate}}</p>
			</div>
			<img class="three-days__image" src="../images/sun-cloudy.png" height="auto" width="73" alt="weather">
			<div class="temperature-wrapper">
				<p class="temperature-index">max: <b class="t-index" v-text="temperature">25</b></p>
				<p class="temperature-index">min: <b class="t-index" v-text="temperature">15</b></p>
			</div>
		</div>
		<div class="three-days__item">
			<div class="content-date">
				<p class="content__forecast-date">{{tommorowMonth}}</p>
				<p class="content__forecast-date">{{tommorowDate}}</p>
			</div>
			<img class="three-days__image" src="../images/sun-cloudy.png" height="auto" width="73" alt="weather">
			<div class="temperature-wrapper">
				<p class="temperature-index">max: <b class="t-index" v-text="temperature">25</b></p>
				<p class="temperature-index">min: <b class="t-index" v-text="temperature">15</b></p>
			</div>
		</div>
		<div class="three-days__item">
			<div class="content-date">
				<p class="content__forecast-date">{{nextMonth}}</p>
				<p class="content__forecast-date">{{nextDate}}</p>
			</div>
			<img class="three-days__image" src="../images/sun-cloudy.png" height="auto" width="73" alt="weather">
			<div class="temperature-wrapper">
				<p class="temperature-index">max: <b class="t-index" v-text="temperature">25</b></p>
				<p class="temperature-index">min: <b class="t-index" v-text="temperature">15</b></p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ThreeDays',
	data () {
		return {}
	},
	computed: {
    	currentMonth: function () {
    		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			var date = new Date();
			var mm = months[date.getMonth()];
			return mm;
		},
    	currentDate: function () {
			var date = new Date();
			var dd = date.getDate();
			return dd;
		},
		tommorowMonth: function() {
    		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			var tommorow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
			var tm = months[tommorow.getMonth()];
			console.log(tm)
			return tm;
		},
		tommorowDate: function() {
			var tommorow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
			var td = tommorow.getDate();
			console.log(td)
			return td;
		},
		nextMonth: function() {
    		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			var next = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2);
			var nm = months[next.getMonth()];
			console.log(nm)
			return nm;
		},
		nextDate: function() {
			var next = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2);
			var nd = next.getDate();
			console.log(nd)
			return nd;
		},
		temperature() {
			return this.$store.getters.temperature;
		}
	}
}

</script>

<style scoped>
.three-days {
	min-height: 380px;
	margin: auto;
	padding-top: 80px;
	border-radius: 15px 15px 0 0;
	background-color: #fff;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	justify-content: space-around;
}
	.three-days__item {}
		.content-date {
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			flex-direction: column;
			justify-content: center;
			-ms-align-items: center;
			align-items: center;
			padding: 10px 16px;
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
			.three-days__image {
				padding: 20px 0;
			}
			.t-index {
				margin: 10px 15px;
				font-size: 24px;
				font-family: 'ProximaNova-Light', 'Proxima Nova', Arial, sans-serif;
				line-height: 1;
				font-weight: 300;
				color: #8d9369;
			}
</style>

<template>
	<div class="indicators-wrapper">
		<ul class="indicators">
			<li class="indicators__item">
				<img class="indicator__picture precipitation" src="../images/shape-1.png" height="18" width="29" alt="precipitation">
				<p class="indicators__describer" v-text='mph'></p>
			</li>
			<li class="indicators__item">
				<img class="indicator__picture humidity" src="../images/shape-2.png" alt="humidity">
				<p class="indicators__describer" v-text='humidity'></p>
			</li>
			<li class="indicators__item">
				<img class="indicator__picture sunshine" src="../images/shape-3.png" alt="sunshine">
				<p class="indicators__describer" v-text='cloudiness'></p>
			</li>
		</ul>
	</div>
</template> 

<script>
export default {
  name: 'Indicators',
  data () {
    return {}
  },
  methods: {},
  computed: {
  	mph() {
  		return this.$store.state.mph + " mph"
  	},
  	humidity() {
  		return this.$store.state.humidity + " %"
  	},
  	cloudiness() {
  		return 100 - +this.$store.state.cloudiness + " %"
  	}
  }
}
</script>

<style scoped>
.indicators-wrapper {
	padding: 40px 20px 40px;
	color: #fff;
	background-color: #272727;
}
	.indicators {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	margin: 0;
	}
		.indicators__item {
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			justify-content: space-around;
			align-items: baseline;
		}
			.indicator__picture {
				position: relative;
				top: 5px;
			}
			.indicators__describer {
				padding-left: 15px;
				margin: 0;
				font-size: 14px;
				font-family: 'ProfimaNova-Bold', 'Profima Nova', sans-serif;
				font-weight: 700;
			}
</style>

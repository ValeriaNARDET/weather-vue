import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/Container.vue'
import ThreeDays from '../components/threeDays.vue'
// import TenDays from '../components/tenDays.vue'


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
	{
		id: 1,
		path: "/",
		component: Container
	},
	{
		id: 2,
		path: "/threeDays",
		component: ThreeDays
	},
	// {
	// 	id: 3,
	// 	path: "/tenDays",
	// 	component: TenDays
	// }
]
})
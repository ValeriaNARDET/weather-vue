import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const myOwnRouter = [
	{
		path: '/',
		component: 
	},
	{
		path: '/nextDay',
		component: 
	},
	{
		path: '/dayAfterNext',
		component: 
	}
]

const router = new VueRouter ({
	routes: myOwnRouter
});
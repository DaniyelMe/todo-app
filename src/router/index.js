import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Todos',
		component: () => import('../views/Todos.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;

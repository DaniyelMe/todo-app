import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		listOfTodos: [
			{ lable: 'wash dishes', done: false, id: 0 },
			{ lable: 'clean the room', done: false, id: 1 }
		]
	},
	mutations: {
		add(state, text) {
			const randId = crypto.getRandomValues(new Uint8Array(10)).join('');
			state.listOfTodos.push({ lable: text, done: false, id: randId });
		},
		removeTodo(state, id) {
			state.listOfTodos = state.listOfTodos.filter(todo => todo.id !== id);
		},
		doneTodo(state, id) {
			state.listOfTodos.forEach(todo => {
				if (todo.id === id) todo.done = !todo.done;
			});
		}
	},
	plugins: [createPersistedState()]
});

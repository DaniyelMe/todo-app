<template>
	<b-container fluid id="app">
		<header class="headline">My Todo's</header>
		<AddTodo @add="add" />
		<TodoList :todos="listOfTodos" @removeTodo="removeTodo" @doneTodo="doneTodo" />
	</b-container>
</template>

<script>
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';

export default {
	name: 'App',
	components: { TodoList, AddTodo },
	data() {
		return {
			listOfTodos: [
				{ lable: 'wash dishes', done: false, id: 0 },
				{ lable: 'clean the room', done: false, id: 1 }
			]
		};
	},
	methods: {
		add(text) {
			const randId = crypto.getRandomValues(new Uint8Array(10)).join('');
			this.listOfTodos.push({ lable: text, done: false, id: randId });
		},
		removeTodo(id) {
			this.listOfTodos = this.listOfTodos.filter((todo) => todo.id !== id);
			console.log('~ this.listOfTodos', this.listOfTodos);
		},
		doneTodo(id) {
			this.listOfTodos.forEach((todo) => {
				if (todo.id === id) todo.done = !todo.done;
			});
		}
	}
};
</script>


<style >
html,
body {
	height: 100%;
}

body {
	margin: 0;
	min-width: 320px;
	font-size: 16px;
	font-family: monospace, 'Montserrat', sans-serif;
}

body.light-mode {
	color: white;
}

body.dark-mode {
	color: white;
	background: #292929;
}

li {
	list-style: none;
}

ol {
	padding: 0;
	margin: 0;
}

a {
	text-decoration: none;
	color: inherit;
	-webkit-tap-highlight-color: transparent;
}
#app {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding: 0 10px;
}
#app > header {
	font-size: 36px;
}
.headline {
	font-family: Fredericka the Great;
	font-style: normal;
	font-weight: normal;
	line-height: 54px;
}
</style>

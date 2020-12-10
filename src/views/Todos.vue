<template>
	<b-container fluid="sm" id="app">
		<header class="headline">My Todo's</header>
		<AddTodo />
		<TodoList />
	</b-container>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import AddTodo from '../components/AddTodo.vue';

export default {
	name: 'Todos',
	components: { TodoList, AddTodo }
};
</script>

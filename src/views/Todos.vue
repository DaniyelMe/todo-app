<template>
	<div id="app" class="container">
		<header class="headline text-center button">My Todo's</header>
		<AddTodo />
		<TodoList />
	</div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import AddTodo from '../components/AddTodo.vue';

export default {
	name: 'Todos',
	components: { TodoList, AddTodo }
};
</script>

<style>
#app > header {
	font-size: 36px;
	padding-top: 2rem;
	margin-bottom: 2rem;
}

.headline {
	font-family: Fredericka the Great;
	font-style: normal;
	font-weight: normal;
	line-height: 54px;
}
</style>

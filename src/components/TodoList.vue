<template>
	<ul v-if="todos.length > 0">
		<li v-for="item in todos" class="todo" :key="item.id">
			<span class="{done : item.done == true}"> {{ item.lable }} </span>
			<div>
				<button @click="doneTodo(item)">
					<i aria-hidden="true" class="material-icons">{{ item.done ? 'check_box' : 'check_box_outline_blank' }} </i>
				</button>

				<button @click="removeTodo(item)">
					<i aria-hidden="true" class="material-icons"> delete </i>
				</button>
			</div>
		</li>
	</ul>
	<span v-else class="empty headline">No Todo’s to show...</span>
</template>

<script>
export default {
	name: 'TodoList',
	computed: {
		todos() {
			return this.$store.state.listOfTodos;
		}
	},
	methods: {
		doneTodo(item) {
			this.$store.dispatch('doneTodo', item.id);
		},
		removeTodo(item) {
			this.$store.dispatch('removeTodo', item.id);
		}
	}
};
</script>

<style>
.done {
	text-decoration: line-through;
}

.empty {
	font-size: 24px;
}

.todo {
	width: 100%;
}
</style>

<template>
	<div class="row todo-list-container m-auto">
		<transition-group name="list" v-if="todos.length > 0" class="todo-list col-lg-8 m-auto">
			<div v-for="item in todos" class="todo-card" :key="item.id">
				<div>
					<input
						@click="doneTodo(item)"
						class="todo-status"
						:class="{ 'icon-done': item.done }"
						type="checkbox"
						:checked="item.done"
						data-id="-2"
					/>

					<span class="todo-info" :class="{ 'done-status': item.done == true }"> {{ item.lable }} </span>
				</div>

				<button @click="removeTodo(item)" class="remove-button"></button>
			</div>
		</transition-group>
		<span v-else class="empty-input headline m-auto">No Todo’s to show...</span>
	</div>
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
			this.$store.commit('doneTodo', item.id);
		},
		removeTodo(item) {
			this.$store.commit('removeTodo', item.id);
		}
	}
};
</script>

<style >
.todo-list-container {
	width: 100%;
}

.todo-list {
	padding: 0;
	width: 100%;
}

.todo-card {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1.2rem 0;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
	border-radius: 4px;
	width: 100%;
	padding: 13px 20px;
	max-width: 600px;
}

.todo-card button {
	color: #abb5be;
	width: 16px;
	height: 16px;
	display: inline-block;
	margin-right: 10px;
}

/* Transition on list */
.list-enter-active,
.list-leave-active {
	transition: all 0.2s;
}
.list-enter,
.list-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.todo-status {
	-webkit-appearance: none;
	-moz-appearance: none;
	vertical-align: middle;
	appearance: none;
	width: 16px;
	height: 16px;
	cursor: pointer;
	border: 1px solid #abb5be;
	box-sizing: border-box;
	border-radius: 2px;
}

.todo-info {
	vertical-align: middle;
	margin-left: 1rem;
}

.icon-done {
	background: url('../assets/done-24px.svg') center center no-repeat;
	background-size: 16px;
	color: white;
	background-color: #28a745;
	border: 1px solid #28a745;
	fill: white;
}

.done-status {
	text-decoration: line-through;
	color: #6b7176;
	vertical-align: middle;
}

.empty-input {
	font-size: 24px;
	margin-top: 16px;
}

.remove-button {
	background: url('../assets/delete.svg') center center no-repeat;
}
.remove-button:hover {
	background: url('../assets/delete-hover.svg') center center no-repeat;
}
</style>

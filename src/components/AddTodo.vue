<template>
	<div class="row">
		<form class="form col-lg-8 m-auto" @submit.prevent="add">
			<div class="input-group m">
				<b-form-input
					aria-describedby="input-live-help input-live-feedback"
					v-model="text"
					:state="inputState"
					id="input-todo"
					placeholder="Add todo's.."
				></b-form-input>

				<b-button
					class="add-button"
					variant="success"
					aria-describedby="Button to add a todo into todo list"
					@click.prevent="add"
				>
					Add
				</b-button>
				<b-form-invalid-feedback id="input-live-feedback"> Enter at least 3 letters </b-form-invalid-feedback>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: '',
			inputState: null
		};
	},

	methods: {
		add() {
			if (this.text.length < 2) return (this.inputState = false);

			this.inputState = true;
			this.$store.commit('add', this.text);
			// Reset
			this.text = '';
			this.inputState = null;
		}
	}
};
</script>

<style>
.form {
	display: flex;
	justify-content: center;
	width: 100%;
}

#input-todo {
	max-width: 530px;
	width: 100%;
	margin-right: 0.5rem;
}

.input form-control {
	min-width: 355px;
}
</style>
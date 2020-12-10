<template>
	<b-form inline class="form" fluid="sm">
		<b-form-input
			class="input"
			aria-describedby="input-live-help input-live-feedback"
			v-model="text"
			:state="inputState"
			placeholder="Add todo's.."
		></b-form-input>
		<b-button variant="success" aria-describedby="Button to add a todo into todo list" @click="add">Add</b-button>
		<b-form-invalid-feedback id="input-live-feedback"> Enter at least 3 letters </b-form-invalid-feedback>
	</b-form>
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
			this.$emit('add', this.text);
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
.input {
	max-width: 520px;
	width: 100%;
	margin-right: 0.5rem;
}
</style>
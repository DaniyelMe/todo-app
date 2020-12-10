<template>
	<div class="app-container">
		<router-view></router-view>
		<footer class="footer">
			<router-link :to="{ name: 'Todos' }">Home</router-link>
			<router-link :to="{ name: 'About' }">About</router-link>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'App'
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

button {
	margin: 0;
	padding: 0;
	border: none;
	background-color: inherit;
	color: inherit;
	font: inherit;
	cursor: pointer;
	outline: none;
	-webkit-tap-highlight-color: transparent;
}

button:focus {
	outline: none;
}

.app-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}

.footer {
	width: 100%;
	background-color: #292929;
	color: white;
	text-align: center;
}

.footer a {
	display: inline-block;
	color: white;
	text-decoration: none;
	padding: 20px;
}

.footer a:hover {
	display: inline-block;
	color: #28a745;
	text-decoration: none;
	padding: 20px;
}

/* Tablet */
@media only screen and (max-width: 770px) {
	.add-button {
		width: 100%;
		max-width: 520px;
		margin-top: 16px;
	}
}

/* Phone */
@media only screen and (max-width: 375px) {
	#input-todo {
		max-width: 354px;
	}
}
</style>

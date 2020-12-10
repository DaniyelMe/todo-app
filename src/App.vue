<template>
	<router-view></router-view>
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

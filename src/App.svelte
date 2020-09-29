<script lang="ts">
	//import page from 'page';
	import MainNav from './MainNav.svelte';
	import MainFooter from './MainFooter.svelte';
	import Router from 'svelte-spa-router';
	import Experience from './pages/Experience.svelte';
	import Projects from './pages/Projects.svelte';
	import AboutMe from './pages/AboutMe.svelte';
	import TestIcons from './pages/TestIcons.svelte';

	const routes = {
		'/': AboutMe,
		'/experience': Experience,
		'/projects': Projects,
		'/testIcons': TestIcons
	};
</script>

<header>
	<MainNav />
</header>
<main>
	<Router {routes} />
</main>
<footer>
	<MainFooter />
</footer>

<style>
	:global(body) {
		color: #333;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}
	header{
		background-color: antiquewhite;
		position: sticky;
	}
	footer {
		/*height: 15vh;
		position: fixed;
		bottom: 0;*/
		padding: 10px 20px;
		background-color: antiquewhite;
	}
	main {
		text-align: center;
		margin: 0 auto;
	}
</style>
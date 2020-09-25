<script lang="ts">
	import page from 'page';
	import MainNav from './MainNav.svelte';
	import MainFooter from './MainFooter.svelte';
	import Experience from './pages/Experience.svelte';
	import Projects from './pages/Projects.svelte';
	import AboutMe from './pages/AboutMe.svelte';
	import TestIcons from './pages/TestIcons.svelte';

	let current = AboutMe;

	page('/', () => current = AboutMe);
  	page('/experience', () => current = Experience);
	page('/projects', () => current = Projects);
	page('/testIcons', () => current = TestIcons);

	page.start();
</script>

<header>
	<MainNav />
</header>
<main>
	<svelte:component this={current} />
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
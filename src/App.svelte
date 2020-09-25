<script lang="typescript">
	import page from 'page';
	import MainNav from './MainNav.svelte';
	import MainFooter from './MainFooter.svelte';
	import Experience from './pages/Experience.svelte';
	import Projects from './pages/Projects.svelte';
	import AboutMe from './pages/AboutMe.svelte';

	let current = AboutMe;

	page('/', () => current = AboutMe);
  	page('/experience', () => current = Experience);
  	page('/projects', () => current = Projects);

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
		max-width: 240px;
		padding: 1em;
		margin: 0 auto;
		height: 100%;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
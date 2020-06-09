<script lang="typescript">
	import { slideWidth } from './customTransitions/transitions.ts';
	import { clickAway } from './functional/clickAway.ts';

	const navId = "sidebar";

	let sidebarRef: HTMLElement;
	
	let sidebarOpen = true;
	//zmien to na bind na radiobox-ach?
	let style = "gridSide";
	let navClass: string;
	$: navClass = style === "gridHover" ? 'sidebarHover' : null;

	const hideSidebar = () => {sidebarOpen = false;}
	let handleAway: (e: MouseEvent) => void;
	//sprawdz jak dziala to closest
	$: handleAway = clickAway(hideSidebar, ['nav', 'button.gridHover', 'button.toggleSidebar']);

	$: style === 'gridHover' && sidebarOpen ?
		document.addEventListener('click', handleAway)
		:
		document.removeEventListener('click', handleAway);

	
</script>
<div id="root">
	<div id="gridRoot" class={style}>
		<header>
			header/appBar
			<button class='toggleSidebar' on:click={e => sidebarOpen = !sidebarOpen}>
				{sidebarOpen ? 'Hide': 'Show'} sideNav
			</button>
			{#each ['gridSide', 'gridFull', 'gridHover'] as clas}
				<button class={clas} on:click={e => style = clas}>
					{clas}
				</button>
			{/each}
		</header>
		{#if sidebarOpen}
			<nav bind:this={sidebarRef} id={navId} class={navClass} transition:slideWidth>
				nav/sideNav
			</nav>
		{/if}
		<main>main/content</main>
	</div>
</div>

<style>
	#root {
		height: 150vh;
		border: 1px solid;
	}
	#gridRoot{
		display: grid;
		height: 100%;
	}
	.gridSide{
		grid-template-areas:
			"appBar appBar"
			"sideNav content";
		grid-template-rows: auto 1fr;
		grid-template-columns: auto 1fr;
	}
	.gridHover{
		grid-template-areas:
			"sideNav appBar"
			"sideNav content";
		grid-template-rows: auto 1fr;
		grid-template-columns: auto 1fr;
	}
	.gridFull{
		grid-template-areas:
			"sideNav appBar"
			"sideNav content";
		grid-template-rows: auto 1fr;
		grid-template-columns: auto 1fr;
	}
	.sidebarHover {
		position: fixed;
		height: 100%;
	}
	div {
		background-color: 'yellow';
	}
	header {
		position: sticky;
		top: 0;
		grid-area: appBar;
		background-color: yellow;
	}
	#gridRoot > nav {
		grid-area: sideNav;
		width: 15vw;
		background-color: lightgreen;
	}
	#gridRoot > main {
		grid-area: content;
		background-color: orange;
	}
</style>
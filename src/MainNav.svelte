<script>
import Dev from "./components/Dev.svelte";

</script>
<nav>
    <div><a href="#/">Strona główna</a></div>
    <div><a href="#/experience">Doświadczenie</a></div>
    <div><a href="#/projects">Projekty</a></div>
    <Dev><div><a href="#/testIcons">TestIcons</a></div></Dev>
</nav>

<style>
    nav {
        padding: 10px 0px;
        font-size: 1.5em;
        display: flex;
        list-style: none;
        justify-content: space-around;
    }
    a {
        color: black;
    }
    a:hover {
        color: grey;
    }
</style>
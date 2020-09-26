<script lang="ts">
    import Dev from './components/Dev.svelte';
import IconSVG from './components/IconSVG.svelte';

</script>

<b>Kontakt:</b>
<div style="margin-top: 2px">
    <Dev><small><i>dodaj ikony przed mailem i telefonem, sciagnij pakiet ikon</i></small></Dev>
    <div class="footer-elem">
        <!-- <IconSVG d={mailOutline} color="black" filled /> -->
        dariusz.czepiel@protonmail.com
    </div>
    <div class="footer-elem">
        <!-- <IconSVG d={call} color="black" filled /> -->
        +48 794 075 281
    </div>
    <small><i>linki do portali (linkedin, github)</i></small>
</div>

<style>
    .footer-elem{
		padding: 2px 0px;
	}
</style>
<script lang="ts">
    import IconSVG from '../components/IconSVG.svelte';
    import { fastFoodSharp } from 'ionicons/icons';
    import { plusIcon, searchIcon, bellIcon, userIcon } from '../icons/icons';
    import IconSvg from '../components/IconSVG.svelte';

    console.log(fastFoodSharp);

</script>

<div>
    <p>Test svg</p>
        <IconSVG size={"1.5em"} d={plusIcon} fill="lightgrey"/>
        <IconSVG size={"5em"} d={searchIcon} fill="lightgrey" stroke="black" />
        <IconSVG d={bellIcon} fill="lightgrey" />
        <IconSVG d={userIcon} fill="lightgrey" />
        <div>
            <img src={fastFoodSharp} width="50px" height="50px" alt="fast food" />
        </div>
        <div>
            <IconSVG d={fastFoodSharp} size={"5em"} stroke="red" strokeWidth="10" fill="lightgrey" />
        </div>
</div>
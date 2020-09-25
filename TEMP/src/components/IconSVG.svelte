<script lang="ts">
    export let filled: boolean = false;

    export let color = "#4A5568";
    export let stroke = color;
    export let fill = filled ? color : "none"

    export let size = '1em';
    export let strokeWidth = "2";

    let paths: string[];
    let viewBox = "0 0 24 24";

    //default heart icon
    export let d = "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
    if(/data:image/.test(d))
    {
        //get viewbox params
        const viewboxMatch = d.match(/(?<=viewBox=')[^']+(?=')/g);
        if(viewboxMatch)
            viewBox = viewboxMatch[0];
            // console.log(viewboxMatch);

        //get path params
        const pathMatch = d.match(/(?<=d=')[^']+(?=')/g);
        if(pathMatch)
            paths = pathMatch.map((m, i) => m);
        // pathMatch.forEach((match, groupIndex) => {
        //     console.log(match);
        // })
    }
    else
    paths = [d];

</script>

<svg class="icon" width={size} height={size} {viewBox} {fill} xmlns="http://www.w3.org/2000/svg">
{#each paths as d}
    <path {d} {stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
{/each}
</svg>

<style>
.icon{
    position: relative;
    display:inline-block;
}
</style>
<script lang="ts">
    import IconSVG from '../components/IconSVG.svelte';
    import { fastFoodSharp } from 'ionicons/icons';
    import { plusIcon, searchIcon, bellIcon, userIcon } from '../icons/icons';
import IconSvg from '../components/IconSVG.svelte';

    //wyciagnij co jest w znaczniku d do stringa
    //const test = /(?<=path d=')[^']+(?=')/g.exec(fastFoodSharp);
    console.log(fastFoodSharp);
    // const pathMatch = fastFoodSharp.match(/(?<=path d=')[^']+(?=')/g);
    // pathMatch.forEach((match, groupIndex) => {
    //     console.log(match);
    // })
    //const test = "";
</script>

<div>
    <h2>Tutaj beda projekty</h2>
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
</div>

<!-- <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="red"
      d="M 10,30
         A 20,20 0,0,1 50,30
         A 20,20 0,0,1 90,30
         Q 90,60 50,90
         Q 10,60 10,30 z" />
  </svg> 
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <title>ionicons-v5-p</title>
    <line x1="118" y1="304" x2="394" y2="304" 
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"/>
    <line x1="118" y1="208" x2="394" y2="208" 
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"/>
</svg>
-->
export const clickAway = (func: () => void, targetSelectors: string[]) =>
    (e: MouseEvent) => {
        const t = e.target as Element;
        console.log(t);
        if(targetSelectors.some(s => 
            {console.log(s); return t.closest(s);}
            ))
            return;
        /*for(let s of targetSelectors)
            if(t.closest(s))
                return;*/
        func();
    };
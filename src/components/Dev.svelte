<script>
    const isProd = __myapp.env.isProd;
    console.log(isProd);
</script>

{#if !isProd}
    <div> test </div>
{/if}
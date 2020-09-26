<script>
    const isProd = __myapp?.env?.isProd ?? true;
    console.log(__myapp.env.isProd);
</script>

{#if !isProd}
    <div> test </div>
{/if}
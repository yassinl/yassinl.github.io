<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    export let children;
</script>

<Navbar />

{@render children()}




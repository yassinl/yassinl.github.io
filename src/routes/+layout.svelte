<script lang="ts">
    import '../app.css';
    import Navbar from '../lib/components/Navbar.svelte';
    export let children;
</script>

<Navbar />
{@render children()}

<script lang="ts">
    import { base } from '$app/paths';
  
    export let links = [
      { href: `${base}/`, text: 'Home' },
      { href: `${base}/bp_cuff`, text: 'bp_cuff' },
      { href: `${base}/contact`, text: 'contact' },
      { href: `${base}/about`, text: 'about' }
    ];
  </script>
<nav class="navbar">
    <ul>
        {#each links as link}
            <li><a href={link.href}>{link.text}</a></li>
        {/each}
    </ul>
</nav>

<style>
    .navbar {
        padding: 1rem;
        text-align: center;
        background-color: #36393f; /* Lighter dark background */
    }
    .navbar ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;
        justify-content: center;
    }
    .navbar a {
        color: white; /* Inherit color from navbar */
        text-decoration: none;
        font-size: 125%;
    }
    .navbar a:hover {
        text-decoration: underline;
    }
</style>
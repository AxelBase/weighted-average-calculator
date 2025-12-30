<script lang="ts">
    import { base } from '$app/paths';
    import { fly } from 'svelte/transition';
    import '../app.css';

    const paypalUsername = 'AxelLab427';
    const donationAmounts = [1, 3, 5, 10];
    let isDropdownOpen = false;

    function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
    function closeDropdown() { isDropdownOpen = false; }

    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        };
        document.addEventListener('click', handleClick, true);
        return {
            destroy() { document.removeEventListener('click', handleClick, true); }
        };
    }

    const currentYear = new Date().getFullYear();
</script>

<header class="custom-navbar sticky-top">
    <nav class="container d-flex justify-content-between align-items-center py-3">
        
        <div class="d-flex align-items-center gap-3">
            <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none">
                <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 40px; width: 40px;" />
                <span class="brand-name">AxelBase</span>
            </a>

            <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
                <button class="btn-bubbly btn-primary-red d-flex align-items-center gap-2" on:click={toggleDropdown}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20,8H4V6H20V8M20,10H4V12H20V10M20,14H4V16H20V14M20,18H4V20H20V18Z" /></svg>
                    Buy me a coffee
                </button>

                {#if isDropdownOpen}
                    <div class="coffee-dropdown" transition:fly={{ y: -10, duration: 250 }}>
                        {#each donationAmounts as amount}
                            <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" rel="noopener noreferrer" on:click={closeDropdown}>
                                ${amount}
                            </a>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>

        <ul class="nav-links d-none d-md-flex align-items-center gap-4 m-0 p-0">
            <li><a href="{base}/">Home</a></li>
            <li><a href="{base}/#about">About</a></li>
            <li><a href="{base}/#how-to-use">How to use</a></li>
            <li><a href="{base}/#faq">FAQ</a></li>
            <li><a href="{base}/blog" class="blog-pill">Blog</a></li>
        </ul>
    </nav>
</header>

<main>
    <slot />
</main>

<footer class="fixed-bottom custom-footer">
    <div class="container d-flex justify-content-between align-items-center py-3">
        <span>© AxelBase Weighted Average Calculator – {currentYear}</span>
        <div class="d-flex gap-4">
            <a href="{base}/privacy">Privacy Policy</a>
            <a href="{base}/terms">Terms of Service</a>
        </div>
    </div>
</footer>

<style>
    .custom-navbar {
        background: var(--glass-effect);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(120, 31, 25, 0.1);
        z-index: 1000;
    }

    .brand-name {
        font-weight: 800;
        font-size: 1.5rem;
        color: var(--primary-red);
    }

    .nav-links { list-style: none; }
    .nav-links a {
        text-decoration: none;
        color: var(--text-dark);
        font-weight: 600;
        transition: color 0.3s;
    }
    .nav-links a:hover { color: var(--primary-red); }

    .blog-pill {
        background: var(--primary-red);
        color: white !important;
        padding: 5px 15px;
        border-radius: 20px;
    }

    .coffee-dropdown {
        position: absolute;
        top: 55px;
        left: 0;
        background: white;
        border-radius: 15px;
        box-shadow: var(--shadow-soft);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        min-width: 120px;
        z-index: 10;
    }

    .coffee-dropdown a {
        padding: 12px 20px;
        text-decoration: none;
        color: var(--text-dark);
        transition: background 0.2s;
        text-align: center;
        font-weight: 600;
    }

    .coffee-dropdown a:hover {
        background: #fff0ef;
        color: var(--primary-red);
    }

    .custom-footer {
        background: var(--primary-red);
        color: white;
        font-size: 0.9rem;
        position: relative;
    }

    .custom-footer a {
        color: rgba(255,255,255,0.8);
        text-decoration: none;
    }
</style>
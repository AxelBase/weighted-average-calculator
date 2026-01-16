<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  const currentYear = new Date().getFullYear();

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
</script>

<header class="custom-navbar sticky-top">
  <nav class="container d-flex justify-content-between align-items-center py-3">
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 40px; width: 40px;" />
        <span class="brand-name">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="btn-bubbly btn-primary-red d-flex align-items-center gap-2"
          on:click={toggleDropdown}
          aria-label="Support AxelBase"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div
            class="coffee-dropdown"
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Big Thanks
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="custom-amount bitcoin-option"
            >
              Bitcoin / Crypto
            </a>
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
  /* ── Existing styles from File 2 ── */
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

  .nav-links {
    list-style: none;
  }
  .nav-links a {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 600;
    transition: color 0.3s;
  }
  .nav-links a:hover {
    color: var(--primary-red);
  }

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
    border-radius: 16px;
    box-shadow: var(--shadow-soft);
    min-width: 220px;
    overflow: hidden;
    z-index: 10;
  }

  .coffee-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
  }

  .coffee-dropdown a:hover {
    background: #fff0ef;
    color: var(--primary-red);
    padding-left: 28px;
  }

  .coffee-dropdown .amount {
    font-weight: 800;
    color: var(--primary-red);
    font-size: 1.15rem;
    min-width: 50px;
  }

  .coffee-dropdown .custom-amount {
    font-weight: 700;
    color: var(--primary-red);
    border-top: 1px solid #eee;
    justify-content: center !important;
    padding: 14px 20px;
  }

  .bitcoin-option {
    background: linear-gradient(135deg, #f7931a 0%, #f5b041 100%);
    color: white !important;
    margin-top: 4px;
    border-radius: 0 0 16px 16px;
  }

  .bitcoin-option:hover {
    background: linear-gradient(135deg, #e67e22 0%, #d4a017 100%) !important;
    color: white !important;
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
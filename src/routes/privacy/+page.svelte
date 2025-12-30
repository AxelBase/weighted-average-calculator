<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Weighted Average Calculator</title>
  <meta name="description" content="Read our Privacy Policy to understand how the Weighted Average Calculator protects your privacy with a fully client-side, no-data-collection approach." />
  <meta property="og:title" content="Privacy Policy | Weighted Average Calculator" />
  <meta property="og:description" content="Read our Privacy Policy to understand how the Weighted Average Calculator protects your privacy with a fully client-side, no-data-collection approach." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 30, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Weighted Average Calculator</strong>, a free, open-source web utility that helps investors and traders calculate their true average entry price across multiple purchases. This tool operates entirely in your browser with a <strong>strict privacy-first design</strong>. We collect <strong>no personal data whatsoever</strong>, and all calculations happen locally on your device. This Privacy Policy explains our approach in full transparency so you can use the tool with complete confidence.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The Weighted Average Calculator is built to function without gathering any information from users. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal identifiers</strong> such as names, email addresses, phone numbers, or account details.</li>
      <li><strong>Device or usage data</strong> including IP addresses, browser type, operating system, or location information.</li>
      <li><strong>Input data</strong> – all prices, quantities, and entries you provide are processed exclusively in your browser and never transmitted anywhere.</li>
      <li><strong>Analytics or tracking data</strong> – we do not use cookies, Google Analytics, pixels, fingerprints, or any monitoring tools.</li>
    </ul>
    <p>Because the entire application is <strong>client-side and stateless</strong>, your data never leaves your device.</p>

    <h2>3. How the Tool Operates</h2>
    <p>When you use the calculator:</p>
    <ul>
      <li><strong>All processing is local</strong> – JavaScript performs validation, addition/removal of entries, and weighted average computation directly in the browser.</li>
      <li><strong>No network requests</strong> – beyond loading the initial page and Bootstrap CDN assets, no data is sent to any server.</li>
      <li><strong>Temporary memory only</strong> – entered values exist only in browser memory during your session and are cleared on reset or page reload.</li>
    </ul>
    <p>This architecture ensures <strong>absolute data isolation</strong> and makes the tool safe for sensitive financial calculations.</p>

    <h2>4. Third-Party Services</h2>
    <p>The only external resource loaded is Bootstrap CSS and JS from a public CDN for styling and basic interactivity. These resources do not track users or collect data in this context. No advertising, analytics, or social media integrations are present.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>We <strong>do not use cookies</strong>, localStorage persistence, session storage beyond the current page, or any tracking technologies. Your experience is completely anonymous and stateless.</p>

    <h2>6. Data Security</h2>
    <p>Since no data is transmitted or stored by us, the primary security responsibility lies with your device and browser. We recommend keeping your browser updated and using the tool on trusted devices.</p>

    <h2>7. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly collect any information from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may update this Privacy Policy occasionally. Any changes will be reflected on this page with a new effective date.</p>

    <h2>9. Contact</h2>
    <p>For questions about this policy, please open an issue on our public GitHub repository.</p>

    <p class="italic-note">Your privacy is our priority. By using a fully client-side tool, we ensure that your financial inputs remain yours alone.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>
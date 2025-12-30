<!-- Updated src/routes/terms/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Weighted Average Calculator</title>
  <meta name="description" content="Review the Terms and Conditions for using the Weighted Average Calculator, a free client-side tool for investment calculations." />
  <meta property="og:title" content="Terms and Conditions | Weighted Average Calculator" />
  <meta property="og:description" content="Review the Terms and Conditions for using the Weighted Average Calculator, a free client-side tool for investment calculations." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 30, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Weighted Average Calculator</strong> (the "Tool"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Tool. The Tool is provided free of charge as a client-side web utility for calculating weighted average entry prices.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool allows users to input multiple purchase prices and quantities to compute a weighted average entry price, total cost, and total quantity. All processing occurs locally in your browser. We do not provide financial, investment, or tax advice. Results are for informational and educational purposes only.</p>

    <h2>3. Use of the Tool</h2>
    <p>You may use the Tool for personal, non-commercial purposes. Permitted uses include:</p>
    <ul>
      <li>Calculating average entry prices for stocks, cryptocurrency, or other assets.</li>
      <li>Learning about weighted average concepts through provided examples.</li>
      <li>Accessing blog content and educational resources.</li>
    </ul>
    <p>You agree not to misuse the Tool, including attempting to overwhelm the hosting service or modify the client-side code for malicious purposes.</p>

    <h2>4. No Warranties and Disclaimer</h2>
    <p>The Tool is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, express or implied. While we strive for accuracy in the underlying mathematical formula, <strong>we are not responsible for any calculation errors, inaccuracies, or omissions</strong> that may occur due to user input, browser limitations, or unforeseen edge cases.</p>
    <p><strong>This Tool is not a final or professional-grade product.</strong> It is an open-source educational utility offered for convenience. We make no guarantee of:</p>
    <ul>
      <li>Absolute accuracy or completeness of calculations.</li>
      <li>Uninterrupted or error-free operation.</li>
      <li>Suitability for any specific investment, trading, or financial decision.</li>
    </ul>
    <p><strong>Users must independently verify all results and should not rely solely on this Tool for financial decisions.</strong> Always double-check calculations manually or with trusted professional tools before acting on the output.</p>

    <h2>5. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we, our developers, contributors, and hosting providers shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from your use of the Tool. This includes, but is not limited to, financial losses resulting from incorrect calculations, misinterpretation of results, or investment decisions based on the Tool's output.</p>
    <p>You acknowledge that you use the Tool at your own risk and assume full responsibility for any outcomes.</p>

    <h2>6. Intellectual Property</h2>
    <p>The Tool's source code, design, and content are open-source and available on GitHub under an appropriate license. You may fork, modify, or redistribute according to the license terms, but commercial resale of the Tool as a proprietary product is prohibited.</p>

    <h2>7. Third-Party Links</h2>
    <p>The Tool may contain links to external sites (e.g., GitHub repository). We are not responsible for the content or practices of third-party websites.</p>

    <h2>8. Changes to Terms</h2>
    <p>We reserve the right to modify these Terms at any time. Continued use after changes constitutes acceptance of the new terms.</p>

    <h2>9. Governing Law</h2>
    <p>These Terms shall be governed by general internet usage principles and applicable open-source practices.</p>

    <h2>10. Contact</h2>
    <p>For questions regarding these Terms, please open an issue on our public GitHub repository.</p>

    <p class="italic-note">Thank you for using the Weighted Average Calculator. We provide this tool to help the investment community, but remind all users to verify results independently and use professional judgment in financial matters.</p>
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
<!-- src/routes/blog/posts/post3/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How Multiple Buys Affect Your Average Entry Price | Blog</title>
  <meta name="description" content="Explore how adding new purchases at different prices changes your overall weighted average entry price and influences your investment strategy." />
  <meta property="og:title" content="How Multiple Buys Affect Your Average Entry Price | Blog" />
  <meta property="og:description" content="Explore how adding new purchases at different prices changes your overall weighted average entry price and influences your investment strategy." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How Multiple Buys Affect Your Average Entry Price</p>
  </div>

  <article class="prose">
    <h1>How Multiple Buys Affect Your Average Entry Price</h1>
   
    <p class="post-meta">Published: December 30, 2025</p>
   
    <p>When you purchase the same asset multiple times at varying prices, each new transaction shifts your overall weighted average entry price. The direction and magnitude of that shift depend on both the price of the new buy and its size relative to your existing position.</p>
   
    <p>Understanding these dynamics helps you make intentional decisions rather than reacting emotionally to market movements.</p>
   
    <h2>Buying Below Current Average (Averaging Down)</h2>
    <p>If you buy additional units at a price lower than your current weighted average, your overall average decreases. The more units you buy at the lower price, the greater the reduction. This strategy, known as averaging down, can improve your breakeven point if you believe the asset is undervalued.</p>
   
    <p>For example, if your current average is $100 across 50 units and you buy 50 more at $80, your new average becomes $90. The larger lower-priced purchase pulls the average down significantly.</p>
   
    <h2>Buying Above Current Average (Averaging Up)</h2>
    <p>Conversely, purchasing at a price higher than your current average raises the overall cost basis. This often happens when conviction increases as price rises. While it increases your breakeven point, it can still be profitable if momentum continues.</p>
   
    <p>Using the same starting position of $100 average on 50 units, adding 20 units at $120 raises the new average to approximately $104. The smaller size limits the upward movement.</p>
   
    <h2>Size Matters More Than Price Difference</h2>
    <p>The quantity of the new purchase has a greater impact than the price deviation alone. A small buy at a drastically different price moves the average only slightly, while a large buy even at a modest difference can shift it substantially.</p>
   
    <h2>Strategic Implications</h2>
    <p>Before executing any additional purchase, calculate the resulting new average. This reveals whether the trade truly aligns with your goals. It prevents unintentionally raising your cost basis too high or diluting gains from earlier favorable entries.</p>
   
    <h2>Practical Scenarios</h2>
    <ul>
      <li>Dollar-cost averaging: Regular fixed-amount buys naturally create a weighted average over time</li>
      <li>Dip buying: Larger purchases during temporary pullbacks lower average effectively</li>
      <li>Scaling in: Gradual position building lets you observe how each layer affects overall cost</li>
      <li>Rebalancing: Adjusting position size while monitoring average impact</li>
    </ul>
   
    <h2>Monitoring Over Time</h2>
    <p>Each new transaction rewrites your cost basis. Keeping an up-to-date weighted average provides clarity amid market noise and prevents anchoring to any single purchase price.</p>
   
    <p>By understanding exactly how multiple buys interact with your existing average, you gain greater control over risk and reward in every position.</p>
   
    <p class="italic-note">Every new purchase is an opportunity to intentionally shape your average entry price.</p>
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

  .prose h1, .prose h2  {
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
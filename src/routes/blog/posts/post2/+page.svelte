<!-- src/routes/blog/posts/post2/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding the Weighted Average Formula | Blog</title>
  <meta name="description" content="Dive deep into the mathematics behind weighted average entry price calculation and see why it provides the most accurate cost basis for multiple purchases." />
  <meta property="og:title" content="Understanding the Weighted Average Formula | Blog" />
  <meta property="og:description" content="Dive deep into the mathematics behind weighted average entry price calculation and see why it provides the most accurate cost basis for multiple purchases." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding the Weighted Average Formula</p>
  </div>

  <article class="prose">
    <h1>Understanding the Weighted Average Formula</h1>
   
    <p class="post-meta">Published: December 30, 2025</p>
   
    <p>The weighted average entry price is calculated using a straightforward yet essential formula that accounts for both the price and quantity of each purchase. The core idea is simple: larger purchases should influence the overall average more than smaller ones.</p>
   
    <p>The mathematical formula is: Weighted Average = Total Cost ÷ Total Quantity, where Total Cost is the sum of (Price × Quantity) for every individual purchase.</p>
   
    <h2>Breaking Down the Formula</h2>
    <p>For each buy transaction, multiply the price paid by the number of units acquired. Add up all these individual costs to get the total amount invested. Separately sum all quantities purchased. Finally divide total cost by total quantity to arrive at the weighted average price per unit.</p>
   
    <p>This approach ensures the result reflects the true economic cost of your position rather than treating every transaction as equal regardless of size.</p>
   
    <h2>Example Calculation</h2>
    <p>Suppose you buy 10 shares at $50, then later buy 20 shares at $60, and finally 5 shares at $45. First calculate each cost: 10 × 50 = 500, 20 × 60 = 1200, 5 × 45 = 225. Total cost becomes 500 + 1200 + 225 = 1925. Total quantity is 10 + 20 + 5 = 35 shares. The weighted average is 1925 ÷ 35 = 55 exactly.</p>
   
    <p>Your true average entry price is $55 per share, meaning the stock needs to reach above $55 for you to realize a profit on the entire position.</p>
   
    <h2>Why Not Use Simple Average</h2>
    <p>A common mistake is taking the simple arithmetic average of the prices: (50 + 60 + 45) ÷ 3 = 51.67. This seems lower, but it is misleading because the largest purchase was at the highest price. The simple average underweights the impact of the bigger investment, giving an unrealistically optimistic view of your cost basis.</p>
   
    <h2>Edge Cases Handled</h2>
    <p>Good calculators automatically manage edge cases. If all quantities are zero, the average returns zero to avoid division errors. Invalid inputs like negative prices or quantities are flagged before calculation proceeds, ensuring reliable output every time.</p>
   
    <h2>Precision Matters</h2>
    <p>Prices and quantities often include decimals, especially in cryptocurrency or fractional shares. The formula handles high precision naturally, and results are typically shown to four decimal places for clarity without excessive rounding error.</p>
   
    <h2>Real-World Application</h2>
    <p>Whenever you add a new position, simply input the latest price and quantity alongside previous entries. The updated weighted average instantly reflects your new cost basis, helping you decide whether further purchases make strategic sense.</p>
   
    <p>Mastering this formula removes guesswork and provides a solid foundation for position management across any asset class.</p>
   
    <p class="italic-note">The weighted average formula is the gold standard for accurate cost basis calculation in investing.</p>
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

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>
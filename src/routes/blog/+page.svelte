
## src/routes/blog/+page.svelte  (Blog Index Page)

```svelte
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What is a Weighted Average Entry Price Calculator?', description: 'An introduction to the tool and why accurately calculating your average entry price matters for stocks and crypto investments.' },
    { href: '/blog/posts/post2', title: 'Understanding the Weighted Average Formula', description: 'A clear breakdown of the mathematical formula behind the calculator: total cost divided by total quantity.' },
    { href: '/blog/posts/post3', title: 'How Multiple Buys Affect Your Average Entry Price', description: 'Explore how adding new positions at different prices impacts your overall weighted average cost basis.' },
    { href: '/blog/posts/post4', title: 'Averaging Down: Lowering Your Entry Price Strategically', description: 'Learn when and how buying more at lower prices reduces your average entry and improves breakeven points.' },
    { href: '/blog/posts/post5', title: 'Common Edge Cases and Validation Rules', description: 'Handling zero quantities, negative values, and why input validation ensures reliable results.' },
    { href: '/blog/posts/post6', title: 'Comparing Weighted Average vs. Simple Arithmetic Average', description: 'Why a simple average of prices is misleading and how weighted averaging gives the true cost basis.' },
    { href: '/blog/posts/post7', title: 'Using the Calculator in Real Trading Scenarios', description: 'Practical examples for stock traders, crypto holders, and anyone managing multiple manual buys.' },
  ];
</script>

<svelte:head>
  <title>Blog | Weighted Average Calculator Insights</title>
  <meta name="description" content="Articles, guides, and explanations about weighted average entry price calculation for stocks, crypto, and investments." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Weighted Average Insights</h1>
    <p class="subtitle">
      In-depth articles explaining the concepts, mathematics, and practical uses of weighted average entry price calculation. Perfect for traders and investors managing multiple buys in stocks or cryptocurrency.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>
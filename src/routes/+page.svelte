<script>
    import { base } from '$app/paths';
    import { validateEntry, calculateWeightedAverage, prepareEntriesForReset } from '$lib/calculatorLogic';
    import { fade } from 'svelte/transition';

    let entries = prepareEntriesForReset();
    let result = null;
    let errors = [];

    function addEntry() {
        if (entries.length >= 50) {
            alert('Maximum 50 entries allowed.');
            return;
        }
        entries = [...entries, { price: '', quantity: '' }];
        errors = [...errors, ''];
    }

    function removeEntry(index) {
        entries = entries.filter((_, i) => i !== index);
        errors = errors.filter((_, i) => i !== index);
    }

    function validateAndCalculate() {
        errors = entries.map((entry) => {
            if (!validateEntry(entry.price, entry.quantity)) {
                return 'Invalid price or quantity.';
            }
            return '';
        });

        if (errors.some(err => err !== '')) {
            result = null;
            return;
        }
        result = calculateWeightedAverage(entries);
    }

    function reset() {
        entries = prepareEntriesForReset();
        result = null;
        errors = [];
    }
</script>

<!-- Main page meta tags (add to <svelte:head> in src/routes/+page.svelte or +layout.svelte) -->
<svelte:head>
  <title>Weighted Average Calculator | Free Tool for Stocks & Crypto Entry Price</title>
  <meta name="description" content="Free, privacy-focused weighted average calculator for investors and traders. Instantly compute your true entry price across multiple buys in stocks, crypto, or any asset. No data collection, fully client-side." />
  <meta name="keywords" content="weighted average calculator, entry price calculator, stock average calculator, crypto average cost, dollar cost averaging tool, investment calculator" />
  <meta name="robots" content="index, follow" />
  
  <meta property="og:title" content="Weighted Average Calculator | Free Tool for Stocks & Crypto Entry Price" />
  <meta property="og:description" content="Free, privacy-focused weighted average calculator for investors and traders. Instantly compute your true entry price across multiple buys in stocks, crypto, or any asset. No data collection, fully client-side." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{base}/" />
  <meta property="og:site_name" content="Weighted Average Calculator" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Weighted Average Calculator | Free Tool for Stocks & Crypto Entry Price" />
  <meta name="twitter:description" content="Free, privacy-focused weighted average calculator for investors and traders. Instantly compute your true entry price across multiple buys." />
  
  <link rel="canonical" href="{base}/" />
</svelte:head>

<div class="container mt-5">
    <section id="calculator" class="mb-5">
        <div class="text-center mb-5">
            <h1 class="display-4 fw-bold" style="color: var(--primary-red)">Weighted Average Calculator</h1>
            <p class="text-muted">Effortless calculations with a touch of elegance.</p>
        </div>
        
        <div class="card p-4 p-md-5">
            <form on:submit|preventDefault={validateAndCalculate}>
                {#each entries as entry, index}
                    <div class="row mb-3 align-items-end" in:fade>
                        <div class="col-md-4">
                            <label for="price-{index}" class="form-label small fw-bold">Price ($)</label>
                            <input type="number" class="form-control rounded-pill" id="price-{index}" bind:value={entry.price} min="0" step="0.0001" required />
                        </div>
                        <div class="col-md-4">
                            <label for="quantity-{index}" class="form-label small fw-bold">Quantity</label>
                            <input type="number" class="form-control rounded-pill" id="quantity-{index}" bind:value={entry.quantity} min="0" step="0.0001" required />
                        </div>
                        <div class="col-md-4 mt-3 mt-md-0 d-flex gap-2">
                            <button type="button" class="btn btn-outline-danger rounded-pill flex-grow-1" on:click={() => removeEntry(index)} disabled={entries.length === 1}>Remove</button>
                            {#if index === entries.length - 1}
                                <button type="button" class="btn btn-bubbly btn-primary-red flex-grow-1" on:click={addEntry}>Add Entry</button>
                            {/if}
                        </div>
                    </div>
                    {#if errors[index]}
                        <div class="text-danger small mb-3 px-3">{errors[index]}</div>
                    {/if}
                {/each}
                
                <hr class="my-4 opacity-10">

                <div class="d-flex justify-content-center gap-3">
                    <button type="submit" class="btn-bubbly btn-primary-red px-5">Calculate Now</button>
                    <button type="button" class="btn btn-outline-secondary rounded-pill px-4" on:click={reset}>Reset</button>
                </div>
            </form>
            
            {#if result}
                <div class="mt-5 p-4 rounded-4" style="background: #fffafa; border: 2px dashed var(--primary-red);" transition:fade>
                    <h3 class="mb-4 fw-bold" style="color: var(--primary-red)">Results</h3>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <div class="small text-muted">Avg Price</div>
                            <div class="fs-4 fw-bold">{result.average}</div>
                        </div>
                        <div class="col-md-4 border-start border-end">
                            <div class="small text-muted">Total Quantity</div>
                            <div class="fs-4 fw-bold">{result.totalQuantity}</div>
                        </div>
                        <div class="col-md-4">
                            <div class="small text-muted">Total Cost</div>
                            <div class="fs-4 fw-bold">${result.totalCost}</div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </section>

<section id="about" class="section-padding">
  <h2 class="fw-bold mb-4">About the Weighted Average Calculator</h2>
  <p class="lead">The Weighted Average Calculator is a free, open-source, privacy-first web tool designed specifically for investors and traders who manage multiple purchases of the same asset over time.</p>
  
  <p>Whether you're building a long-term stock position through dollar-cost averaging, actively trading cryptocurrency during volatile periods, or scaling into any investment gradually, knowing your true average entry price is essential for sound decision-making. This tool eliminates guesswork by accurately calculating your weighted average cost basis, total invested capital, and total units held.</p>
  
  <p>Unlike simple arithmetic averages that treat every purchase equally regardless of size, the weighted average properly accounts for the quantity bought at each price point. This reflects your actual economic exposure and provides the correct breakeven point for your entire position.</p>
  
  <p>The calculator was built with simplicity and privacy in mind. All computations happen entirely in your browser—no data is sent to any server, no cookies are used, and no personal information is collected. You can use it confidently even with sensitive financial figures.</p>
  
  <p>Key features include dynamic addition and removal of purchase entries (up to 50), real-time input validation to catch errors early, precise handling of decimal values, and clear display of results including weighted average price, total quantity, and total cost—all formatted to four decimal places for clarity.</p>
  
  <p>Whether you're a beginner learning about cost basis or an experienced trader managing complex positions, this tool provides instant, reliable calculations without the need for spreadsheets or manual formulas. It's particularly valuable during market dips when averaging down, or when scaling into winning positions while monitoring your evolving average.</p>
  
  <p>By focusing solely on accurate weighted averaging without unnecessary features, the tool delivers fast, trustworthy results every time. It's completely free to use, with no accounts, no ads, and no tracking. The source code is publicly available for transparency and community contributions.</p>
  
  <p>Our goal is to empower investors with clear, precise information about their positions so they can make better-informed decisions based on real cost basis rather than recent purchase prices or rough estimates.</p>
  
  <p class="italic-note mt-5">Accurate cost basis knowledge is one of the most powerful advantages any investor can have.</p>
</section>
<section id="how-to-use" class="section-padding border-top">
  <h2 class="fw-bold mb-4">How to Use the Weighted Average Calculator</h2>
  <p class="lead">Getting accurate results is straightforward. Follow these steps to calculate your true entry price across multiple purchases.</p>
  
  <div class="row g-4 mt-4">
    <div class="col-md-4">
      <div class="card p-4 h-100 shadow-sm">
        <h5 class="fw-bold text-primary">1. Start with Your First Purchase</h5>
        <p>The page loads with one empty row ready for input. Enter the price you paid for your initial buy in the "Price" field and the number of units acquired in the "Quantity" field. Both fields accept decimal values for precision (e.g., fractional shares or crypto amounts).</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card p-4 h-100 shadow-sm">
        <h5 class="fw-bold text-primary">2. Add Subsequent Purchases</h5>
        <p>Click the blue "Add Entry" button on the last row to create space for each additional transaction. Fill in the price and quantity for every buy you've made. You can add up to 50 entries—more than enough for even the most active traders. Use the red "Remove" button to delete any mistaken rows (disabled when only one row remains).</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card p-4 h-100 shadow-sm">
        <h5 class="fw-bold text-primary">3. Validate and Calculate</h5>
        <p>Click the green "Calculate" button when all entries are complete. The tool instantly validates inputs—flagging negative values, zero quantities in context, or non-numeric entries with clear per-row error messages. Once all data is valid, results appear below showing your weighted average price, total quantity held, and total capital invested.</p>
      </div>
    </div>
  </div>
  
  <div class="row g-4 mt-4">
    <div class="col-md-6">
      <div class="card p-4 shadow-sm">
        <h5 class="fw-bold text-primary">Tips for Best Results</h5>
        <ul class="mb-0">
          <li>Enter purchases chronologically or in any order—the math works the same.</li>
          <li>Use precise values including decimals for maximum accuracy.</li>
          <li>Include all transactions for a given asset to see your complete position average.</li>
          <li>Preview how a potential new buy would affect your average before executing.</li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card p-4 shadow-sm">
        <h5 class="fw-bold text-primary">Reset and Start Fresh</h5>
        <p>Click the gray "Reset" button anytime to clear all entries and results. This returns the calculator to its initial state with one empty row—perfect for calculating a different asset or starting over.</p>
        <p>All data exists only temporarily in your browser session and is never stored or transmitted.</p>
      </div>
    </div>
  </div>
  
  <p class="mt-5">The interface is fully responsive and works seamlessly on desktop, tablet, or mobile devices. No installation or account is required—just open and start calculating.</p>
  
  <p class="italic-note mt-5">With just a few clicks, you gain complete clarity on your true cost basis across any number of purchases.</p>
</section>
<section id="faq" class="section-padding border-top">
  <h2 class="fw-bold mb-4">Frequently Asked Questions</h2>
  
  <div class="accordion accordion-flush" id="faqAccordion">
    <div class="accordion-item rounded-3 mb-3 overflow-hidden border shadow-sm">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
          What exactly is a weighted average entry price?
        </button>
      </h2>
      <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">The weighted average entry price is your true average cost per unit when buying the same asset multiple times at different prices. It's calculated by multiplying each purchase price by its quantity, summing all costs, then dividing by total units purchased. This gives the accurate breakeven point for your entire position, unlike a simple average that ignores purchase size.</div>
      </div>
    </div>
    
    <div class="accordion-item rounded-3 mb-3 overflow-hidden border shadow-sm">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
          Why is weighted average better than simple average?
        </button>
      </h2>
      <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">Simple averaging treats every purchase equally regardless of how many units were bought, which distorts reality when position sizes vary. For example, buying 100 shares at $70 and 10 at $50 gives a simple average of $60, but your actual cost is much closer to $70. Weighted averaging correctly reflects your real capital allocation and matches how brokers calculate cost basis.</div>
      </div>
    </div>
    
    <div class="accordion-item rounded-3 mb-3 overflow-hidden border shadow-sm">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
          Is my data private and secure?
        </button>
      </h2>
      <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">Yes, completely. The entire tool runs client-side in your browser. No data is sent to any server, no cookies are used, and nothing is stored. Your inputs exist only temporarily in memory and are cleared on reset or page close. You can safely use it with real financial numbers.</div>
      </div>
    </div>
    
    <div class="accordion-item rounded-3 mb-3 overflow-hidden border shadow-sm">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
          Can I use this for cryptocurrency?
        </button>
      </h2>
      <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">Absolutely. The calculator works perfectly for crypto, fractional shares, NFTs bought in parts, or any asset allowing multiple purchases. It handles high-precision decimal values common in cryptocurrency trading.</div>
      </div>
    </div>
    
    <div class="accordion-item rounded-3 mb-3 overflow-hidden border shadow-sm">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
          How many purchase entries can I add?
        </button>
      </h2>
      <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">Up to 50 entries. This covers virtually all personal investing scenarios while maintaining smooth performance even on mobile devices. If you need more, consider splitting calculations by time period or asset.</div>
      </div>
    </div>
    
    <div class="accordion-item rounded-3 mb-3 overflow-hidden border shadow-sm">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
          Does this account for fees or taxes?
        </button>
      </h2>
      <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">No. The calculator focuses purely on purchase price and quantity for clean weighted averaging. To include fees, add them to your effective purchase price per transaction before inputting.</div>
      </div>
    </div>
    
    <div class="accordion-item rounded-3 mb-3 overflow-hidden border shadow-sm">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">
          Can I save my calculations?
        </button>
      </h2>
      <div id="faq7" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div class="accordion-body">Not automatically, as the tool is stateless for privacy. You can manually note results or take screenshots. For repeated use with the same asset, keep a simple record of your entries elsewhere.</div>
      </div>
    </div>
  </div>
  
  <p class="italic-note mt-5 text-center">Have more questions? Check our detailed blog articles or open an issue on GitHub.</p>
</section></div>

<style>
    /* Section specific styles */
    section {
        scroll-margin-top: 100px;
    }
</style>
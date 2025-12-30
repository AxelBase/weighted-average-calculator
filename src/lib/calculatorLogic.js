export function validateEntry(price, quantity) {
    const p = parseFloat(price);
    const q = parseFloat(quantity);
    return !isNaN(p) && p > 0 && !isNaN(q) && q > 0;
}

export function calculateWeightedAverage(entries) {
    let totalCost = 0;
    let totalQuantity = 0;

    for (const entry of entries) {
        const p = parseFloat(entry.price);
        const q = parseFloat(entry.quantity);
        if (!validateEntry(p, q)) continue; // Skip invalid entries (edge case handling)
        totalCost += p * q;
        totalQuantity += q;
    }

    if (totalQuantity === 0) {
        return { average: 0, totalQuantity: 0, totalCost: 0 }; // Handle division by zero
    }

    const average = totalCost / totalQuantity;
    return {
        average: average.toFixed(4), // Precision to 4 decimal places
        totalQuantity: totalQuantity.toFixed(4),
        totalCost: totalCost.toFixed(4)
    };
}

export function prepareEntriesForReset() {
    return [{ price: '', quantity: '' }]; // Initial empty entry for reset
}
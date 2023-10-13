function calculateProratedPrice() {
    const basePrice = 99; // $99/player/year
    const numPlayers = parseInt(document.getElementById('numPlayers').value, 10);
    const endDate = new Date(document.getElementById('endDate').value);
    const currentDate = new Date();
    const pricingTier = document.getElementById('pricingTier').value;

    let tierDiscount = 0;
    switch (pricingTier) {
        case 'tier1':
            tierDiscount = 0.25;
            break;
        case 'tier2':
            tierDiscount = 0.30;
            break;
        case 'tier3':
            tierDiscount = 0.35;
            break;
        default:
            tierDiscount = 0;
            break;
    }

    const discountedPrice = basePrice * (1 - tierDiscount);

    if (isNaN(numPlayers) || numPlayers <= 0 || endDate <= currentDate) {
        alert("Please fill out the fields correctly. Ensure the end date is in the future.");
        return;
    }

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const daysRemaining = Math.round(Math.abs((endDate - currentDate) / oneDay));

    const proratedPrice = (discountedPrice / 365) * daysRemaining * numPlayers;
    document.getElementById('price').innerText = proratedPrice.toFixed(2); // Display result with two decimal places
}

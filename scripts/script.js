function calculateProratedPrice() {
    const basePrice = 99; // $99/player/year
    const numPlayers = parseInt(document.getElementById('numPlayers').value, 10);
    const endDate = new Date(document.getElementById('endDate').value);
    endDate.setHours(0, 0, 0, 0); 

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    const pricingTier = document.getElementById('pricingTier').value;

    let discountedPrice = basePrice;
    let tierDiscount = 0;
    switch (pricingTier) {
        case 'tier1':
            discountedPrice = 74.25;
            tierDiscount = 0.25;
            break;
        case 'tier2':
            discountedPrice = 69.30;
            tierDiscount = 0.30;
            break;
        case 'tier3':
            discountedPrice = 64.35;
            tierDiscount = 0.35;
            break;
        default:
            discountedPrice = basePrice;
            tierDiscount = 0;
            break;
    }

    if (isNaN(numPlayers) || numPlayers <= 0 || endDate <= currentDate) {
        alert("Please fill out all the fields correctly. Ensure the end date is in the future.");
        return;
    }

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const daysRemaining = Math.round(Math.abs((endDate - currentDate) / oneDay));

    const proratedPrice = (discountedPrice / 365) * daysRemaining * numPlayers;

    // Populate the modal's breakdown elements
    document.getElementById('basePriceDisplay').innerText = `$${discountedPrice.toFixed(2)}`;
    document.getElementById('discountDisplay').innerText = `${(tierDiscount * 100).toFixed(2)}%`;
    document.getElementById('daysRemainingDisplay').innerText = `${daysRemaining} days`;
    document.getElementById('numPlayersDisplay').innerText = `${numPlayers}`;
    document.getElementById('modalPrice').innerText = `$${proratedPrice.toFixed(2)}`;
    
    // Show the modal
    $('#resultModal').modal('show');
}

const toggleButton = document.querySelector('.toggle-button');
const navList = document.querySelector('.nav-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

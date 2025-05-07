let currentQuote = 0;

const quotes = document.querySelectorAll('.quote-slide');
const totalQuotes = quotes.length;

function showQuote(index) {
    quotes.forEach((quote, i) => {
        quote.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % totalQuotes;
    showQuote(currentQuote);
}

function prevQuote() {
    currentQuote = (currentQuote - 1 + totalQuotes) % totalQuotes;
    showQuote(currentQuote);
}

// Initialize with the first quote
showQuote(currentQuote);

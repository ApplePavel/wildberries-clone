const form = document.querySelector('form');
const input = document.querySelector('input[name="search"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = input.value.trim().toLowerCase();

    if (searchTerm) {
        const cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            const cardName = card.querySelector('.name__brend').textContent.toLowerCase();

            if (cardName.includes(searchTerm)) {
                highlightCard(card);
                scrollToElement(card);
                return;
            }
        });
    }
});

function scrollToElement(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

function highlightCard(card) {
    card.classList.add('highlight');

    setTimeout(() => {
        card.classList.remove('highlight');
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    let noResultsMessage;

    function filterCards(searchTerm, cards) {
        cards.forEach(card => {
            const cardName = card.querySelector('.name__brend').textContent.toLowerCase();
            if (cardName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        const matchingCards = Array.from(cards).filter(card => card.style.display !== 'none');
        return matchingCards;
    }

    function showAllCards(cards) {
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const cards = document.querySelectorAll('.card');
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm === '') {
            showAllCards(cards);
            removeNoResultsMessage(); 
        } else {
            const matchingCards = filterCards(searchTerm, cards);
            if (matchingCards.length === 0) {
                removeNoResultsMessage();
                showNoResultsMessage(); 
            } else {
                removeNoResultsMessage();
            }
        }
    });

    // Периодическая проверка значения в строке поиска
    setInterval(() => {
        const cards = document.querySelectorAll('.card');
        const searchTerm = searchInput.value.trim();
        if (searchTerm === '') {
            showAllCards(cards);
            removeNoResultsMessage()
        }
    }, 1000);

    function showNoResultsMessage() {
        noResultsMessage = document.createElement('div');
        noResultsMessage.textContent = 'Ничего не найдено по запросу';
        noResultsMessage.className = 'no-results-message';
        document.querySelector('.cards__container').appendChild(noResultsMessage);
    }

    function removeNoResultsMessage() {
        if (noResultsMessage) {
            noResultsMessage.remove();
            noResultsMessage = null;
        }
    }
});

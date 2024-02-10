document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    let noResultsMessage; // Переменная для хранения элемента с сообщением о том, что ничего не найдено

    // Функция фильтрации карточек
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

    // Функция для показа всех карточек
    function showAllCards(cards) {
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }

    // Обработчик события отправки формы
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const cards = document.querySelectorAll('.card');
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm === '') {
            showAllCards(cards); // Если строка поиска пуста, показываем все карточки
            removeNoResultsMessage(); // Удаляем сообщение о том, что ничего не найдено, если оно было показано
        } else {
            const matchingCards = filterCards(searchTerm, cards);
            if (matchingCards.length === 0) {
                removeNoResultsMessage(); // Удаляем старое сообщение, если оно существует
                showNoResultsMessage(); // Показываем новое сообщение о том, что ничего не найдено
            } else {
                removeNoResultsMessage(); // Удаляем сообщение, если есть совпадения
            }
        }
    });

    // Периодическая проверка значения в строке поиска
    setInterval(() => {
        const cards = document.querySelectorAll('.card');
        const searchTerm = searchInput.value.trim();
        if (searchTerm === '') {
            showAllCards(cards); // Если строка поиска пуста, показываем все карточки
            removeNoResultsMessage(); // Удаляем сообщение о том, что ничего не найдено, если оно было показано
        }
    }, 1000); // Проверяем каждую секунду

    // Функция для показа сообщения о том, что ничего не найдено
    function showNoResultsMessage() {
        noResultsMessage = document.createElement('div');
        noResultsMessage.textContent = 'Ничего не найдено по запросу';
        noResultsMessage.className = 'no-results-message';
        document.querySelector('.cards__container').appendChild(noResultsMessage);
    }

    // Функция для удаления сообщения о том, что ничего не найдено
    function removeNoResultsMessage() {
        if (noResultsMessage) {
            noResultsMessage.remove();
            noResultsMessage = null;
        }
    }
});

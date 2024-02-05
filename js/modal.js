// modal.js

    const cardsContainer = document.querySelector('.cards__container');

    cardsContainer.addEventListener('click', (event) => {
        const clickedElement = event.target;

        if (clickedElement.tagName === 'IMG' && clickedElement.parentElement.classList.contains('card')) {
            const imageUrl = clickedElement.src;
            openModal(imageUrl);
        }
    });

    function openModal(imageUrl) {
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const modalImage = document.createElement('img');
        modalImage.src = imageUrl;
        modalImage.alt = 'Enlarge Image';

        const closeModalButton = document.createElement('button');
        closeModalButton.className = 'close-modal-button';
        closeModalButton.textContent = 'Закрыть';
        closeModalButton.addEventListener('click', closeModal);

        modalContent.appendChild(modalImage);
        modalContent.appendChild(closeModalButton);

        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);

        document.body.style.overflow = 'hidden';

    function closeModal() {
        const modalContainer = document.querySelector('.modal-container');
        modalContainer.remove();
        document.body.style.overflow = '';
    }
    }


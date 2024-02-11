// modal.js

    const cardsContainer = document.querySelector('.cards__container');

    cardsContainer.addEventListener('click', (event) => {
        const clickedElement = event.target;
        if (clickedElement.tagName === 'IMG' && clickedElement.parentElement.classList.contains('card')) {
            const imageUrl = clickedElement.src;
            const cardName = clickedElement.parentElement.name
            const cardRating = clickedElement.parentElement.rating
            const cardOldPrice = clickedElement.parentElement.oldPrice
            const cardSalePrice = clickedElement.parentElement.salePrice
            openModal(imageUrl, cardName, cardRating, cardOldPrice, cardSalePrice);
            
        }
    });
  
        function openModal(imageUrl, cardName, cardRating, cardOldPrice, cardSalePrice){
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const modalImage = document.createElement('img');
        modalImage.src = imageUrl;
        modalImage.alt = 'Enlarge Image';
        
        const modalInfoContaier = document.createElement('div');
        modalInfoContaier.className = 'modal-card__info'
        const modalPriceContainer = document.createElement('div');
        modalPriceContainer.className = 'price';
        const modalPriceSale = document.createElement('span');
        modalPriceSale.textContent = cardSalePrice;
        modalPriceSale.className = 'price__sale';
        const modalPriceOld = document.createElement('div');
        modalPriceOld.textContent = cardOldPrice;
        modalPriceOld.className = 'price__old';

        const modalNameContainer = document.createElement('div');
        modalNameContainer.className = 'name';
        const modalName = document.createElement('span');
        modalName.textContent = cardName;
        modalName.className = 'name__brend';


        const productRatingContainer = document.createElement('div');
        productRatingContainer.className = 'rating';
        const modalProductRating = document.createElement('span');
        modalProductRating.innerHTML = `${cardRating}`
        modalProductRating.className = ('rewiew')


        const cartButton = document.querySelector('.add-to-cart-button');
        const modalCartButton = cartButton.cloneNode(true);

        const closeModalButton = document.createElement('button');
        closeModalButton.className = 'close-modal-button';
        closeModalButton.addEventListener('click', closeModal);

        modalContent.append(modalImage, modalInfoContaier);
        modalInfoContaier.append(modalNameContainer, modalPriceContainer, productRatingContainer, modalCartButton)
        modalNameContainer.append(modalName);
        productRatingContainer.append(modalProductRating);
        modalPriceContainer.append(modalPriceSale, modalPriceOld);
        modalContent.appendChild(closeModalButton);
        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);

        document.body.style.overflow = 'hidden';

        function closeModal() {
            const modalContainer = document.querySelector('.modal-container');
            modalContainer.remove();
            document.body.style.overflow = '';
        }
        
        document.addEventListener('click', (event) => {
            const modalContainer = document.querySelector('.modal-container');
            if (event.target === modalContainer) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
    
    }
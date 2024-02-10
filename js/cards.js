const WILDBERRIES_URL = fetch('https://65b5321841db5efd2867694f.mockapi.io/wildberries');

WILDBERRIES_URL
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.querySelector('.cards__container');

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            const imageElement = document.createElement('img');
            imageElement.src = item.img;
            imageElement.alt = item.name;

            const priceElement = document.createElement('div');
            priceElement.className = 'price';

            const priceElementOld = document.createElement('span');
            priceElementOld.className = 'price__old';
            const oldPrice = parseFloat(item.price) + (parseFloat(item.price) * 0.15);
            priceElementOld.textContent = formatPrice(oldPrice);

            const priceElementSale = document.createElement('span');
            priceElementSale.className = 'price__sale';
            priceElementSale.textContent = formatPrice(item.price);

            const deliveryElement = document.createElement('h2');
            deliveryElement.className = 'delivery';
            deliveryElement.textContent = 'Завтра';

            const nameElement = document.createElement('div');
            nameElement.className = 'name';

            const brendElement = document.createElement('span');
            brendElement.className = 'name__brend';
            brendElement.textContent = item.name;

            const ratinginfoElement = document.createElement('div');
            ratinginfoElement.className = 'rating';

            const rewiew = document.createElement('span');
            rewiew.className = 'rewiew';
            ratinginfoElement.textContent = item.rating;

            const addToCartButton = document.createElement('button');
            addToCartButton.className = 'add-to-cart-button';
            addToCartButton.textContent = 'В корзину';
            addToCartButton.addEventListener('click', () => addToCart(item.id));

            card.id = item.id;
            card.name = item.name;
            card.oldPrice = oldPrice.toFixed(2);
            card.salePrice = item.price;
            card.rating = item.rating;

            card.appendChild(imageElement);
            priceElement.appendChild(priceElementSale);
            priceElement.appendChild(priceElementOld);
            card.appendChild(priceElement);
            card.appendChild(nameElement);
            nameElement.appendChild(brendElement);
            card.appendChild(ratinginfoElement);
            card.appendChild(addToCartButton);

            cardsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function addToCart(productId) {
    console.log(`Товар с ID ${productId} добавлен в корзину!`);
}

function formatPrice(price) {
    const rubles = Math.floor(price);
    const kop = Math.round((price - rubles) * 100);
    if (kop === 0) {
        return `${rubles} р.`;
    } else {
        return `${rubles},${kop}р.`;
    }
}

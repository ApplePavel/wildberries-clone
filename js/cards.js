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

                    const priceElement = document.createElement('p');
                    priceElement.className = 'price';
                    priceElement.textContent = `$${item.price}`;

                    const nameElement = document.createElement('h2');
                    nameElement.className = 'name';
                    nameElement.textContent = item.name;

                    const addToCartButton = document.createElement('button');
                    addToCartButton.className = 'add-to-cart-button';
                    addToCartButton.textContent = 'Добавить в корзину';
                    addToCartButton.addEventListener('click', () => addToCart(item.id));

                    card.appendChild(imageElement);
                    card.appendChild(priceElement);
                    card.appendChild(nameElement);
                    card.appendChild(addToCartButton);

                    cardsContainer.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        function addToCart(productId) {
            // Здесь можно выполнить запрос на сервер или эмулировать добавление в корзину
            console.log(`Товар с ID ${productId} добавлен в корзину!`);
        }
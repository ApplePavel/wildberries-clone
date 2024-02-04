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
                    priceElement.textContent = `$${item.price}`;
                    const priceElementOld=document.createElement('span');
                    priceElementOld.className='price__old'
                    priceElementOld.textContent = '10$';
                    const priceElementSale=document.createElement('span');
                    priceElementSale.className='price__sale'
                    priceElementSale.textContent = `$${item.price}`;
                    const priceElementActual=document.createElement('span');
                    priceElementActual.className='price__actual'
                    
                    const deliveryElement=document.createElement('h2')
                    deliveryElement.className='delivery'
                    deliveryElement.textContent='Завтра'

                    const nameElement = document.createElement('div');
                    nameElement.className = 'name';
                    const brendElement=document.createElement('span')
                    brendElement.className="name__brend"
                    brendElement.textContent = item.name;
                    const brendinfoElement=document.createElement('span')
                    brendinfoElement.className="brend__info"
                    brendinfoElement.textContent = item.name;

                    const ratinginfoElement=document.createElement('div')
                    ratinginfoElement.className='ratinginfo'
                    // const rating=document.createElement('span')
                    // rating.className='rating'
                    // rating.innerText= '5';
                    const rewiew=document.querySelector('.rewiew')
                    const rating=document.querySelector('.rating')
                    

                

                    const addToCartButton = document.createElement('button');
                    addToCartButton.className = 'add-to-cart-button';
                    addToCartButton.textContent = 'В корзину';
                    addToCartButton.addEventListener('click', () => addToCart(item.id));

                    card.appendChild(imageElement);
                    card.appendChild(priceElement);
                    priceElement.append (priceElementActual, priceElementSale,priceElementOld)
                    card.appendChild(nameElement);
                    nameElement.append(brendElement, brendinfoElement)
                    card.appendChild(ratinginfoElement);
                    ratinginfoElement.append(rating,rewiew)
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
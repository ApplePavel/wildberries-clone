const WILDBERRIES_URL = fetch('https://65b5321841db5efd2867694f.mockapi.io/wildberries');

WILDBERRIES_URL
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.querySelector('.cards__container');

        // Создание и перемешивание массива карточек
        const shuffledData = shuffleArray(data);

        // Отображение карточек на странице
        shuffledData.forEach(item => {
            const card = createCardElement(item);
            cardsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


function addToCart(product) {
    let i = 1
    const cart = {
        id : product.id,
        price: normalPrice(product.price),
        img : product.img,
        rating : product.rating,
        name : product.name,
        count : i
    }
    if(productsInCart.some(e=>e.id === cart.id)){
        const checkIdCart = el => el.id === cart.id
        const indexToReplace = productsInCart.findIndex(checkIdCart)
        if(indexToReplace !== -1){
        cart.count = productsInCart[indexToReplace].count++
        productsInCart.splice(indexToReplace,1,cart)
        }
  
    }else{
        productsInCart.push(cart)
    }
   displayCart()
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

// Функция для перемешивания массива
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// Функция для создания элемента карточки
function createCardElement(item) {
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
    addToCartButton.addEventListener('click', () => addToCart(item));

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

    return card;
}

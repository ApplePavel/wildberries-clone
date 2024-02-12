const modal = document.getElementById("cardsModal")
const productsInCart = []
const btnModal = document.querySelector(".header__icons-cart")
const btnModalMobile = document.getElementById('footerCart')

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
btnModal.addEventListener('click',() => modal.classList.add('modal--active'))
btnModalMobile.addEventListener('click',() => modal.classList.add('modal--active'))
modal.addEventListener('click', function(e){
    if (e.target === this) modal.classList.remove('modal--active')
} )
document.addEventListener('keydown', (e) => {
    const key = e.key; 
    if (key === "Escape") {
        modal.classList.remove('modal--active');
    }
});

function displayCart () {
    modal.innerHTML = ''
    const modalContent = document.createElement('div')
    modalContent.className = 'modal__content'
    modalContent.classList.add('modal__content--l')
    modalContent.classList.add('modal__content--screen-height')
    const modalHeader = document.createElement('div')
    modalHeader.className = 'modal__header'


const modalTitle = document.createElement('h2')
modalTitle.textContent = 'Корзина'
const btnCloseModal = document.createElement('button')
btnCloseModal.className = 'modal__close-btn'


btnCloseModal.addEventListener('click', () => modal.classList.remove('modal--active'))
modalHeader.append(modalTitle,btnCloseModal)

const modalMain = document.createElement('div')
modalMain.className = 'modal__main'

const modalList = document.createElement('ul')
modalList.className = 'modal__list'
    modalList.innerHTML = '';
    productsInCart.forEach((e,i) => {
    const productImg= document.createElement('img')
    productImg.className = 'product__img'
    productImg.src = e.img

    const modalItem = document.createElement('li')
    modalItem.className = 'modal__item'
    modalItem.dataset.id = e.id

    const productInfo = document.createElement('div')
    productInfo.className = 'product__info'

    const productName = document.createElement('h3')
    productName.className = 'product__name'
    productName.textContent = e.name

    const productRating = document.createElement('p')
    productRating.className = 'product__rating'
    productRating.textContent = `Рейтинг товара ${e.rating}`

    const productPrice = document.createElement('span')
    productPrice.className = 'product__price'
    productPrice.textContent = `${(e.price * e.count).toFixed(2)}р.`
    const productCountContainer = document.createElement('div')
    productCountContainer.className = 'product__count-container'
    
    const productCountDown = document.createElement('button')
    productCountDown.className = 'product__count-down'
    const productCountInput = document.createElement('input')
    productCountInput.className = 'product__input-count'
    productCountInput.type = 'text'
    productCountInput.value = e.count

    const productCountUp = document.createElement('button')
    productCountUp.className = 'product__count-up'

    productCountUp.addEventListener('click', () => {
        e.count++
        displayCart()
    })

    productCountDown.addEventListener('click', () => {
        e.count--
        if(e.count === 0){
            productsInCart.splice(i,1)
        }
        displayCart()
    })

    const productDelete= document.createElement('button')
    productDelete.className = 'product__delete'

    modalItem.append(productImg,productInfo,productCountContainer,productPrice,productDelete)
    productInfo.append(productName,productRating)
    productCountContainer.append(productCountDown,productCountInput,productCountUp)
    modalList.append(modalItem)
    

    productDelete.addEventListener('click',e => {
        productsInCart.splice(i,1)
        displayCart()
    })
    })

    
  const productTotal = document.createElement('div')
    productTotal.className = 'product-total'
    const productVolume = document.createElement('p')
    productVolume.className = 'product__volume'
    productVolume.textContent = `Товары: ${productsInCart.reduce((a,curr)=>a + curr.count,0)} шт.`
    const productCoutn = document.createElement('p')
    productCoutn.className = 'product__count'
    productCoutn.textContent = `Итого ${productsInCart.reduce((a,curr)=>a + Number(curr.price * curr.count),0.).toFixed(2)} Руб`
    const productTotalBtn = document.createElement('button')
    productTotalBtn.className = 'total__btn'
    productTotalBtn.textContent = 'Заказать'
    
    modal.append(modalContent)
    modalContent.append(modalHeader,modalMain)
    modalMain.append(modalList)
    
    productTotal.append(productVolume,productCoutn,productTotalBtn)
    modalMain.append(productTotal)
    localStorage.setItem('Cart', JSON.stringify(productsInCart))
}

if(localStorage.getItem('Cart').length > 0){
   productsInCart.push(...JSON.parse(localStorage.getItem('Cart')))
    displayCart()  
}
displayCart()

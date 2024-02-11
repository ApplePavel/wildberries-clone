const modal = document.getElementById("cardsModal")
const productsInCart = []
const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

function displayCart () {
    modal.innerHTML = ''
    const btnModal = document.querySelector(".header__icons-cart")
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

btnModal.addEventListener('click',() => modal.classList.add('modal--active'))
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
    productPrice.textContent = `${e.price} Руб.`


    const productDelete= document.createElement('button')
    productDelete.className = 'product__delete'

    modalItem.append(productImg,productInfo,productPrice,productDelete)
    productInfo.append(productName,productRating)
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
    productVolume.textContent = `Товары:${productsInCart.length}шт`
    const productCoutn = document.createElement('p')
    productCoutn.className = 'product__count'
    productCoutn.textContent = `Итого ${productsInCart.reduce((a,curr)=>a + Number(curr.price),0.).toFixed(2)} Руб`
    const productTotalBtn = document.createElement('button')
    productTotalBtn.className = 'total__btn'
    productTotalBtn.textContent = 'Заказать'
    
    modal.append(modalContent)
    modalContent.append(modalHeader,modalMain)
    modalMain.append(modalList)
    
    productTotal.append(productVolume,productCoutn,productTotalBtn)
    modalMain.append(productTotal)

}

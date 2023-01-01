let product = document.querySelectorAll('.header__link')[1]
let body = document.querySelector('.body')
let bodyText = document.querySelector('.body__text')
let bodyImg = document.querySelector('.body__img')
let productsList = document.querySelector('.products-container')
function productClicked() {
    let bodyTextClass = bodyText.classList
    let productClass = product.classList
    let bodyImgClass = bodyImg.classList
    let productsListClass = productsList.classList
    let bodyClass = body.classList
    if (productClass.contains('product-click')) {
        productClass.remove('product-click')
        bodyTextClass.remove('body__text--click')
        bodyImgClass.remove('body__img--click')
        productsListClass.remove('products-container--click')
        bodyClass.remove('body--click')
    } else {
        productClass.add('product-click')
        bodyTextClass.add('body__text--click')
        bodyImgClass.add('body__img--click')
        productsListClass.add('products-container--click')
        bodyClass.add('body--click')
    }
}

product.onclick = productClicked


let product = document.querySelectorAll('.header__link')[1]
let bodyText = document.querySelector('.body__text')
let bodyImg = document.querySelector('.body__img')
function productClicked() {
    let bodyTextClass = bodyText.classList
    let productClass = product.classList
    let bodyImgClass = bodyImg.classList
    if (productClass.contains('product-click')) {
        productClass.remove('product-click')
        bodyTextClass.remove('body__text--click')
        bodyImgClass.remove('body__img--click')
    } else {
        productClass.add('product-click')
        bodyTextClass.add('body__text--click')
        bodyImgClass.add('body__img--click')
    }
}

product.onclick = productClicked


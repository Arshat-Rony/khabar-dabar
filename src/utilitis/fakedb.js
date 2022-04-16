const addtoDb = (id) => {
    const cart = getCart()
    if (id in cart) {
        cart[id] += 1;
    } else {
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getCart = () => {
    const cart = localStorage.getItem("cart")
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {};
    }
    return cartObj;
}
const removeItemFromCart = (id) => {
    const cart = getCart()
    if (id in cart) {
        delete cart[id]
        localStorage.setItem("cart", JSON.stringify(cart))
    }
}
export {
    addtoDb,
    getCart,
    removeItemFromCart,
}
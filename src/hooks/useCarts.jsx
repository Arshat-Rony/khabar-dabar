import React, { useEffect, useState } from 'react';
import { getCart } from '../utilitis/fakedb';

const useCarts = (meals) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getCart()
        let savedCart = [];
        for (let item in storedCart) {
            const addedProduct = meals.find(meal => meal.id === item)
            if (addedProduct) {
                addedProduct.quantity = storedCart[item];
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [meals])
    return [cart, setCart]
};

export default useCarts;
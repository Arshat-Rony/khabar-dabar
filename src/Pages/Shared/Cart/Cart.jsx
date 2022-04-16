import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
    const navigate = useNavigate()
    let total = 0;
    let quantity = 0;

    for (const item of cart) {
        let price = parseInt(item.price) * parseInt(item.quantity)
        total = total + price;
        quantity += parseInt(item.quantity)
    }
    return (
        <div>
            <h1>Your cart</h1>
            <hr />
            <p>Total added item :  {quantity}</p>
            <p>Your total Price : ${total}</p>
            <button onClick={() => navigate("/shipping")} className="btn w-100">Proceed to Shipment</button>
        </div>
    );
};

export default Cart;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'
import { BsCart3 } from "react-icons/bs"
const Meal = ({ meal, handleCartbtn }) => {
    const { id, name, picture, price, text } = meal;
    return (
        <div className='meal-container p-3'>
            <img src={picture} alt="" />
            <h5 className='mt-4'>{name}</h5>
            <p className='text-muted'><small>{text}</small></p>
            <p>Price : ${price}</p>
            <Link to={`/home/${id}`} className='text-decoration-none text-black'>
                <p>See Detail</p>
            </Link>
            <button onClick={() => handleCartbtn(meal)} className='cart-btn'><BsCart3 /></button>
        </div>
    );
};

export default Meal;
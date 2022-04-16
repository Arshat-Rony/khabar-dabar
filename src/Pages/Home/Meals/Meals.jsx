import React, { useState } from 'react';
import useCarts from '../../../hooks/useCarts';
import useMeals from '../../../hooks/useMeals';
import { addtoDb, getCart } from '../../../utilitis/fakedb';
import Cart from '../../Shared/Cart/Cart';
import Meal from '../Meal/Meal';
import "./Meals.css"
const navlinks = [
    { id: 1, links: "All Meals" },
    { id: 2, links: "Breakfast" },
    { id: 3, links: "Lunch" },
    { id: 4, links: "Dinner" },
]
export const MealContext = React.createContext([])
const Meals = () => {
    const [searchtext, setSearchtext] = useState('')
    const [meals, setMeals] = useMeals("all")
    const [cart, setCart] = useCarts(meals)
    const handleBtn = (text) => {
        setSearchtext(text)
    }
    const handleCartbtn = (meal) => {
        let newCart = []
        const exist = cart.find(item => item.id === meal.id)
        const rest = cart.filter(item => item.id !== meal.id)
        if (exist) {
            exist.quantity += 1;
            newCart = [...rest, exist]
        } else {
            meal.quantity = 1;
            newCart = [...cart, meal]
        }
        setCart(newCart)
        addtoDb(meal.id)
    }
    return (
        <MealContext.Provider value={[meals]}>
            <div className='meals-container'>
                <div className="navlinks-container d-flex flex-column">
                    <div className='d-flex justify-content-start align-items-center flex-md-column flex-row order-md-1 order-2'>
                        {
                            navlinks.map(navlink =>
                                <button className='text-start' onClick={() => handleBtn(navlink.links)} key={navlink.id}>{navlink.links}</button>
                            )
                        }
                    </div>
                    <div className='my-5 order-md-2 order-1'>
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-start my-md-4 ms-2'>{searchtext ? searchtext : "All Meals"}</h1>
                    <hr />
                    <div className="meals">
                        {
                            meals.map(meal => <Meal
                                key={meal.id}
                                meal={meal}
                                handleCartbtn={handleCartbtn}
                            ></Meal>)
                        }
                    </div>
                </div>
            </div>
        </MealContext.Provider>
    );
};

export default Meals;
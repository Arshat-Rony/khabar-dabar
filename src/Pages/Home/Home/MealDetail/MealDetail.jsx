import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMeals from '../../../../hooks/useMeals';
import { BsPlusLg } from "react-icons/bs"
import { FaMinus } from "react-icons/fa"
import { BiChevronRight } from "react-icons/bi"
import './MealDetail.css'
import pic1 from "../../../../images/lunch/lunch1.png"
import pic2 from "../../../../images/lunch/lunch2.png"
import pic3 from "../../../../images/lunch/lunch3.png"
import pic4 from "../../../../images/lunch/lunch4.png"
import pic5 from "../../../../images/lunch/lunch5.png"
import pic6 from "../../../../images/lunch/lunch6.png"
const images = [pic1, pic2, pic3, pic4, pic5, pic6]
const MealDetail = () => {
    let { productId } = useParams()
    const [meals, setMeals] = useMeals("all")
    const [count, setCount] = useState(1)
    const [imagecount, setImageCount] = useState(2)
    const handleImage = () => {
        setImageCount(imagecount + 1)
    }

    const chosedProduct = meals?.find(meal => meal.id === productId)
    return (
        <div className=''>
            <div className="meal-detail d-flex justify-content-between align-items-center gap-4 meal-detail flex-column flex-md-row">
                <div style={{ flexBasis: "50%" }} className='order-1 order-md-2 image'>
                    <img className='d-block mw-100 text-center' src={chosedProduct?.picture} alt="" />
                </div>
                <div className='order-2 order-md-1 text-start mt-5 mt-md-0 pe-5' style={{ flexBasis: "50%" }}>
                    <h3>{chosedProduct?.name}</h3>
                    <p>{chosedProduct?.desc}</p>

                    <div className='mt-4 d-flex align-items-center'>
                        <h2 className='me-3'>{
                            chosedProduct?.price * count
                        }$</h2>
                        <div className='btn-box'>
                            <button className='border-0 bg-white' onClick={() => setCount(count + 1)}><BsPlusLg /></button>
                            <span className='mx-3'>{count}</span>
                            <button
                                disabled={count < 1}
                                className='border-0 bg-white' onClick={() => setCount(count - 1)}><FaMinus /></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='d-flex meal-detail'>

                <div className='d-flex gap-4 flex-wrap'>
                    {
                        images.slice(0, imagecount).map(image =>

                            <img className='d-block' style={{ width: "100px" }} src={image} alt="" />
                        )
                    }
                </div>
                <button id='img-btn'
                    disabled={imagecount > 5}
                    onClick={handleImage} className='btn fs-1 '><BiChevronRight /></button>
            </div>

        </div >
    );
};

export default MealDetail;
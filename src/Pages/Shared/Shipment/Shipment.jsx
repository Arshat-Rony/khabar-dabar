import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import useCarts from '../../../hooks/useCarts';
import useMeals from '../../../hooks/useMeals';
import { BsPlusLg } from "react-icons/bs"
import { FaMinus } from "react-icons/fa"
import "./Shipment.css"
const data = [
    { id: 1, type: "text", placeholder: "Delivery to Door" },
    { id: 2, type: "text", placeholder: "107 Rd No 8" },
    { id: 3, type: "text", placeholder: "From suit or Floor" },
    { id: 4, type: "text", placeholder: "Business Name" },
    { id: 5, type: "text", placeholder: "Add Delivery instructor" },
]

const Shipment = () => {
    const [count, setCount] = useState(1)
    const [meals, setMeals] = useMeals('all')
    const [carts, setCarts] = useCarts(meals)
    return (
        <div className='d-flex justify-content-between shipment-container flex-column flex-md-row gap-5 my-5'>
            <div className='shipping-details top-0'>
                <h3 className='text-start'>Edit Delivery Details</h3>
                <hr />
                <Form>
                    {
                        data.map(item =>
                            <Form.Control
                                style={{ height: "50px" }}
                                key={item.id}
                                type={item.type}
                                placeholder={item.placeholder} />
                        )
                    }
                    <FormControl style={{ background: "crimson", height: "50px" }} type="submit" className='text-white' value="Save & Continue" />

                </Form>
            </div>
            <div className="orders-container text-start">
                <span>From</span><h3>Khabar-Dabar Gulshan Plaza</h3>
                <p>Arriving in 20-30 min</p>
                <p>107 Rd No 8</p>
                <div className="orders text-start">
                    {
                        carts.map((item, index) =>
                            <div key={item?.id} className='order-box d-flex justify-content-between align-items-center mt-4 px-3 py-3'>
                                <div>
                                    <img style={{ width: "100px" }} src={item?.picture} alt="" />
                                </div>
                                <div className='detail'>
                                    <h5>{item?.name.slice(0, 17)}</h5>
                                    <p style={{ color: "crimson" }}><strong>${item?.price}</strong></p>
                                    <p className='text-muted'>Delivery free</p>
                                </div>
                                <div className='btn-box'>
                                    <button index={index} style={{ backgroundColor: "#f0ebddcc" }} className='border-0 ' onClick={() => setCount(count + 1)}><BsPlusLg /></button>
                                    <span className='mx-3'>{count}</span>
                                    <button index={index} style={{ backgroundColor: "#f0ebddcc" }}
                                        disabled={count < 1}
                                        className='border-0' onClick={() => setCount(count - 1)}><FaMinus /></button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="calcultaion-box">
                    <p>Subtotal : </p>
                    <p>Tax : </p>
                    <p>Delivery fee</p>
                    <p>Total : </p>
                    <button style={{ background: "crimson", height: "50px" }} className='w-100 btn text-white'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shipment;
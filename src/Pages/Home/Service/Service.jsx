import React from 'react';
import { AiFillCar, AiFillBell } from "react-icons/ai"
import { FaBabyCarriage } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from "react-icons/bs"

const Service = (props) => {
    const { heading, picture, text } = props.service;
    const { index } = props;
    return (
        <div className='service card border-0 my-5'>
            <img src={picture} alt="" />
            <div className='d-flex mt-4 ps-2'>
                <div>

                    {
                        index === 0 && <span style={{ backgroundColor: "crimson " }} className='fs-2 text-white rounded-circle p-2 '>< AiFillBell /></span>
                    }

                    {
                        index === 1 && <span style={{ backgroundColor: "crimson " }} className='fs-2 text-white rounded-circle p-2'> <AiFillCar /></span>
                    }
                    {
                        index === 2 && <span style={{ backgroundColor: "crimson " }} className='fs-2 text-white rounded-circle p-2'><FaBabyCarriage /></span>
                    }
                </div>
                <div className='text-start ps-4'>
                    <h2>{heading}</h2>
                    <p>{text}</p>
                </div>
            </div>
            <Link to='/home' className='text-decoration-none'>See more
                <BsArrowRightShort className='ms-2 fs-4' />
            </Link>
        </div>
    );
};

export default Service;
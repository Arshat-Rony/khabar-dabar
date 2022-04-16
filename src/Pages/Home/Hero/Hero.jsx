import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import "./Hero.css"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1 className='mb-4'>Hey! Are you Hungry ??</h1>
                <InputGroup className="mb-3">
                    <FormControl id='search'
                        placeholder="Search Your Meal"
                        aria-label="Recipient's username"
                        aria-describedby="Recipient's username"
                    />
                    <InputGroup.Text id="search-btn">Search</InputGroup.Text >
                </InputGroup>
            </div>
        </div>
    );
};

export default Hero;
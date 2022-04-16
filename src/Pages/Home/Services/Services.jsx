import React from 'react';
import Service from '../Service/Service';
import "./Services.css"


const data = [
    { id: 1, heading: "Fast Delivery", text: "Delivery is the process of presenting a text to an audience. Like memory, delivery is less prominent in writing than in oratory; however, there are many occasions when writers must think of how to best deliver their texts.", picture: "https://i.ibb.co/nBmPQtx/adult-blur-blurred-background-687824.png" },

    { id: 2, heading: "A good auto responder", text: "Delivery is the process of presenting a text to an audience. Like memory, delivery is less prominent in writing than in oratory; however, there are many occasions when writers must think of how to best deliver their texts.", picture: "https://i.ibb.co/P5z1Tsb/chef-cook-food-33614.png" },

    { id: 3, heading: "Home delivry", text: "Delivery is the process of presenting a text to an audience. Like memory, delivery is less prominent in writing than in oratory; however, there are many occasions when writers must think of how to best deliver their texts.", picture: "https://i.ibb.co/4JXSsFG/architecture-building-city-2047397.png" },
]
const Services = () => {
    return (
        <div className='services-container'>
            <div className='text-start services-text pt-5 pb-4'>
                <h3>Why you choose us</h3>
                <p className='text-muted'>The word restaurant comes from the French verb restaurer, “to restore oneself,” and the first true French restaurants, opened decades before the 1789 Revolution, purported to be health-food shops selling one principle dish: bouillon.</p>
            </div>
            <div className="services ">
                {
                    data.map((item, index) => <Service
                        key={item.id}
                        service={item}
                        index={index}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;
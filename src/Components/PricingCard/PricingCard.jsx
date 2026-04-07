import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing;
    return (
        <div className='border bg-amber-200 rounded-2xl p-4 flex flex-col'>
            <div className="">
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>${price}/month</h4>
            </div>
            <div className="bg-amber-400 p-4 rounded-lg mt-10 flex-1">
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4">Subsscribe</button>
        </div>
    );
};

export default PricingCard;
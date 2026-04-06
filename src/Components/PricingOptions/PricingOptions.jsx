import React, { use } from 'react';

const PricingOptions = ({ pricingPromisee }) => {
    const pricingData = use(pricingPromisee);
    console.log(pricingData);
    return (
        <div>
            
        </div>
    );
};

export default PricingOptions;
import { Check, CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex'><CircleCheckBig />{feature}</p>
    );
};

export default PricingFeature;
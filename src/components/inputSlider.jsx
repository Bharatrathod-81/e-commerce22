import React, { useState } from 'react';
import { useDataContext } from '../context';





export default function DiscreteSlider({setFilterValue}) {

    const { contextData: { productList }, setContextData } = useDataContext();

    
    const sortArr = productList?.sort((a, b) => a.price - b.price);
    const minPrice = sortArr[0]?.price === undefined ? 0 : sortArr[0]?.price;
    const maxPrice = sortArr[sortArr.length - 1]?.price===undefined ? 0 : sortArr[sortArr.length - 1].price;
    
    const [price,setPrice] = useState(minPrice);

    return (
        <div style={{width:"12rem"}}>
            <h3>Price = {price}</h3>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>₹{minPrice}</div>
                <div>₹{maxPrice}</div>
            </div>
            <input
                style={{width:"100%"}}
                type="range"
                min={minPrice}
                max={maxPrice}
                onChange={event => {
                    setFilterValue(event.target.value)
                    setPrice(event.target.value)
                }}
            />
        </div>
    );
}

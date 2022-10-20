import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ImgMediaCard } from '../components/card';
import Box from '@material-ui/core/Box';
import { useDataContext } from '../context';

export const ProductListing = ({filterValue}) => {

    const [allProduct, setAllProduct] = useState([]);

    const {setContextData} = useDataContext();
    
    useEffect(() => {
        (async () => {
            try{
                const { data } = await axios.get("https://api-generator.retool.com/5Zn1uy/products")
                setAllProduct(data);
                setContextData({type:"GET_PRODUCTS", payload:data})
            }catch(err){
                console.log(err);
            }
        })()
    }, []);


    const getAllProduct = () => {
        if(filterValue === 0){
            return allProduct ; 
        }else{
            const newData = allProduct?.filter(e => e.price >= filterValue);
            return newData;
        }
    };
    
    return (
        <Box display="flex" p={1} flexWrap="wrap" justifyContent="center">
            {getAllProduct()?.map(e => 
                <div key={e?._id} >
                    <ImgMediaCard data={e} />
                </div>
            )}
        </Box>
    )
}


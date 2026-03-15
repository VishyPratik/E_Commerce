import React from 'react'
import products from "./AllData"
import { useParams } from 'react-router-dom'
import ProductShow from './ProductShow';
import LastFoot from './LastFoot';

export default function Product() {

    const { id } = useParams();

    
    const product = products.find((item) => item.id === parseInt(id));

    

    return (
        <>
        <div className="p-10 flex gap-10">

            <ProductShow product={product } />
            </div>
            <LastFoot />
        </>
    )
}

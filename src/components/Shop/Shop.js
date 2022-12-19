import React, { useContext } from 'react';
import { ProductContext } from '../../layouts/Main';
import Product from '../Product/Product';
import './Shop.css'


const Topics = () => {
    const products = useContext(ProductContext)
    // console.log(products);

    return (
        <div className='Topics'>
            {products.map(product => (<Product key={product.id} product={product}></Product>))}
        </div>
    );
};

export default Topics;
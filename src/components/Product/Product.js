import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (product) => {
    const{logo,name,total,id}=product.product
    
    // console.log(product)
    return (
        <div className='container'>
            <div className='cards-container'>
            <div className="cards">
            <img className='image' src={logo} alt="" />
            <h3 className='name'> {name}</h3>
            <p className='quantity'>Quantity: {total}</p>
            <Link to={`quiz/${id}`}><button className='btn btn-primary button'>Start Quiz </button></Link>
            </div>
            </div>
        </div>
    );
};

export default Product;
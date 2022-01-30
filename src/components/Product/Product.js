import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name,seller, price, stock} = props.product
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='product-name'>{props.product.name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
            </div>
        </div>
    );
};

export default Product;
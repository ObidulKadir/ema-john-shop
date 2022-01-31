import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd)=> total+ prd.price,0);
    let total =0;
    for(let i =0;i<cart.length;i++){
        const product = cart[i];
        total = total  + product.price;
    }

    let shipping = 12.99;
    if(total>35){
        shipping =0;
    }else if(total>15){
        shipping = 4.99
    }

    const tax  = (total/10)
    const grandTotal = (total+shipping+tax).toFixed(2);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div style={{ border:"1px solid black",padding:"10px", margin: "20px"}}>
            <div style={{textAlign:"center"}}>
                <h1>Order Summary </h1>
                <h5>Items Ordered:    {props.cart.length} </h5>
            </div>
            <p><small>Product price:   {formatNumber(total)}</small></p>
            <p><small>Shipping cost:   {formatNumber(shipping)}</small></p>
            <p><small>Tax + VAT:    {formatNumber(tax)}</small></p>
            <h4 style={{textAlign:"center"}}>Order Total:   {grandTotal}</h4>
        </div>
        
    );
};

export default Cart;
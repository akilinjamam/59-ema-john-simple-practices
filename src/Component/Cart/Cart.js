import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    let totalCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
    }

    for (const charge of cart) {

        totalCharge = totalCharge + charge.shipping;
    }


    const tax = (total * .10);

    const grandTotal = total + totalCharge + tax
    return (
        <div className='cart'>
            <h3>order summery</h3>
            <h3>order selected: {quantity}</h3>
            <p>Total Price:{total} </p>
            <p>Total Shopping Charge: {totalCharge}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h3>Grand Total: {grandTotal}</h3>
            <h3>{props.children}</h3>
        </div>
    );
};

export default Cart;
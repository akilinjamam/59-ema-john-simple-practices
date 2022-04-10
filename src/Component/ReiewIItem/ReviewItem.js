import React from 'react';
import './ReviewItem.css';
import { TrashIcon } from '@heroicons/react/solid'

const ReviewItem = (props) => {
    const { removeCart, product } = props;
    const { name, price, img, quantity, shipping } = props.product
    return (
        <div className='review'>
            <div className='img-and-detail'>
                <div><img className='image' src={img} alt="" /></div>
                <div className='order-detail' title={name}>
                    <h3 >
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </h3>
                    <p style={{ margin: '0' }}>price: {price} </p>
                    <p style={{ margin: '0' }}> shipping: {shipping}</p>
                    <p style={{ margin: '0' }}>quantity: {quantity}</p>

                </div>
            </div>

            <div className='delete'>
                <button onClick={() => removeCart(product)} style={{ width: '50px', border: 'none', borderRadius: '50%', padding: '7px', width: '41px', height: '41px' }}> <TrashIcon></TrashIcon></button>
            </div>
        </div>
    );
};

export default ReviewItem;
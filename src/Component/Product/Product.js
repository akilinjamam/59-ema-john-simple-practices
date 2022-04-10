import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)

    const { name, img, seller, price, ratings } = props.product;

    const { addToCart } = props
    return (
        <div className='products'>
            <img src={img} alt="" />

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p><small>seller:{seller} </small></p>
                <p><small>Rating:{ratings} stars </small></p>

            </div>
            <button onClick={addToCart} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;
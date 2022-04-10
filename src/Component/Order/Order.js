import React from 'react';
import useCart from '../../hook/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import useProducts from '../hook/useProduct';
import ReviewItem from '../ReiewIItem/ReviewItem';
import './Order.css'

const Order = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    console.log(cart);

    const removeCart = (product) => {
        console.log(product, 'clicked');

        const rest = cart.filter(item => item.id !== product.id);

        removeFromDb(product.id)
        setCart(rest);

    }

    return (
        <div className='order'>

            <div className='product-container order-product'>

                {
                    cart.map(product => <ReviewItem removeCart={removeCart} product={product} key={product.id}></ReviewItem>)
                }

            </div>

            <div className='cart-containers order-cart'>

                <Cart cart={cart}>
                    <h2>this is order</h2>
                </Cart>
            </div>


        </div>
    );
};

export default Order;
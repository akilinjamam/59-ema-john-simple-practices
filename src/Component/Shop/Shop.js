import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hook/useCart';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../hook/useProduct';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)





    const addToCart = (SelectedProduct) => {
        console.log(SelectedProduct);
        let newCart = [];
        const exist = cart.find(product => product.id === SelectedProduct.id);
        if (!exist) {
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== SelectedProduct.id);
            SelectedProduct.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }

        setCart(newCart)

        addToDb(SelectedProduct.id);
    };

    return (
        <div className='shop-container'>
            <div className="product-containers">
                {
                    products.map(product => <Product addToCart={() => addToCart(product)} product={product} key={product.id}></Product>)
                }
            </div>

            <div className="cart-containers">


                <Cart cart={cart} carts={cart.length}>
                    <h2>this is shop</h2>
                    <Link to="/order"> <button>go to shop</button></Link>

                </Cart>
            </div>
        </div>
    );
};




export default Shop;





/* ------------------------------------------------- */

/* 

 useEffect(() => {
        console.log('loacal storage first line ', products)
        const storedCard = getStoredCard();
        const savedCart = [];
        console.log(storedCard)
        for (const id in storedCard) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedCard[id];
                addedProduct.quantity = quantity;

                savedCart.push(addedProduct);

                console.log(addedProduct);

            }
            setCart(savedCart)

        }
    }, [products])

*/



/* 

https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json

*/
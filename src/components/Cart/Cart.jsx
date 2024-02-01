import {React, useState} from 'react';

import CartHeader from '../CartHeader/CardHeader'
import Product from '../Product/Product'
import CartFooter from '../CartFooter/CartFooter'
import data from './../../data'
import { useEffect } from 'react';

export default function Cart() {

    const [cart, setCart] = useState(data)

    const [total, setTotal] = useState({
        price: cart.reduce((acc, prod) => acc += prod.priceTotal, 0), 
        count: cart.reduce((acc, prod) => acc += prod.count, 0),
    })

    useEffect(() => {
        setTotal({
            price: cart.reduce((acc, prod) => acc += prod.priceTotal, 0), 
            count: cart.reduce((acc, prod) => acc += prod.count, 0),            
        }, [cart])
    })

    const deleteProduct = (id) => {
        setCart(data => data.filter(prod => prod.id !== id))
    }

    const increaseCount = (id) => { 
        setCart(cart => {
            return cart.map(product => {
            if (product.id === id) {
                return {
                    ...product, 
                    count: ++product.count, 
                    priceTotal: product.count * product.price,
                }
            } return product
        })})
    }

    const decreaseCount = (id) => {
        setCart(cart => {
            return cart.map(product => {
            if (product.id === id) {
                if (product.count > 1) {
                    return {
                        ...product, 
                        count: --product.count, 
                        priceTotal: product.count * product.price,
                    }
                } return {
                    ...product, 
                    priceTotal: product.count * product.price,
                }    
            } return product
        })})
    }

    const changeValue = (id, value) => {
        setCart(cart => {
            return cart.map(product => {
                if (product.id === id) {
                    return {
                        ...product, 
                        count: value, 
                        priceTotal: value * product.price, 
                    }
                } return product
            })
        })
    }

    const products = cart.map(product => {
        return (
            <Product 
                product={product} 
                key={product.id} 
                deleteProduct={deleteProduct} 
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
                changeValue={changeValue}
            />
        )
    })

    // if (!products.length) {
    //     return (
    //         <>
    //             <CartHeader/>
    //             <h1>Товаров в корзине нет!</h1>
    //             <CartFooter/>
    //         </>   
    //     )
    // }

    return (
        <section className="cart">
            <CartHeader/>
            {products}
            <CartFooter total={total}/>
        </section>
    )
}

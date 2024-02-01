import React from 'react';
import './product.scss';
import Count from '../Count/Count';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import priceFormatter from './../../utils/priceFormatter'

export default function Product({product, deleteProduct , increaseCount, decreaseCount, changeValue}) {

  const {img, title, priceTotal, count, id} = product;


  return (
    <section className="product">
        <div className="product__img"><img src={`./img/products/${img}`} alt={title}/></div>
        <div className="product__title">{title}</div>
        <div className="product__count">
          <Count count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} changeValue={changeValue} id={id} />
        </div>
        <div className="product__price">{priceFormatter.format(priceTotal)}</div>
        <div className="product__controls">
          <ButtonDelete deleteProduct={deleteProduct} id={id}/>
        </div>
    </section>
  )
}

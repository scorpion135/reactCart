import React from 'react'
import './cartFooter.scss'
import priceFormatter from '../../utils/priceFormatter'

export default function CartFooter({total}) {
  return (
    <footer className="cart-footer">
        <div className="cart-footer__count">{total.count} ед.</div>
        <div className="cart-footer__price">{priceFormatter.format(total.price)} руб.</div>
    </footer>
  )
}

import React from 'react';
import './cardheader.scss';

export default function CardHeader() {
  return (
    <header className="cart-header">
        <div className="cart-header__title">наименование</div>
        <div className="cart-header__count">количество</div>
        <div className="cart-header__cost">стоимость</div>
    </header>
  )
}

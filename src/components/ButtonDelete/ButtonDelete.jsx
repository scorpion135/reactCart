import React from 'react'
import './ButtonDelete'

export default function Button({deleteProduct, id}) {
  return (
    <button type="button" onClick={() => {deleteProduct(id)}}>
      <img src="./img/icons/cross.svg" alt="Delete"/>
    </button>
  )
}

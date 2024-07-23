import React from 'react'

function ProductRow(props) {
  return (
    <div>
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    </div>
  )
}

export default ProductRow
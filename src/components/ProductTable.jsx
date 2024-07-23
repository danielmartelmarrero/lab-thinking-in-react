import React from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {props.products.map(oneProduct=>{
                return (
                    <ProductRow product={oneProduct}/>
                )
            })}
        </table>
    </div>
  )
}

export default ProductTable
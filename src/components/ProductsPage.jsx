import { useState } from 'react'
import ProductTable from './ProductTable'
import SortButton from './SortButton'
import jsonData from '../data.json'


function ProductsPage() {
    const [products, setProducts] = useState(jsonData)

    function sortProducts(){
        const prodsCopied = [...products]
        prodsCopied.sort((a, b)=>{
            return a.name.localeCompare(b.name)
        })
        setProducts(prodsCopied)
    }

  return (
    <div>
        <h1>IronStore</h1>
        <SortButton sortProducts={sortProducts}/>
        <ProductTable products={products}/>
    </div>

  )
}

export default ProductsPage
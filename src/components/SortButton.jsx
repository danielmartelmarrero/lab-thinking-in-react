import React from 'react'

function SortButton(props) {
  return (
    <div>
        <button onClick={props.sortProducts}>Sort Products</button>
    </div>
  )
}

export default SortButton
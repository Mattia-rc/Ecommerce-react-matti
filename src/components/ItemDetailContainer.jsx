import React, { useContext } from 'react'
import { dataContext } from './Context/DataContext'

function ItemDetailContainer() {

  const {data} = useContext(dataContext)
  return (
    
    <div className='grid-img'>
        {data.map((produc)=>(
          <div>
            <h1>{produc.id}</h1>
          </div>

        ))}
    </div>
  )
}

export default ItemDetailContainer
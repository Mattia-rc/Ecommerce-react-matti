import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Products() {
    const { data } = useContext(dataContext)
    
    return (
        <Container className='mt-5'>
        <div className='grid-img'>
            {data.map((product) => (
                <div key={product.id}>
                    <img src={product.photo} className='img-style w-100 h-55' />
                    <div className='flex-div-map'>
                        <p className='sizeLetra  colorRating'><FontAwesomeIcon icon={faStar} style={{ color: "#ff0000" }} />{product.rating} </p>
                    </div>
                    <div className='d-flex'>
                        <p className='colorLetras'>{product.title}</p>
                    </div>
                    <Link to={`/detail/${product.id}`}><Button>Ver detalle</Button></Link>
                </div>
            ))}

        </div>
        </Container>
    )
}

export default Products
/* 
<img src={dat.photo} className='img-style w-100 h-55' />
<div className='flex-div-map'>
  <p> {dat.superHost} </p>
  <p className='sizeLetra'> {dat.type} </p>
  <p className='sizeLetra'> {dat.beds}. </p>
  <p className='sizeLetra ms-auto colorRating'><FontAwesomeIcon icon={faStar} style={{color: "#ff0000"}} />{dat.rating} </p>
</div>
<div className='d-flex'>
  <p className='colorLetras'>{dat.title}</p>
</div>
</div> */
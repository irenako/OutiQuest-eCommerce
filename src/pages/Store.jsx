import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../productsStore'
import './Store.css'
import ProductCard from '../components/ProductCard'

export default function Store() {
  return (
    <>
    <h1 className='p-3' align="center">Welcome to the Store!</h1>
    <Row xs={1} md={3} className='g-4'>
      {productsArray.map((product, i) => (
        <Col align='center' key={i} className='mt-5'>
        <ProductCard product={product}/>
      </Col>
      ))}
    </Row>
    </>
  )
}
